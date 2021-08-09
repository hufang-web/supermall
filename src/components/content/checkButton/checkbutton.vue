<template>
	<div class="check_button">
    <span :class="{active:isChecked}"></span>
	</div>
</template>
<script>
export default {
	name:'checkbutton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style scoped>
  .check_button span{width:.2rem;height:.2rem;display:block;border-radius:50%;border:1px solid red;}
  .check_button span.active{background:red;}
</style>
