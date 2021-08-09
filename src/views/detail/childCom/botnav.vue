<template>
	<div class="botnav">
		<span>客服</span>
    <span @click="backtocart">购物车</span>
    <div>
      <a @click="addToCart">加入购物车</a>
      <a>立即购买</a>
    </div>
	</div>
</template>
<script>
export default {
	name:'botnav',
  methods:{
    addToCart(){
      this.$emit('addToCart')
    },
    backtocart(){
       this.$router.replace('/cart')
    }
  }
}
</script>
<style scoped>
  .botnav{height:1.2rem;background:#fff;position:absolute;bottom:0;left:0;box-shadow: 0 1px 0.1rem #ccc;width:100%;z-index:3;display:flex;font-size:.3rem;text-align:center;line-height:1.2rem;}
  .botnav span{width:20%;}
  .botnav div{width:60%;display:flex;}
  .botnav a{width:50%;background:yellow;}
  .botnav a:nth-child(2){background:red;color:#fff;}
</style>
