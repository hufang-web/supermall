<template>
	<div v-if="Object.keys(goodsitem).length!==0" class="goodsitem" @click="itemclick(goodsitem)">
    <img :src="showimg" @load="imgload">
    <div>
      <p>{{goodsitem.title}}</p>
      <span class="price">¥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
	</div>
</template>
<script>
export default {
	name:'goodsitem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgload(){
      if(this.$route.path==='/home'){
        this.$bus.$emit('imgloadHome')
      }else{
        this.$bus.$emit('imgloadDetail')
      }
    },
    itemclick(goodsitem){
      if(goodsitem.iid){
        this.$router.push('/detail/'+goodsitem.iid)
      }else{
        alert('该商品不存在！')
      }
    }
  },
  computed:{
    showimg(){
      return this.goodsitem.show?this.goodsitem.show.img:this.goodsitem.image
    }
  }
}
</script>
<style scoped>
  .goodsitem{width:50%;padding:.1rem 0 .2rem;}
  .goodsitem img{width:90%;display:block;margin:0 auto;border-radius:.1rem;}
  .goodsitem div{width:90%;margin:.1rem auto 0;font-size:.2rem;text-align:center;}
  .goodsitem p{height:.24rem;line-height:.24rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;margin-bottom:.1rem;}
  .collect{color:red;margin-left:.2rem;padding-left:.4rem;position:relative;}
  .collect::before{position:absolute;content:'';width:.3rem;background:red;height:100%;left:0;top:0;}
</style>
