<template>
  <div class="empty">
    <div class="img">
      <img src="~assets/img/cart/cart.png" alt />
    </div>
    <h3>购物车竟然是空的</h3>
    <p>在忙，也要记得买点什么犒劳自己~</p>
    <div class="btn" @click="goShopping">去逛逛</div>
  </div>
</template>

<script>
export default {
  methods:{
    goShopping(){
      this.$router.push('/home')
    }
  }
};
</script>

<style lang="less" scoped>
.empty{
margin-top: 100px;
}
img {
  width: 100px;
  display: block;
  margin: auto;
}

h3 {
  font-weight: 400;
  text-align: center;
  margin-top: 16px;
}
p {
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
}

.btn {
  width: 80px;
  height: 30px;
  font-size: 14px;
  margin: 16px auto;
  text-align: center;
  line-height: 30px;
  border: 1px solid rgb(221, 221, 221);
}
</style>