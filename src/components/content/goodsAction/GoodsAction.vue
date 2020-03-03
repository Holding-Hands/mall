<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ff8198" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
    <van-goods-action-icon
      :icon="isClickStar?'star':'star-o'"
      :text="isClickStar?'已收藏':'收藏'"
      :color="isClickStar?'#ff8198':''"
      @click="clickStar"
    />
  
     <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
//导入vant组件
import Vue from "vue";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Icon,
} from "vant";
Vue.use(GoodsAction)
  .use(Icon)
  .use(GoodsActionButton)
  .use(GoodsActionIcon)

export default {
  data() {
    return {
      isClickStar: false,
      show: false //是否显示弹出层默认不显示
    };
  },
  methods: {
    //1.点击去购物车页面
    toCart() {
      this.$router.push("/cart");
    },
    //2.根据是否点击star星星改变颜色，文字，状态
    clickStar() {
      this.isClickStar = !this.isClickStar;
    },
    //3.加入购物车点击事件
    addCart() {},
    //4.弹出层方法
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="less" scoped>
.van-goods-action {
  z-index: 9999;
}
.icon-class {
  color: aqua;
}
</style>