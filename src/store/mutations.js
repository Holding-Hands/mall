export default {
    //1.将商品添加到cart里
    //1.mutations的目的修改state中的状态
    //2.mutations中的每个方法完成的事情尽量单一
    addCounter(state,payload){
        payload.count ++;
    },
    addCart(state,payload){
        payload.count = 1;
        payload.checked = false ;
        state.cart.push(payload);
    },
    //2.减少购物车商品的数量
    decrease(state, payload) {
        for (let item of state.cart) {
            if (item.iid === payload.iid) {
                if (item.count > 1) {
                    item.count--;
                }
            }
        }
    },
    //3.监听input输入框的数据变化改变商品数量
    cartTotalNumber(state, payload) {
        for (let item of state.cart) {
            if (item.iid === payload.iid) {
                item.count = payload.cardNumber;
            }
        }
    }
}