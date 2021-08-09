<template>
  <navbar class="navbartop">
    <img src="~assets/assets/img/leftarr.png" slot="left" @click="backprev">
    <ul>
      <li v-for="(item,index) in tabname" :key="index" :class="{active:index===curindex}" @click="liitem(index)">
        <span>{{item}}</span>
      </li>
    </ul>
  </navbar>
</template>
<script>
import navbar from 'components/common/navbar/navbar.vue'
export default {
	name:'detailtopbar',
  data(){
    return {
      tabname:['商品','参数','评论','推荐'],
      curindex:0
    }
  },
  components:{
    navbar
  },
  methods:{
    backprev(){
      this.$router.back()
    },
    liitem(index){
      this.curindex=index
      this.$emit('itemclicktop',index)
    }
  }
}
</script>
<style scoped>
.navbartop{width:100%;background:#fff;border-bottom: 0.02rem solid #f0f0f0;}
.left img{width:80%;display:block;margin:.1rem auto 0;}
.center ul{width:100%;display:flex;}
.center li{flex:1;text-align:center;font-size:.24rem;}
.center li span{padding:.3rem 0;display:block;margin:0 auto;}
.center li.active span{color:red;}
</style>
