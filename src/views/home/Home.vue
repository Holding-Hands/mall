<template>
  <div>
    <Swiper :SwiperList="SwiperList" class="swiper" />
    <Recommend :recommend="recommend" />
    <Popular />
    <Tab :TabTitle="TabTitle" class="tab" @tabClick="tabClick" />
    <GoodList :GoodsList="goods[CurrentIndexType].list" :imgHeight="'220px'" />

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
    </ul>
  </div>
</template>

<script>
// 导入请求首页的数据(包括轮播)
import { getHomeSwiper, getHomeGoods } from "@/network/home";

// 导入公共组件中的swiper轮播组件
import Swiper from "components/common/swiper/Swiper";
// 导入公共组件中的content下的选项卡Tab组件
import Tab from "components/content/tab/Tab";
// 导入公共组件中的content下的goods展示组件
import GoodList from "components/content/goods/GoodsList";

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
      CurrentIndexType: "pop"
    };
  },
  created() {
    //1. 获取首页轮播与推荐数据
    this.getHomeSwiper();
    //2. 获取首页商品goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
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
    },
    // 3. 监听Tab子组件点击哪个tabControl，发送过来的CurrentIndex
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
          this.CurrentIndexType='new' ;
          break;
        case 2:
          this.CurrentIndexType = "sell";
          break; 
      }
    }
  },
  components: {
    Swiper,
    Recommend,
    Popular,
    Tab,
    GoodList
  }
};
</script>
<style lang="less" scoped>
// NavBar是固定在顶部脱离文档流，导致下面会向上移动所以用margin-top
.swiper {
  margin-top: 46px;
}
.tab {
  //使用这个属性必须设置top，当距离上部分为46px,定位自动为fixed，不过better-scroll不支持这个属性且兼容不好
  position: sticky;
  top: 46px;
}
</style>