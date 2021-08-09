import {request} from './network.js'

export function getDetail(id){
  return request({
    url: '/detail',
    params:{
      iid:id
    }
  })
}
export function getrecommend(){
  return request({
    url: '/recommend'
  })
}

//ES6 定义类
export class GoodsInfo {
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.lowNowPrice
    this.oldPrice=itemInfo.highPrice
    this.discount=itemInfo.discountDesc
    this.discountBgColor=itemInfo.discountBgColor
    this.realPrice=itemInfo.lowNowPrice
    this.columns=columns
    this.services=services
  }
}

export class shopDetail{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo
    this.name=shopInfo.name
    this.cSells=shopInfo.cSells
    this.cGoods=shopInfo.cGoods
    this.score=shopInfo.score
    this.cFans=shopInfo.cFans
    this.shopUrl=shopInfo.shopUrl
  }
}
