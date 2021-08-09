<template>
	<div class="home">
    <navbar>购物街</navbar>
    <scroll class="content" ref="homescroll" :listenScroll="true" :probeType="3" :pullup="true" @scrollToEnd="scrollToEnd" @scroll="scroll">
      <homeswiper :list="banners" @slideimgload="slideimgload"></homeswiper>
      <recommend :recommend="recommend"></recommend>
      <feature />
      <tabcontrol :namelist="['新款','流行','热卖']" @tabclick="tabclick" ref="tabcontrol1"></tabcontrol>
      <goods :goodslist="showGoods"></goods>
    </scroll>
    <tabcontrol v-show="ishow" :namelist="['新款','流行','热卖']" @tabclick="tabclick" ref="tabcontrol2" class="tabcontroltop"></tabcontrol>
    <backtop v-show="ishow" @click.native="backtopclick"></backtop>
	</div>
</template>
<script>
import navbar from 'components/common/navbar/navbar.vue'
import homeswiper from 'components/common/swiper/vantswiper.vue'
import scroll from 'components/common/scroll/scroll.vue'
import feature from './childCom/feature.vue'
import recommend from './childCom/recommend.vue'
import tabcontrol from 'components/content/tabcontrol.vue'
import goods from 'components/content/goods/goods.vue'
import backtop from 'components/content/backtop.vue'
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils.js'
export default {
	name:'home',
  data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        new:{page:0,list:[]},
        pop:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      curtype:'new',
      ishow:false,
      scrollY:0
    }
  },
  components:{
    navbar,
    homeswiper,
    scroll,
    feature,
    recommend,
    tabcontrol,
    goods,
    backtop
  },
  computed:{
    showGoods(){
      return this.goods[this.curtype].list
    }
  },
  methods:{
    getHomeMule(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    },
    slideimgload(){
      this.$refs.homescroll.refresh()
    },
    getHomedetailGoods(type){
      let page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        console.log(res.data)
        this.goods[type].page+=1
        this.goods[type].list.push(...res.data.list)
      })
    },
    tabclick(i){
      switch(i){
        case 0 :
          this.curtype="new";
          break;
        case 1 :
          this.curtype="pop";
          break;
        case 2 :
          this.curtype="sell";
          break;
      }
      this.$refs.tabcontrol1.curindex=i
      this.$refs.tabcontrol2.curindex
    },
    scrollToEnd(){
      this.getHomedetailGoods(this.curtype)
    },
    scroll(pos){
      if(-pos.y>this.$refs.tabcontrol1.$el.offsetTop){
          this.ishow=true
      }else{
        this.ishow=false
      }
    },
    backtopclick(){
      this.$refs.homescroll.scrollTo(0,0,50)
    }
  },
  created(){
    this.getHomeMule()
    this.getHomedetailGoods('new')
    this.getHomedetailGoods('sell')
    this.getHomedetailGoods('pop')
  },
  mounted(){
    const refresh=debounce(this.$refs.homescroll.refresh,50)
    this.$bus.$on('imgloadHome',refresh)
  },
  deactivated(){
    this.scrollY=this.$refs.homescroll.setScrollY()
    console.log(this.scrollY)
  },
  activated(){
    this.$refs.homescroll.scrollTo(0,this.scrollY,0)
  }
}
</script>
<style scoped>
  .navbar{background:red;color:#fff;font-size:.7rem;text-align:center;}
  .content{height:calc(100vh - 2.2rem);overflow:hidden;}
  .tabcontroltop{top:1rem;left:0;position:absolute;z-index:2;}
</style>
