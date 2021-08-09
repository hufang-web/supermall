<template>
	<div class="detail">
    <detailtopbar ref="detailnavbar" @itemclicktop="itemclicktop"></detailtopbar>
    <scroll class="content" ref="detailscroll" :probeType="3" :listenScroll="true" @scroll="scroll">
      <vantswiper ref="cont1" :list="topImages"></vantswiper>
      <goodDetail :GoodsInfo="GoodsInfo"></goodDetail>
      <shopInfo :shop="shop"></shopInfo>
      <detailinfo :detailInfo="detailInfo" @detailimgload="detailimgload"></detailinfo>
      <itemParams  ref="params" :itemParams="itemParams"></itemParams>
      <rate :crate="crate" ref="crates"></rate>
      <goods :goodslist="recommendlist" ref="recom"></goods>
    </scroll>
    <botnav @addToCart="addCart"></botnav>
    <backtop @click.native="backtop" v-if="isShow"></backtop>
	</div>
</template>
<script>
import detailtopbar from './childCom/detailtopbar.vue'
import vantswiper from 'components/common/swiper/vantswiper.vue'
import goodDetail from './childCom/goodDetail.vue'
import shopInfo from './childCom/shopInfo.vue'
import detailinfo from './childCom/detailinfo.vue'
import scroll from 'components/common/scroll/scroll.vue'
import itemParams from './childCom/itemParams.vue'
import rate from './childCom/rate.vue'
import goods from 'components/content/goods/goods.vue'
import botnav from './childCom/botnav.vue'
import backtop from 'components/content/backtop.vue'
import {getDetail,GoodsInfo,shopDetail,getrecommend} from 'network/detail.js'
import {debounce} from 'common/utils.js'
export default {
	name:'detail',
  components:{
    detailtopbar,
    vantswiper,
    goodDetail,
    shopInfo,
    detailinfo,
    scroll,
    itemParams,
    rate,
    goods,
    botnav,
    backtop
  },
  data(){
    return {
      id:null,
      topImages:[],
      GoodsInfo:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      crate:{},
      recommendlist:[],
      posy:[],
      isShow:false,
      currentIndex:0
    }
  },
  methods:{
    addCart(){
      const product={}
      product.image=this.topImages[0]
      product.title=this.GoodsInfo.title
      product.desc=this.GoodsInfo.desc
      product.price=this.GoodsInfo.newPrice
      product.id=this.id
      //mutations this.$store.commit('addCart',product)
      //actions也可以映射，类似getters
      //actions 可以返回一个promise
      this.$store.dispatch('addCart',product).then(res=>{
        this.$toast(res, {duration: 1500})
      })
    },
    detailimgload(){
      this.$refs.detailscroll.refresh()
      this.posy.push(0)
      this.posy.push(this.$refs.params.$el.offsetTop - this.$refs.detailnavbar.$el.offsetHeight)
      this.posy.push(this.$refs.crates.$el.offsetTop - this.$refs.detailnavbar.$el.offsetHeight)
      this.posy.push(this.$refs.recom.$el.offsetTop - this.$refs.detailnavbar.$el.offsetHeight)
      this.posy.push(Number.MAX_VALUE)
    },
    scroll(pos){
      const positionY=-pos.y
      this.isShow=-pos.y>1000?true:false
      let length=this.posy.length
      for(let i=0;i<length-1;i++){
        if(this.currentIndex!==i && (positionY>=this.posy[i] && positionY < this.posy[i+1])){
          this.currentIndex=i
          this.$refs.detailnavbar.curindex=this.currentIndex
          console.log(this.currentIndex)
        }
      }
    },
    backtop(){
      this.$refs.detailscroll.scrollTo(0,0,50)
    },
    itemclicktop(index){
      this.$refs.detailscroll.scrollTo(0,-this.posy[index],50)
    }
  },
  created(){
    this.id=this.$route.params.id
    getDetail(this.id).then(res=>{
      console.log(res)
      const data=res.result
      this.topImages=data.itemInfo.topImages
      this.GoodsInfo=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop=new shopDetail(data.shopInfo)
      this.detailInfo=data.detailInfo
      this.itemParams=data.itemParams
      if(data.rate.cRate!=0){
        this.crate=data.rate.list[0]
      }
    }),
    getrecommend().then(res=>{
      console.log(res.data.list)
      this.recommendlist=res.data.list
    })
  },
  mounted(){
    const refresh=debounce(this.$refs.detailscroll.refresh,50)
    this.$bus.$on('imgloadDetail',refresh)
  }
}
</script>
<style scoped>
  .detail{height:100vh;background:#fff;z-index:2;position:relative;}
  .swiper-container{height:4rem;}
  .content{height:calc(100vh - 2.2rem);overflow:hidden;}
</style>
