<template>
    <van-submit-bar :price="totalPrice*100" button-text="提交订单" @submit="onSubmit" >
      <van-checkbox v-model="checked" @click="checkAll" checked-color="#ff8198">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送
        <span>修改地址</span>
      </span>
    </van-submit-bar>
</template>

<script>
import Vue from "vue";
import { SubmitBar,Checkbox } from "vant";
Vue.use(SubmitBar).use(Checkbox)
import {mapState} from 'vuex'
export default {
    data(){
        return {
            checked:false,
            checkArr:[],
            price:0
        }
    },
    mounted(){
        //1.监听card组件商品选择按钮
        this.$bus.$on('isChecked',(value)=>{
            this.checked = true;
        })
        this.$bus.$on('noChecked',(value)=>{
            this.checked = false
        })
    },
    methods:{
        //1.提交订单方法
        onSubmit(){},
        //2.点击全选按钮方法,向card里发送信号
        checkAll(){
            this.checked=!this.checked;
            this.$bus.$emit('checkAll',this.checked);
            for(let item of this.cart){
              item.checked = !item.checked
            }
        }
    },
    computed:{
        ...mapState(['cart']),
        totalPrice() {
        return this.cart.filter(item => {
          return item.checked === true
        }).reduce((prev, item) => {
          return prev + item.lowNowPrice * item.count
        }, 0).toFixed(2)
        //reduce累加，toFixed保留几位小数
      },
    }
};
</script>