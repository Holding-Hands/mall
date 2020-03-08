<template>
  <div class="cart-goods-list">
    <cart-list-item :product="item" v-for="(item,index) in cartList" :key="index"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CartListItem from './CartListItem'

  export default {
    name: "CartGoodsList",
    components: {
      CartListItem
    },
    data() {
      return {
        checked: true
      };
    },
    computed: {
      ...mapState(['cart']),
    }
  }
</script>
<style scoped lang="less">
  .cart-goods-list {
    padding: 5px;
  }

</style>
