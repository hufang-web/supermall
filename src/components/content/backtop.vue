<template>
	<div class="backtop">
    <img src="~assets/assets/img/top.jpg">
	</div>
</template>
<script>
export default {
	name:'backtop'
}
</script>
<style scoped>
  .backtop{z-index:2;position:absolute;width:1rem;border-radius:50%;height:1rem;bottom:1.4rem;right:.2rem;overflow:hidden;}
  .backtop img{width:100%;display:block;}
</style>
