<template>
  <div v-if="Object.keys(shop).length!==0" class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div>{{shop.cSells | cSellsnum}}</div>
          <div class="sell-txt">总销量</div>
        </div>
        <div class="info-sells">
          <div>{{shop.cGoods}}</div>
          <div class="sell-txt">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,i) in shop.score" :key="i">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td><span :class="item.isBetter?'better':''">{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-middle">
      <a :href="shop.shopUrl" class="enterbtn">进店逛逛</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'shopInfo',
    props: {
      shop: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      cSellsnum(value) {
        if (value.toString().length >= 13) {
          const volume = value / 1000000000000
          const realVal = parseFloat(volume).toFixed(2);
          return realVal + "万亿"

        } else if (value.toString().length >= 9) {
          const volume = value / 100000000
          const realVal = parseFloat(volume).toFixed(2);
          return realVal + "亿"
        } else if (value.toString().length >= 4) {
          const volume = value / 10000
          const realVal = parseFloat(volume).toFixed(2);
          return realVal + "万"
        }
      }
    }
  }
</script>
<style scoped>
  .shop-top {
    display: flex;
    align-items: center;
  }

  .shop-info {
    padding: .1rem .2rem;
    font-size: .2rem;
  }

  .shop-info img {
    width: 2rem;
  }

  .title {
    margin-left: .2rem;
  }

  .shop-middle-right span {
    background: green;
    color: #fff;
    padding: 0 .1rem;
  }

  .shop-middle-right span.better {
    background: red;
  }

  .shop-middle {
    display: flex;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    border-right: 1px solid #999;
  }

  .info-sells {
    float: left;
    width: 50%;
    text-align: center;
    padding-top: .3rem;
  }

  .enterbtn {
    width: 100%;
    height: .6rem;
    border-radius: .2rem;
    text-align: center;
    color: #fff;
    background: red;
    line-height: .6rem;
    margin-top: .1rem;
  }
  .scrollcontent{overflow:hidden;height:calc(100% - 1rem);}
</style>
