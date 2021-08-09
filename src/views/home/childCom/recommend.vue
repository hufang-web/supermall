<template>
	<div class="recommend">
    <a v-for="item in recommend" :href="item.link">
      <img :src="item.image">
      <span>{{item.title}}</span>
    </a>
	</div>
</template>
<script>
export default {
	name:'recommend',
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
  .recommend{display:flex;padding:.1rem 0;}
  .recommend a{flex:1;text-align:center;font-size:.24rem;color:#000;}
  .recommend img{width:90%;}
</style>
