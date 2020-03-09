<template>
  <div class="category-tree-select">
    <BetterScroll class="better-scroll">
      <div class="tab-tree">
        <div
          v-for="(item,index) in categoryList"
          :key="index"
          class="item"
          :class="{active : currentIndex===index}"
          @click="selectIndex(index)"
        >{{item.title}}</div>
      </div>
    </BetterScroll>
  </div>
</template>

<script>
// 导入公共滑动组件Better-Scroll
import BetterScroll from "components/common/betterScroll/BetterScroll";

export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props:{
      categoryList:{
          type:Array
      }
  },
  methods: {
    selectIndex(index) {
      this.currentIndex = index;
      this.$emit('selectIndex',index)
    }
  },
  components: {
    BetterScroll
  }
};
</script>

<style lang="less" scoped>
.category-tree-select{
    position: relative;
    height: 100vh;
    width: 100px;
    
}
.better-scroll {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
}
.tab-tree {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
}
.item {
  width: 100px;
  line-height: 50px;
  height: 50px;
  background: #f7f7f7;
  text-align: center;
  border-bottom: 2px solid #fff;
}
.active {
  background: #ffffff;
  border-left: 3px solid var(--color-tint);
  //   border-right:3px solid white ;
  padding-right: 3px;
}
</style>