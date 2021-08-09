<template>
	<div class="tabitem" @click="tabClick">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="iconActive"></slot>
    </div>
    <div :style="activeClass">
      <slot name="tabname"></slot>
    </div>
	</div>
</template>
<script>
export default {
	name:'tabbaritem',
  props:{
    link:{
      type:String
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods:{
    tabClick(){
      this.$router.replace(this.link)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link)!==-1
    },
    activeClass(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>
<style scoped>
  .tabitem{flex:1;color:#000;font-size:.24rem;text-align:center;}
  .tabitem img{display:block;width:.6rem;margin:0 auto;padding:.15rem 0 .05rem;}
</style>
