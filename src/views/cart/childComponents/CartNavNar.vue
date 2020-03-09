<template>
  <div>
      <nav-bar class="nav-bar">
          <div slot="left" class="icon-zuojiantou iconfont" @click="back"></div>
          <div slot="center">购物车({{this.$store.getters.cartLengh}})</div>
          <div slot="right">管理</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
    components:{
        NavBar
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.nav-bar{
    background: var(--color-tint);
    color: white;
}
.icon-zuojiantou{
    font-size: 25px;
}
</style>