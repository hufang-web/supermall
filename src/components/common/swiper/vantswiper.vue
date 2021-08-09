<template>
  <swiper :options="swiperOptions" v-if="list.length">
    <swiper-slide v-for="(item,index) in list" :key="index">
      <img :src="showimg(item)" @load="slideimgload">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import {
    Swiper,
    SwiperSlide
  } from 'vue-awesome-swiper'

  import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
  Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])
  //注意css的引用路径
  import 'swiper/swiper-bundle.css'
  export default {
    name: 'vantswiper',
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {
        isload:false,
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          initialSlide: 0,
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true
          },
          loop: true,
          observer: true,
          observeParents: true
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    methods:{
      slideimgload(){
        if(!this.isload){
         this.$emit('slideimgload')
         this.isload=true
        }
      },
      showimg(item){
        return item.image?item.image:item
      }
    }
  }
</script>
<style scoped>
  .swiper-container img {
    width: 100%;
    display: block;
  }
</style>
