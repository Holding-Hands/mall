<template>
  <div class="home">
    <NavBar class="nav-bar" />
    <better-scroll
      class="content"
      @scrollTo="scrollTo"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <Swiper :SwiperList="SwiperList" class="swiper" />
      <Recommend :recommend="recommend" />
      <Popular />
      <Tab :TabTitle="TabTitle" class="tab" @tabClick="tabClick" />
      <GoodList :GoodsList="goods[CurrentIndexType].list" :imgHeight="'220px'" />
    </better-scroll>
    <back-top @click.native="clickBackTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 导入请求首页的数据(包括轮播)
import { getHomeSwiper, getHomeGoods } from "@/network/home";

// 导入顶部导航栏NavBar
import NavBar from "@/components/content/navBar/NavBar.vue";
// 导入底部TabBar
import TabBar from "@/components/content/tabBar/TabBar.vue";
// 导入公共组件中的swiper轮播组件
import Swiper from "components/common/swiper/Swiper";
// 导入公共组件中的content下的选项卡Tab组件
import Tab from "components/content/tab/Tab";
// 导入公共组件中的content下的goods展示组件
import GoodList from "components/content/goods/GoodsList";
// 导入公共滑动组件Better-Scroll
import BetterScroll from "components/common/betterScroll/BetterScroll";
// 导入公共组件BackTop返回顶部组件
import BackTop from "components/content/backTop/BackTop";

//导入子组件childComponents
import Recommend from "./childComponents/HomeRecommend";
import Popular from "./childComponents/HomePopular";

export default {
  data() {
    return {
      SwiperList: [],
      recommend: [],
      TabTitle: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 设置tab的类型,默认pop第一次展示pop
      CurrentIndexType: "pop",
      isShowBackTop: false
    };
  },
  created() {
    //1. 获取首页轮播与推荐数据
    this.getHomeSwiper();
    //2. 获取首页商品goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    //3. 图片加载完成
    this.$bus.$on('imgLoad',()=>{
      this.$refs.scroll&&this.$refs.scroll.scroll.refresh();
    })
  },
  methods: {
    //1. 将获取首页轮播与推荐数据封装成方法
    getHomeSwiper() {
      getHomeSwiper().then(res => {
        //把轮播数据保存在SwiperList，并传递个swiper组件
        this.SwiperList = res.data.data.banner.list;
        //把推荐数据保存在recommend里，并传递个子组件Recommend
        this.recommend = res.data.data.recommend.list;
      });
    },
    //2. 将获取首页商品数据封装成方法
    getHomeGoods(type) {
      let page = this.goods[type].page + 1; //下次调用在获取第n+1页数据
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list); //他会把res.data.data.list解析一个一个放进去如果直接push的话会把数组当成一个元素
        this.goods[type].page += 1;
      });
      this.$refs.scroll&&this.$refs.scroll.scroll.finishPullUp();//调用一次上拉加载更多取消一次完成上拉加载，不取消的话只加载一次
    },
    //3. 监听Tab子组件点击哪个tabControl，发送过来的CurrentIndex
    tabClick(index) {
      this.ConversionType(index); //根据index调用转换类型的函数
    },
    //4. 根据Tab传过来的index改变相应的类型
    ConversionType(index) {
      switch (index) {
        case 0:
          this.CurrentIndexType = "pop";
          break;
        case 1:
          this.CurrentIndexType = "new";
          break;
        case 2:
          this.CurrentIndexType = "sell";
          break;
      }
    },
    //5. 监听better-scroll滑动位置
    scrollTo(position) {
      const y = -position.y;
      if (y >= 2000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
    //6. 监听点击backTop组件使其回到顶部
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, -46);
    },
    //7. 实现上拉加载更多
    loadMore() {
      this.getHomeGoods(this.CurrentIndexType);
      console.log('shanglajiazai');
      
    }
  },
  components: {
    NavBar,
    TabBar,
    Swiper,
    Recommend,
    Popular,
    Tab,
    GoodList,
    BetterScroll,
    BackTop
  }
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  height: 100vh;
}
// NavBar是固定在顶部脱离文档流，导致下面会向上移动所以用margin-top
.swiper {
  margin-top: 46px;
}
.tab {
  //使用这个属性必须设置top，当距离上部分为46px,定位自动为fixed，不过better-scroll不支持这个属性且兼容不好
  position: sticky;
  top: 46px;
}
// 使用better-scroll必须要给高度
.content {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>