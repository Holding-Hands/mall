<template>
  <div id="app">
    <NavBar class="nav-bar"/>
    <TabBar />
    <router-view />
  </div>
</template>
<script>
// 导入顶部导航栏NavBar
import NavBar from "@/components/content/navBar/NavBar.vue";
// 导入底部TabBar
import TabBar from "@/components/content/tabBar/TabBar.vue";
export default {
  components: {
    NavBar,
    TabBar
  }
};
</script>
<style lang="less">
@import "assets/css/normalize.css";
@import "assets/css/base.css";
@import "assets/iconfont/iconfont.css";

</style>
