import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import( '../views/home/Home.vue')
const Category = () =>import('../views/category/Category.vue')
const Cart = () =>import('../views/cart/Cart.vue')
const Profile = () =>import('../views/profile/Profile.vue')
const Detail = () =>import('../views/detail/Detail.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  // 动态路由方式传递参数
  {
    path:'/detail/:iid',
    name: 'Detail',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
