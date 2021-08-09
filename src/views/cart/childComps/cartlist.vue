<template>
	<div class="cart-list">
    <img v-if="list.length===0" src="~assets/assets/img/gouwuc.jpg" class="gouwuc" @click="gouwucclick">
    <div v-else>
      <scroll class="content" ref="scrollcart">
        <cartlistitem v-for="(item,i) in list" :key="i" :product="item"></cartlistitem>
      </scroll>
    </div>
	</div>
</template>
<script>
import scroll from 'components/common/scroll/scroll.vue'
import cartlistitem from './cartlistitem.vue'
import {mapGetters} from 'vuex'
export default {
	name:'cartlist',
  components:{
    scroll,
    cartlistitem
  },
  computed:{
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({list:'cartList'})
  },
  methods:{
    gouwucclick(){
      this.$router.replace('/home')
    }
  },
  activated() {
    if(this.list.length!==0){
      this.$refs.scrollcart.refresh()
    }
  }
}
</script>
<style scoped>
  .content{height:calc(100vh - 3.2rem);overflow:hidden;}
  .cartlist{width:100%;}
  .cartlist li{display:flex;}
  .check{width:.2rem;height:.2rem;border-radius:50%;border:1px solid red;display:block;margin:.1rem;}
  .cartlist img{width:.8rem;height:.8rem;margin:.1rem;}
  .goodcont{flex:1;height:5rem;}
  .goodcont h3,.goodcont p{padding:0 .1rem;}
  .goodcont h3,.goodcont p{height:.4rem;overflow:hidden;margin:0;}
  .goodcont p{height:.28rem;}
  .goodcont div{color:red;display:flex;justify-content:space-between;padding:0 .1rem;}
  .gouwuc{width:100%;}
</style>
