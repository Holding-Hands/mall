<template>
  <div class="detail">
    <!-- <NavBar :title="title"/> -->
    <DetailNavBar />
    <!-- 显示与隐藏动画显示 -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <DetailTab v-show="isShowTab" class="tab" @titleClick ="titleClick" />
    </transition>
    <GoodsAction />
    <better-scroll class="better-scroll" ref="scroll" :probeType="3" @scrollTo="scrollTo">
      <DetailSwiper :SwiperList="swiperList" />
      <DetailBaseInfo :baseInfo="baseInfo" />
      <DetailBusinessInfo :businessInfo="businessInfo" />
      <DetailsGoodsInfo :goodsInfo="goodsInfo" @imgLoad="imgLoad" />
      <DetailParamInfo :paramInfo="paramInfo" />
      <DetailsCommentInfo :commentInfo="commentInfo" />
      <GoodsList :GoodsList="recommendList" :imgHeight="'220px'" />
    </better-scroll>
    <back-top @click.native="clickBackTop" v-show="isShowBackTop" />
  </div>
</template>

<script>

//导入工具防抖函数
import {debounce} from 'common/tools'

//导入请求数据的函数
import {
  getDetail,
  BaseInfo,
  BusinessInfo,
  ParamInfo,
  getRecommend
} from "network/detail";

// 导入顶部导航栏NavBar
import NavBar from "@/components/content/navBar/NavBar.vue";

//导入公共组件GoodsAction
import GoodsAction from "@/components/content/goodsAction/GoodsAction.vue";
// 导入公共滑动组件Better-Scroll
import BetterScroll from "components/common/betterScroll/BetterScroll";
// 导入公共组件goodsList用来展示推荐部分
import GoodsList from "./childComponents/DetailGoodsList";

//导入混入组件的返回顶部
import {mixinBackTop} from 'common/mixins'

//导入子组件childComponents
import DetailNavBar from "./childComponents/DetailNavBar";
//导入子组件Tab选项卡
import DetailTab from "./childComponents/DetailTab";
//导入子组件swiper组件
import DetailSwiper from "./childComponents/DetailSwiper";
//导入子组件商品BaseInfo(基本信息)组件
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
//导入子组件BusinessInfo(商家信息)组件
import DetailBusinessInfo from "./childComponents/DetailBusinessInfo";
//导入子组件DetailsGoodsInfo(详细信息)组件
import DetailsGoodsInfo from "./childComponents/DetailGoodsInfo";
//导入子组件DetailsGoodsInfo(详细信息)组件
import DetailParamInfo from "./childComponents/DetailParamInfo";
//导入子组件DetailsCommentInfo(详细信息)组件
import DetailsCommentInfo from "./childComponents/DetailCommentInfo";

export default {
  name: "Detail",
  data() {
    return {
      title: "商品 参数 评论 推荐",
      iid: null,
      //轮播列表
      swiperList: [],
      //商品基本信息
      baseInfo: [],
      //商家信息
      businessInfo: {},
      isShowTab: false,
      //商品详细信息
      goodsInfo: {},
      //参数信息
      paramInfo: {},
      //商品评论数据
      commentInfo: {},
      //推荐列表数据
      recommendList: [],
    };
  },
  created() {
    //1.保存页面的iid
    this.iid = this.$route.params.iid;

    //2.根据iid获取数据
    getDetail(this.iid).then(res => {
      const data = res.data.result;

      //3.将轮播数据保存在swiperList中
      this.swiperList = res.data.result.itemInfo.topImages;

      //4.获取BaseInfo(基本信息)传递给BaseInfo子组件
      this.baseInfo = new BaseInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //5.获取BusinessInfo商家基本信息并传给子组件
      this.businessInfo = new BusinessInfo(data.shopInfo);

      //6.获取商品详细信息，传递个子组件
      this.goodsInfo = data.detailInfo;

      //7.获取商品的参数信息paramInfo
      this.paramInfo = new ParamInfo(
        data.itemParams.info,
        data.itemParams.rule
      );

      //8.获取评论数据信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate;
      }

      //9.获取推荐数据
      getRecommend().then(res => {
        this.recommendList = res.data.data.list;
      });
    });
  },
  mounted() {
    //1. 监听商品goods图片加载完成，防抖重新刷新滚动高度
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  methods: {
    //1. 监听better-scroll滑动位置
    scrollTo(position) {
      const y = -position.y;
      //1. 根据距离改变isShowTab的值决定是否显示与隐藏Tab
      if (y >= 10) {
        this.isShowTab = true;
      } else {
        this.isShowTab = false;
      }
      //2. 根据距离改变isShowBackTop的值决定是否显示与隐藏BackTop
       if (y >= 2000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
    //2. 监听goodsInfo图片加载完成好发送
    imgLoad() {
      this.$refs.scroll.refresh(); //图片监听完成好刷新滚动高度
    },
    //3. 监听点击backTop组件使其回到顶部
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //4. 监听Tab组件点击获取下标值
    titleClick(index){
      console.log(index);
    }
  },
  components: {
    NavBar,
    GoodsAction,
    DetailTab,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailBusinessInfo,
    BetterScroll,
    DetailsGoodsInfo,
    DetailParamInfo,
    DetailsCommentInfo,
    GoodsList,
  },
  mixins:[mixinBackTop]
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  height: 100vh;
}
.better-scroll {
  position: absolute;
  top: 42.8px;
  left: 0;
  right: 0;
  bottom: 50px;
}
</style>