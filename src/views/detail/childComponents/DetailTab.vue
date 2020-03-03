<template>
  <div class="tab">
    <nav-bar class="nav-bar">
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="item"
          class="title-item"
          @click="titleClick(index)"
        >
          <span :class="{active:index===currentIndex}">{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    back() {
      // this.$router.back();
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.tab {
  z-index: 99;
  position: relative;
}
.nav-bar {
  background-color: white;

  .title {
    display: flex;

    .title-item {
      flex: 1;
      font-size: 13px;

      span {
        padding-bottom: 4px;
      }
    }
  }
}
.active {
  border-bottom: deeppink;
  color: deeppink;
  border-bottom: 2px solid var(--color-high-text);
}
</style>
