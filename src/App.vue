<template>
  <div id="app">
    <TabBar />
    <router-view />
  </div>
</template>
<script>
// 导入底部TabBar
import TabBar from "@/components/content/tabBar/TabBar.vue";
export default {
  components: {
    TabBar
  }
};
</script>
<style lang="less">
@import "assets/css/normalize.css";
@import "assets/css/base.css";
@import "assets/iconfont/iconfont.css";

</style>
