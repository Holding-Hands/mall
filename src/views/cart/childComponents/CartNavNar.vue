<template>
  <div>
      <nav-bar class="nav-bar">
          <div slot="center">购物车({{this.$store.getters.cartLengh}})</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
    components:{
        NavBar
    }
}
</script>
<style lang="less" scoped>
.nav-bar{
    background: var(--color-tint);
    color: white;
}
</style>