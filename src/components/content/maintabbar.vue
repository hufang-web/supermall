<template>
	<tabbar>
    <tabbaritem link="/home">
      <img slot="icon" src="~assets/assets/img/tabbar/home.png">
      <img slot="iconActive" src="~assets/assets/img/tabbar/homeActive.png">
      <div slot="tabname">首页</div>
    </tabbaritem>
    <tabbaritem link="/category">
      <img slot="icon" src="~assets/assets/img/tabbar/cate.png">
      <img slot="iconActive" src="~assets/assets/img/tabbar/cateActive.png">
      <div slot="tabname">分离</div>
    </tabbaritem>
    <tabbaritem link="/cart">
      <img slot="icon" src="~assets/assets/img/tabbar/cart.png">
      <img slot="iconActive" src="~assets/assets/img/tabbar/cartActive.png">
      <div slot="tabname">购物车</div>
    </tabbaritem>
    <tabbaritem link="/profile">
      <img slot="icon" src="~assets/assets/img/tabbar/profile.png">
      <img slot="iconActive" src="~assets/assets/img/tabbar/profileActive.png">
      <div slot="tabname">我的</div>
    </tabbaritem>
  </tabbar>
</template>
<script>
import tabbar from '../common/tabbar/tabbar.vue'
import tabbaritem from '../common/tabbar/tabbaritem.vue'
export default {
	name:'maintabbar',
  components:{
    tabbar,
    tabbaritem
  }
}
</script>
<style scoped></style>
