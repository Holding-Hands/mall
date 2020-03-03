<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{goodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key"></div>
    <div class="info-list">
      <img
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad(goodsInfo.detailImage[0].list.length)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLength: 0
    };
  },
  methods: {
    imgLoad(length) {
      // 如果每加载完一次图片都需要发送给父组件那么会很耗性能，所以等所有图片发送加载完毕，在发送一次
      this.imgLength=length;
      this.counter+=1;
      if (this.imgLength === this.counter) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      // 获取图片的个数
      this.imagesLength = this.goodsInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped lang="less">
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>
