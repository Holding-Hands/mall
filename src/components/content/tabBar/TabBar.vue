<template>
  <div>
    <van-tabbar v-model="active" active-color="#ff8198" route>
      <!-- 首页 -->
      <van-tabbar-item to="/home">
        首页
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active?icon.home_active:icon.home_normal"
        ></van-icon>
      </van-tabbar-item>
      <!-- 分类 -->
      <van-tabbar-item to="/category">
        分类
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active?icon.category_active:icon.category_normal"
        ></van-icon>
      </van-tabbar-item>
      <!-- 购物车 -->
      <van-tabbar-item to="/cart">
        购物车
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active?icon.cart_active:icon.cart_normal"
        ></van-icon>
      </van-tabbar-item>
      <!-- 我的 -->
      <van-tabbar-item  to="/profile">
        我的
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active?icon.profile_active:icon.profile_normal"
        ></van-icon>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon,Tabbar, TabbarItem } from "vant";
Vue.use(Icon).use(Tabbar).use(TabbarItem)
export default {
  data() {
    return {
      active: 0,
      icon: {
        home_normal: "shouye",
        home_active: "shouye1",
        category_normal: "leimupinleifenleileibie",
        category_active: "leimupinleifenleileibie2",
        cart_normal: "gouwuche",
        cart_active: "gouwuche1",
        profile_normal: "wode",
        profile_active: "wodedangxuan"
      }
    };
  }
};
</script>