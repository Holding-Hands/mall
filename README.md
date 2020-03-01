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

