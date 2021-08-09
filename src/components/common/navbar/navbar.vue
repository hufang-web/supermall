<template>
	<div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
	</div>
</template>
<script>
export default {
	name:'navbar'
}
</script>
<style scoped>
  .navbar{width:100%;height:1rem;display:flex;}
  .center{flex:1;}
  .left,.right{width:1rem;}
</style>
