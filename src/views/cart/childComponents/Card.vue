<template>
  <div>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div v-for="(item,index) in cart" :key="index" class="item">
        <!-- 复选框 -->
        <van-checkbox
          :name="index"
          checked-color="#ff8198"
          class="checkbox"
          @click="changeCheck(item)"
        />
        <div class="item-img">
          <div>
            <img :src="item.image" />
          </div>

          <div class="item-title">
            <p>{{item.title}}</p>
            <div class="info-bottom">
              <div class="item-price">{{item.price}}</div>
              <div class="item-count">
                <span @click="reduce(item)">-</span>
                <input
                  type="number"
                  :value="item.count"
                  @input="inputChange"
                  @click="saveIid(item.iid)"
                />
                <span @click="increase(item)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-checkbox-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import Vue from "vue";
import { Checkbox, CheckboxGroup, Button } from "vant";

Vue.use(Checkbox)
  .use(CheckboxGroup)
  .use(Button);

export default {
  data() {
    return {
      result: [],
      number: 1,
      iid: ""
    };
  },
  mounted() {
    //1.监听submitBar组件点击全选按钮
    this.$bus.$on("checkAll", res => {
      this.checkAll(res);
    });
  },
  methods: {
    ...mapMutations(["decrease", "cartTotalNumber"]),
    ...mapActions(["addCart"]),
    //1.全选按钮
    checkAll(res) {
      if (res) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    //2.点击减少
    reduce(item) {
      this.decrease(item);
    },
    //3.点击增加
    increase(item) {
      this.addCart(item);
    },
    //4.监听input的改变
    inputChange(e) {
      this.cartTotalNumber({
        iid: this.iid,
        cardNumber: e.target.value
      });
    },
    //5.按输入框的时候保存iid，然后inputChange方法发送过去
    saveIid(iid) {
      this.iid = iid;
    },
    //6.点击组件改变checked属性
    changeCheck(item) {
      for(let key of this.cart){
        if(key.iid===item.iid){
          item.checked=!item.checked
        }
      }
    }
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartLengh"])
  },
  watch: {
    result(value) {
      if (this.result.length === this.$store.state.cart.length) {
        this.$bus.$emit("isChecked", value);
      } else {
        this.$bus.$emit("noChecked", value);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-around;
}
.checkbox {
  margin: 0 15px 0 13px;
}
.van-checkbox {
  width: 24px;
}
.item-img {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;

  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-right: 10px;
  }
}
.item-title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.info-bottom {
  display: flex;
  justify-content: space-between;
}
.item-count {
  margin-right: 10px;

  input {
    width: 30px;
    border: none;
    text-align: center;
  }
  span {
    display: inline-block;
    width: 30px;
    height: 20px;
    background: #ff8198;
    text-align: center;
    line-height: 20px;

    &:first-child {
      margin-left: 5px;
    }
  }
}
</style>