<template>
	<div class="goods">
    <goodsitem v-for="(item,index) in goodslist" :goodsitem="item"></goodsitem>
	</div>
</template>
<script>
import goodsitem from './goodsitem.vue'
export default {
	name:'goods',
  components:{
    goodsitem
  },
  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
  .goods{display:flex;flex-wrap:wrap;padding-top:.2rem;}
</style>
