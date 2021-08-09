<template>
	<div class="detail-info" v-if="Object.keys(detailInfo).length!==0">
    <div class="desc">{{detailInfo.desc}}</div>
    <ul class="detailpic">
      <li v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" @load="imgLoad">
      </li>
    </ul>
	</div>
</template>
<script>
export default {
	name:'detailinfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      count:0,
      imgslen:0
    }
  },
  methods:{
    imgLoad(){
      if(++this.count===this.imgslen){
        this.$emit('detailimgload')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imgslen=this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
  .desc{font-size:.24rem;padding:.2rem;}
  .detailpic{width:100%;}
  .detailpic img{width:90%;display:block;margin:0 auto;}
</style>
