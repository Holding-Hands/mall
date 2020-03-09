# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### npm i vant -S(安装vant-ui组件)
### npm i babel-plugin-import -D(安装插件为了按需引入vant)

### 引入阿里字体图标搭建tabbar
## 正常文本中使用
    <i class="iconfont icon-leimupinleifenleileibie"></i>
    <i class="iconfont">&#xe7f8;</i>
## vant中使用
     <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active?icon.home_active:icon.home_normal"
        ></van-icon>
        
### 修改小图标直接复制个图标把public里的favicon.icon覆盖掉(名字要一样)

### 安装轮播组件npm install vue-awesome-swiper --save

### 制作首页推荐组件HomeRecommend

### 制作首页本周流行组件HomePopular

### 制作首页选项卡组件Tab

### 使用Better-Scroll 注意坑 
父组件要设置定位与height：100vh;Better-Scroll要设置绝对定位与高度
.home {
  position: relative;
  height: 100vh;
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

### 回到顶部方法点击直接调用better-scroll里的scrollTo方法

### 使用防抖函数
const refresh =debounce (this.$refs.scroll.refresh,500);
    this.$bus.$on('imgLoad',()=>{
      refresh();
    })

### c3固定顶部
.tab {
  //使用这个属性必须设置top，当距离上部分为46px,定位自动为fixed，不过better-scroll不支持这个属性且兼容不好
  position: sticky;
  top: 46px;
}

### 制作TabCeiling吸顶效果
## 思路
# 必须知道滚动到多少时开始有吸顶效果
# 获取Tab组件的offsettop，但是组件没有offSetTop值，好消息是所有组件都有个属性是$el，用于获取组件的元素$el.offsetTop就可以获取值了(s是小写的，我踩的坑)
# 注意的问题，获取offSetTop的时候可能不包含图片，所以要监听图片加载完成之后在获取

### 使用betterscroll的时候导航navbar不需要固定fixed

### 让Home保持原来的状态不要随意销毁 keep-alive

### 增加需求，如果未点击过的直接跳转到Tab组件顶部

### 设置动态路由两种方案
# // 第一种方案
this.$router.push('/detail/'+iid)
# // 第二种方案
this.$router.push({
  path:'/detail',
  query:{
    id:iid
  }
})
}
## params参数需要动态路由方式传递参数
  {
    path:'/detail/:iid',
    name: 'Detail',
    component:Detail
  }
# 带路由参数params时，路由里的path应该写成:  path:'/apple/:color' 
## query参数需要动态路由方式传递参数
  {
    path:'/detail/',
    name: 'Detail',
    component:Detail
  }
# 带查询参数query时，路由里的path应该写成: path:'/apple' 

  # 获取params路由参数
  在组件中：  {{$route.params.color}}
  在js里： this.$route.params.color
  # 获取query路由参数
  在组件中：  {{$route.query.color}}
  在js里： this.$route.query.color

  ### 引入动画
  npm install animate.css --save
  import animate from 'animate.css'
   <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp">
    包裹动画元素
  </transition>

  ### 因为每次加载的商品都是不一样的，所以要用，防止不初始化数据
  <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>


#### 由于重复使用某一个组件，所以需要取消监听商品goods图片加载完成，防抖重新刷新滚动高度
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.imgLister = () => {refresh()}
    this.$bus.$on("imgLoad",this.imgLister );

      deactivated(){
    //离开这个组件的时候取消全局监听
    // this.$bus.$off(this.imgLister)传一个监听的函数 
  }

  也可以用第二种方法
  imgLoad(){
  // this.$bus.$emit('imgLoad')
  //根据不同的路由发送不同页面的
  if(this.$route.path.indexOf('/home')){
      this.$bus.$emit('imgLoad')
  }else if(this.$route.path.indexOf('/detail')){
      this.$bus.$emit('imgLoad')
  }
},
### 将各个组件公共的代码比如BackTop组件采用mixins混入。

### 标题和内容的联动效果
在detail中监听Tab组件的点击获取index，滑动到相应的模块获取对应主题的offsetTop值
问题：在哪里才能获取正确的offsetTop
1.created里不行，获取不到元素
2.mounted也不行，数据还没有获取到
3.在获取到数据的回调函数中也不行，因为dom还没渲染到
4.this.$nextTick也不行，因为图片的高度没有计算在内
5.在图片加载完成后，获取高度

### import {mapGetters} from 'vuex'
computed:{
  ...mapGetters([]),
  ...mapGetters({})
}

### 安装npm install postcss-px-to-viewport --save-dev  px转rem插件然后在新建个postcss.config.js
module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375, //视口宽度，对应设计稿的宽度
            viewportHeight: 667, //视口高度，对应设计稿的高度
            viewportUnit: 'vw', //指定需要转换的视口单位
            unitPrecision: 5, //指定px转换单位值的小数位数
            selectorBlackList: [], // 指定不需要转换的类
            minPixelValue: 1, //小于等于1px不转换视口单位
            mediaQuery: false //允许在媒体查询中转换px
        }
    }
}

### 购物车页面滚动不了原因，因为添加数据better-scroll并没有重新计算滚动高度，所以要一进入card页面就需要刷新高度
解决方案啊
activated(){
  this.$ref.scroll.refresh()
}

### 移动端解决300ms延迟问题
npm install fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)

### 使用图片懒加载
npm i vue-lazyload -S
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

v-lazy=''

### 解决购物车计算金额的问题，因为使用vant，所以在这里再添加购物车的时候默认添加一个属性为checked：false，然后点击按钮，把这个改相反的，submitBar通过计算属性为checked：true的就行了。

### 给分类列表选择的项，加竖条
.active {
  background: #ffffff;
  border-left: 3px solid var(--color-tint);
//border-right:3px solid white ;   
  padding-right: 3px;
  加pading或者border都行
  
