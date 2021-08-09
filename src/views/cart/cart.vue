<template>
	<div class="cart">
    <navbar class="nav-bar">
      <img slot="left" src="~assets/assets/img/leftarrw.png" @click="back">
      <div>购物车({{length}})</div>
    </navbar>
    <cartlist></cartlist>
    <cartbotnav></cartbotnav>
	</div>
</template>
<script>
import navbar from 'components/common/navbar/navbar.vue'
import cartlist from './childComps/cartlist.vue'
import cartbotnav from './childComps/cartbotnav.vue'
import {mapGetters} from 'vuex'
export default {
	name:'home',
  components:{
    navbar,
    cartlist,
    cartbotnav
  },
  methods:{
    back(){
      this.$router.back()
    }
  },
  computed:{
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({length:'cartLength'})
  }
}
</script>
<style scoped>
  .nav-bar{background:red;font-size:.7rem;color:#fff;text-align:center;}
  .left img{width:80%;margin-top:.1rem;}
  .cart{font-size:.24rem;}
</style>
