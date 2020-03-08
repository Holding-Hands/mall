<template>
  <div class="cart">
    <CartNavBar />
    <CartSubmitBar class="submit-bar" />
    <BetterScroll class="better-scroll" ref="scroll">
      <!-- <CartList /> -->
      <Card />
    </BetterScroll>
  </div>
</template>

<script>
//导入子组件NavBar头部导航栏
import CartNavBar from "./childComponents/CartNavNar";
//导入子组件SubmitBar提交订单组件
import CartSubmitBar from "./childComponents/CartSubmitBar";
//导入子组件CartList列表组件
// import CartList from "./childComponents/CartList";
//导入子组件Card列表组件
import Card from "./childComponents/Card";

//导入公共better-scroll滑动组件
import BetterScroll from "components/common/betterScroll/BetterScroll";

export default {
  components: {
    CartNavBar,
    CartSubmitBar,
    BetterScroll,
    // CartList,
    Card
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style lang="less" scoped>
.cart {
  position: relative;
  height: 100vh;
}
.better-scroll {
  position: absolute;
  bottom: 133.63px;
  left: 0;
  right: 0;
  top: 44px;
  overflow: hidden;
}
.submit-bar {
  position: absolute;
  bottom: 50px;
}
</style>