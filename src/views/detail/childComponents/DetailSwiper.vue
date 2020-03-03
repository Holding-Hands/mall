<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide  v-for="(item,index) in SwiperList" :key='index'>
        <img :src="item" alt="" class="slider-img" @load="imgLoad">
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
         pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true,//自动播放
          loop:true,//循环播放
      },
      swiperImgLoaded:false
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
  },
    methods:{
    imgLoad(){
      if(!this.swiperImgLoaded){
        this.$emit('swiperImgLoaded');
        this.swiperImgLoaded=true;
      }
    }
  }
}
</script>

<style lang="less" scoped>

.swiper{
    height: 250px;
}
// 样式穿透轮播图改变选中的按钮颜色
.swiper-pagination /deep/ .swiper-pagination-bullet-active{
    background-color: orange;
}
.slider-img{
    width: 100%;
}
</style>