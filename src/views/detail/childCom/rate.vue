<template>
	<div class="cratebox" v-if="Object.keys(crate).length!==0">
    <div class="info-user">
      <img :src="crate.user.avatar">
      <span>{{crate.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{crate.content}}</p>
      <span class="date">{{crate.created | showDate}}</span>
      <span class="style">{{crate.style}}</span>
    </div>
    <div class="imgsbox" v-if="crate.images">
      <img v-for="item in crate.images" :src="item">
    </div>
	</div>
</template>
<script>
import {formatDate} from 'common/utils.js'
export default {
	name:'rate',
  props:{
    crate:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(time){
      const date = new Date(time*1000)
      return formatDate(date,'yyyy-MM-dd');
    }
  }
}
</script>
<style scoped>
  .cratebox{font-size:.24rem;padding:.2rem;}
  .info-user{display:flex;align-items:center;}
  .info-user img{width:1rem;}
  .imgsbox img{width:1rem;}
</style>
