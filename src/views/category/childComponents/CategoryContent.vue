<template>
  <div class="category-content">
    <BetterScroll class="scroll" ref="scroll">
      <div class="content">
        <div v-for="(item,index) in listInfo" :key="index" class="content-item">
          <a :href="item.link">
            <img :src="item.image" @load="imgLoad" />
          </a>
          <p class="title">{{item.title}}</p>
        </div>
      </div>
    </BetterScroll>
  </div>
</template>

<script>
// 导入公共滑动组件Better-Scroll
import BetterScroll from "components/common/betterScroll/BetterScroll";

// 导入防抖函数
import { debounce } from "common/tools";

export default {
  props: {
    listInfo: {
      type: Array
    }
  },
  methods: {
    imgLoad() {
        debounce(this.$refs.scroll.refresh,500)();
    }
  },
  components: {
    BetterScroll
  }
};
</script>

<style lang="less" scoped>
.category-content {
  position: relative;
  //   height: 100vh;
}
.scroll {
  position: absolute;
  left: 0;
  right: 0;
  bottom:90px;
  overflow: hidden;
  top: 0;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
}
.content-item {
  width: 33%;
  margin-top: 10px;

  img {
    width: 50px;
    display: block;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 12px;
    margin-top: 5px;
    color: var( --color-text);
  }
}
</style>