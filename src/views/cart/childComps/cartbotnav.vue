<template>
	<div class="cartbot">
    <div class="checkall">
      <checkbutton :isChecked="checkall"
      @click.native="checkclick"></checkbutton>
      <span>全选</span>
    </div>
    <div class="totalprice">合计：{{totalPrice}}</div>
    <div class="calculate" @click="calueclick">去计算:({{checklength}})</div>
	</div>
</template>
<script>
import checkbutton from 'components/content/checkButton/checkbutton.vue'
import {mapGetters} from 'vuex'
export default {
	name:'cartbotnav',
  components:{
    checkbutton
  },
  computed:{
    ...mapGetters({list:'cartList'}),
    totalPrice(){
      return '¥'+this.list.filter(item=>item.checked).reduce((total, cur)=>{
       return total+=cur.price*cur.count
      },0).toFixed(2)
    },
    checklength(){
      return this.list.filter(item=>item.checked).length
    },
    checkall(){
      if(this.list.length===0)return false
      return !this.list.find(item=>!item.checked)
    }
  },
  methods:{
    checkclick(){
      if(this.checkall){
        this.list.forEach(item=>item.checked=false)
      }else{
        this.list.forEach(item=>item.checked=true)
      }
    },
    calueclick(){
      if(this.checklength===0){
        this.$toast('没有选中的商品', {duration: 1500})
      }
    }
  }
}
</script>
<style scoped>
  .cartbot{position:absolute;bottom:1.2rem;left:0;width:100%;height:1rem;box-shadow: 0 1px 0.1rem #ccc;display:flex;font-size:.24rem;color:#000;background:#eee;}
  .checkall{width:1rem;display:flex;padding-top:.2rem;margin:.1rem;}
  .calculate{background:red;color:#fff;}
</style>
