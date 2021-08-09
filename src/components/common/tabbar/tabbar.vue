<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name:'tabbar'
}
</script>
<style scoped>
	.tabbar{width:100%;height:1.2rem;position:absolute;left:0;bottom:0;background:#fff;display:flex;box-shadow:0 1px .1rem #ccc;}
</style>
