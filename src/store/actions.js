import {ADD_COUNTER,ADD_TO_CART} from './mutations-types.js'
export default{
    //context {state,commit}
    addCart(context,payload){
      // let oldProduct=null
      // for(let item of state.cartList){
      //   if(item.id===payload.id){
      //     oldProduct=item
      //   }
      // }
      return new Promise((resolve,reject)=>{
        let oldProduct=context.state.cartList.find(item=>item.id===payload.id)
        if(oldProduct){
          context.commit(ADD_COUNTER,oldProduct)
          resolve('当前商品数量+1')
        }else{
          context.commit(ADD_TO_CART,payload)
          resolve('添加了新的商品')
        }
      })
    }
  }
