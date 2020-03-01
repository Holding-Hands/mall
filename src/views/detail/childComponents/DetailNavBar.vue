<template>
  <div>
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div class="features" v-if="isShowFeatures">
        <div class="features-top">
          <div>功能直达</div>
          <div class="iconfont" @click="changeIsShowFeatures">&#xe685;</div>
        </div>

        <div class="features-bottom">
          <div class="features-bottom-item">
            <div class="iconfont">&#xe621;</div>
            <p>消息</p>
          </div>
          <div class="features-bottom-item">
            <div class="iconfont">&#xe629;</div>
            <p>首页</p>
          </div>
          <div class="features-bottom-item">
            <div class="iconfont">&#xe741;</div>
            <p>客服小蜜</p>
          </div>
          <div class="features-bottom-item">
            <div class="iconfont">&#xe631;</div>
            <p>我要反馈</p>
          </div>
          <div class="features-bottom-item">
            <div class="iconfont">&#xe601;</div>
            <p>分享</p>
          </div>
        </div>
      </div>
    </transition>
    <div class="detail-nav-bar">
      <div class="iconfont item" @click="back">&#xe607;</div>
      <div class="iconfont item">
        &#xe70a;
        <span>联想y9000</span>
      </div>
      <div class="iconfont item">&#xe601;</div>
      <div class="iconfont item" @click="toCart">&#xe6ef;</div>
      <div class="iconfont item" @click="changeIsShowFeatures">&#xe600;</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowFeatures: false
    };
  },
  methods: {
    //1. 导航返回上一页
    back() {
      this.$router.go(-1);
    },
    //2. 是否显示Features
    changeIsShowFeatures() {
      this.isShowFeatures = !this.isShowFeatures;
    },
    //点击按钮去购物车页面
    toCart(){
        this.$router.push('/cart')
    }
  }
};
</script>
<style lang="less" scoped>
.features {
  padding: 5px 10px;
  background-color: #969799;
  color: white;
  height: 300px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
}
.features-top {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.features-bottom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  .features-bottom-item {
    width: 23%;
    padding: 22px 5px;
    text-align: center;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 12px;
  }
}

.detail-nav-bar {
  display: flex;
  padding: 0 10px;
  background: #f2f2f2;
  padding: 8px 0;
}
.item {
  flex: 1;
  width: 18px;
  // height: 18px;
  text-align: center;
  line-height: 24.8px;

  &:first-child {
    font-size: 22px;
  }
  &:nth-child(2) {
    flex: 3;
    text-align: left;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    padding-left: 5px;
    background: white;
  }
}
</style>