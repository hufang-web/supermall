<template>
	<div v-if="Object.keys(GoodsInfo).length!==0" class="base-info">
    <div class="info-title">{{GoodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{GoodsInfo.newPrice | addyuan}}</span>
      <span class="o-price">{{GoodsInfo.oldPrice | addyuan}}</span>
      <span v-if="GoodsInfo.discount" :style="{background:GoodsInfo.discountBgColor}" class="discount">{{GoodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{GoodsInfo.columns[0]}}</span>
      <span>{{GoodsInfo.columns[1]}}</span>
      <span>{{GoodsInfo.services[GoodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-servers">
      <div v-for="index in GoodsInfo.services.length-1" :key="index" v-if="GoodsInfo.services[index-1].icon">
        <img :src="GoodsInfo.services[index-1].icon">
        <span>{{GoodsInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name:'goodDetail',
  props:{
    GoodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    addyuan(value){
      return '¥'+value
    }
  }
}
</script>
<style scoped>
  .info-title{font-size:.3rem;}
  .o-price{margin-left:.3rem;text-decoration:line-through;}
  .base-info{font-size:.18rem;padding:.1rem .2rem;}
  .info-other{display:flex;}
  .info-other span{flex:1;}
  .info-other span:last-child,.info-servers div:last-child{text-align:right;}
  .info-servers{padding:.1rem 0;display:flex;}
  .info-servers div{flex:1;}
  .info-servers div img{width:.2rem;}
  .discount{margin-left:.3rem;color:#fff;padding:0 .1rem;border-radius:.2rem;background:#999999;}
</style>
