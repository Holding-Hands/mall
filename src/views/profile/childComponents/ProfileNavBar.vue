<template>
  <div>
    <NavBar class="nav-bar">
      <div slot="left" class="iconfont icon-zuojiantou" @click="back"></div>
      <div slot="center">个人中心</div>
    </NavBar>
  </div>
</template>

<script>
//导入公共导航组件
import NavBar from "components/common/navBar/NavBar";

export default {
  methods: {
    back(){
        this.$router.go(-1);
        console.log(111);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  background: var(--color-tint);
  color: white;
}
.icon-zuojiantou {
  font-size: 25px;
}
</style>