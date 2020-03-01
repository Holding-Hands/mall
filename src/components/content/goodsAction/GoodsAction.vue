<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ff8198" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
    <van-goods-action-icon 
    :icon="isClickStar?'star':'star-o'" 
    :text="isClickStar?'已收藏':'收藏'" 
    :color="isClickStar?'#ff8198':''" 
    @click="clickStar" />
    <!-- <van-icon name="star-o" /> -->
    <van-goods-action-button type="warning" text="加入购物车" />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Icon } from "vant";
Vue.use(GoodsAction)
  .use(Icon)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);

export default {
  data() {
    return {
      isClickStar: false,
    };
  },
  methods: {
    //1.点击去购物车页面
    toCart() {
      this.$router.push("/cart");
    },
    //2.根据是否点击star星星改变颜色，文字，状态
    clickStar() {
      if (this.isClickStar) {
          this.isClickStar=!this.isClickStar;
      } else {
        this.isClickStar=!this.isClickStar;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-goods-action {
  z-index: 9999;
}
.icon-class{
    color: aqua;
}
</style>