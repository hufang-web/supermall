<template>
	<div class="iteminfo">
    <div class="item_selector">
      <checkbutton @click.native="checkclick" :isChecked="product.checked"></checkbutton>
    </div>
    <img :src="product.image">
    <div class="cartcont">
      <h3>{{product.title}}</h3>
      <p>{{product.desc}}</p>
      <div>
        <span class="price">¥{{product.price}}</span>
        <span class="num">x{{product.count}}</span>
      </div>
    </div>
	</div>
</template>
<script>
import checkbutton from 'components/content/checkButton/checkbutton.vue'
export default {
	name:'cartlistitem',
  components:{
    checkbutton
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkclick(){
      this.product.checked=!this.product.checked
    }
  }
}
</script>
<style scoped>
  .iteminfo{display:flex;}
  .item_selector{margin:.1rem;}
  .iteminfo img{width:.8rem;height:.8rem;margin:.1rem;}
  .cartcont h3{margin:0;}
  .cartcont{padding:0 .1rem;flex:1;}
  .cartcont div{display:flex;justify-content:space-between;}
  .price{color:red;}
</style>
