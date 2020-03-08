export default {
    addCart(context, payload) {
        // 查找数组中是否有该商品
    return new Promise((resolve, reject) => {
        let oldProduct = context.state.cart.find(item => item.iid === payload.iid)
        if (oldProduct) {
          // oldProduct.count += 1;
          context.commit('addCounter', oldProduct);
          resolve('商品数量+1')
        } else {
          // state.cartList.push(payload);
          context.commit('addCart', payload)
          reject('添加购物车成功')
        }
      })
    },
}