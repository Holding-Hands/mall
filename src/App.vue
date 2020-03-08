<template>
  <div id="app">
    <TabBar />
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
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
#app{
  touch-action: none; 
}
</style>
