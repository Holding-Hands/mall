<template>
  <div class="nav-bar">
    <van-nav-bar
      :title="title"
      class="title"
      :left-arrow="IsShowleftArrow"
      :style="{background:background}"
      :border='border'
      :fixed="isFixed"
      :z-index="'999'"
    ></van-nav-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, NavBar } from "vant";
Vue.use(Icon).use(NavBar);

export default {
  data(){
    return {
      isFixed:true
    }
  },
  props: {
    title: {
      type: String,
      default: "购物街"
    },
    leftText: {
      type: String,
      default: "返回"
    },
    IsShowleftArrow: {
      type: Boolean,
      default: false
    },
    // 根据传递来的值决定背景颜色默认
    background: {
      type: String,
      default: "var(--color-tint)"
    },
    //根据传值动态显示是否显示下边框
    border: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  color: white;
}
.title /deep/ .van-nav-bar__title {
  color: white;
}
</style>