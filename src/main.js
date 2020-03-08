import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//1. 添加事件总线以便兄弟组件之间传值
Vue.prototype.$bus=new Vue

//2.引入animate.css
import animate from 'animate.css'

//3.全局注册toast组件
import { Toast } from 'vant';
Vue.use(Toast);

//4.解决移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//5.使用图片懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./assets/img/lazyLoad/lazy.jpg')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
