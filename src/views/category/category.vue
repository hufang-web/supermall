<template>
	<div class="category">
    <navbar>
      <div>分类</div>
    </navbar>
    <div class="midbox">
      <div class="lebox">
        <scroll class="content">
          <ul class="cate_list" v-if="categorylist.length!==0">
            <li v-for="(item,i) in categorylist" :class="{active:curindex===i}" @click="liclick(i)" :key="i">
              {{item.title}}
            </li>
          </ul>
        </scroll>
      </div>
      <div class="ribox">
        <scroll class="content" ref="scroll2">
          <ul class="catelist">
            <li v-for="(item,i) in categorycontentlist">
              <a :href="item.link">
                <img :src="item.image" @load="imgload">
                <span>{{item.title}}</span>
              </a>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
	</div>
</template>
<script>
import navbar from 'components/common/navbar/navbar.vue'
import scroll from 'components/common/scroll/scroll.vue'
import {getCategory,getSubCategory} from 'network/category.js'
export default {
	name:'category',
  data(){
    return {
      categorylist:[],
      curindex:0,
      maitKey:null,
      categorycontentlist:[],
      count:0,
      length:0
    }
  },
  components:{
    navbar,
    scroll
  },
  methods:{
    liclick(i){
      this.curindex=i
      this.getCategorymain()
    },
    imgload(){
      if(++this.count===this.length){
        console.log('----')
        this.$refs.scroll2.refresh()
        this.count=0
      }
    },
    getCategorymain(){
        getCategory().then(res=>{
          console.log(res)
          this.categorylist=res.data.category.list
          this.maitKey=this.categorylist[this.curindex].maitKey
          getSubCategory(this.maitKey).then(res=>{
            console.log(res)
            this.categorycontentlist=res.data.list
          })
        })
    }
  },
  created() {
    this.getCategorymain()
  },
  watch:{
    categorycontentlist(){
      this.length=this.categorycontentlist.length
    }
  }
}
</script>
<style scoped>
  .navbar{background:red;color:#fff;text-align:center;font-size:.5rem;line-height:1rem;}
  .midbox{overflow:hidden;height:calc(100vh - 2.2rem);width:100%;display:flex;}
  .lebox,.ribox{width:25%;height:100%;}
  .ribox{width:75%;}
  .content{width:100%;height:100%;overflow:hidden;}
  .cate_list{width:100%;font-size:.24rem;}
  .cate_list li{padding:.2rem;}
  .cate_list li.active{background:red;color:#fff;}
  .catelist{font-size:.24rem;display:flex;flex-wrap:wrap;text-align:center;}
  .catelist li{width:33.33%;padding:.1rem 0;}
  .catelist a{color:#000;}
  .catelist li img{width:80%;display:block;margin:0 auto;}
</style>
