<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide v-for="(item,index) in SwiperList" :key='index'>
        <img :src="item.image" alt="" class="slider-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
        //swiper参数配置
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
         pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true,//自动播放
          loop:true,//循环播放
      }
    }
  },
  props:{
      SwiperList:{
          type:Array,
          default:[]
      }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>

.swiper{
    height: 200px;
}
// 样式穿透轮播图改变选中的按钮颜色
.swiper-pagination /deep/ .swiper-pagination-bullet-active{
    background-color: orange;
}
.slider-img{
    width: 100%;
}
</style>