<template>
	<div class="tabcontrol">
    <span v-for="(item,index) in namelist" :class="{active:curindex===index}" @click="tabclick(index)">{{item}}</span>
	</div>
</template>
<script>
export default {
	name:'tabcontrol',
  data(){
    return {
      curindex:0
    }
  },
  props:{
    namelist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    tabclick(i){
      this.curindex=i
      this.$emit('tabclick',i)
    }
  }
}
</script>
<style scoped>
  .tabcontrol{display:flex;width:100%;background:#fff;}
  .tabcontrol span{flex:1;color:#000;font-size:.24rem;text-align:center;padding:.2rem 0;}
  .tabcontrol span.active{color:red;border-bottom:1px solid red;}
</style>
