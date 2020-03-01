<template>
  <div>
      <!-- <NavBar :title="title"/> -->
      <DetailNavBar/>
      <DetailTab/>
      <GoodsAction/>
      <DetailSwiper :SwiperList="swiperList" />
      <DetailBaseInfo :baseInfo="baseInfo" />
      <i class="iconfont icon-star"></i>
      <i class="iconfont icon-aui-icon-star"></i>
  </div>
</template>

<script>
//导入请求数据的函数
import {getDetail,BaseInfo} from 'network/detail'


// 导入顶部导航栏NavBar
import NavBar from "@/components/content/navBar/NavBar.vue";

//导入公共组件GoodsAction
import GoodsAction from "@/components/content/goodsAction/GoodsAction.vue";

//导入子组件childComponents
import DetailNavBar from './childComponents/DetailNavBar'
//导入子组件Tab选项卡
import DetailTab from './childComponents/DetailTab'
//导入子组件swiper组件
import DetailSwiper from './childComponents/DetailSwiper'
//导入子组件BaseInfo(基本信息)组件
import DetailBaseInfo from './childComponents/DetailBaseInfo'
export default {
    name:'Detail',
    data(){
        return {
            title:"商品 参数 评论 推荐",
            iid:null,
            swiperList:[],
            baseInfo:[]
        }
    },
    created(){
        //1.保存页面的iid
        this.iid=this.$route.params.iid;
        //2.根据iid获取数据
        getDetail(this.iid).then(res=>{
            const data=res.data.result;
            //将轮播数据保存在swiperList中
            this.swiperList=res.data.result.itemInfo.topImages;
            //将多个数据整理成BaseInfo需要的数据
            this.baseInfo = new BaseInfo(data.itemInfo, data.columns, data.shopInfo.services);
        })
        //3.获取BaseInfo(基本信息)传递给BaseInfo子组件
        
    },
    components:{
        NavBar,
        GoodsAction,
        DetailTab,
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo
    }
}
</script>