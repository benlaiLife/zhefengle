// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './views/Home'
import Category from './views/Category/Category'
import Cate from './views/Category/Cate/Cate'
import Brand from './views/Category/Brand/Brand'
import Website from './views/Category/Website/Website'
import All from './views/Category/All/All'
import Detail from './views/Category/Detail/Detail'
import Shopdetail from './views/Category/Shopdetail/Shopdetail'
import Screen from './views/Category/Screen/Screen'
import Gory from './views/Category/Gory/Gory'
import Group from './views/Group'
import Mine from './views/Mine'
import MostIn from './views/MostIn'
import Person from './views/Person'
import Setting from './views/Setting'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BannerTo from './views/BannerTo'
import Validator from 'vue-validator'
import Choiceness from './components/group/Choiceness'
import Topic from './components/group/Topic'
import Attention from './components/group/Attention'
import Taglist from'./components/group/Taglist'
import GoodsInfo from'./components/group/GoodsInfo'
import TopicChild from'./components/group/TopicChild'
import UserInfo from './views/UserInfo'
import Article from './views/Article'
import CategoryList from './views/CategoryList'
import Fans from './views/Fans'
import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.use(Validator)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

const routes=[
{path:'',component:Home},
{path:'/home',component:Home},
{ path: '/category',
    component: Category ,
    children:[
      { path: '/', component: Cate },
      { path: '/cate', component: Cate },
      { path: '/brand', component: Brand },
      { path: '/website', component: Website },
    ]
  },
{path:'/group',component:Group},
{path:'/mine',component:Mine},
{path:'/categoryList',component:CategoryList},
{path:'/Article',component:Article},
{path:'/mostIn',component:MostIn},
{path: '/All', component: All },
{path: '/Detail', component: Detail},
{path: '/Shopdetail', component: Shopdetail},
{path: '/Gory', component: Gory },
{ path: '/All', component: All },
{ path: '/Detail', component: Detail },
{ path: '/Shopdetail', component: Shopdetail },
{ path: '/Gory', component: Gory },
{path:'/userInfo',component:UserInfo},
{path:'/group',component:Group,children:[
	{path:'',component:Choiceness},
	{path:'/choiceness',component:Choiceness},
	{path:'/topic',component:Topic},
	{path:'/attention',component:Attention},
	{path:'/taglist',component:Taglist},
	{path:'/goodsInfo',component:GoodsInfo},
	{path:'/topicChild',component:TopicChild},
]},
{path:'/mine',component:Mine},
{path:'/mostIn',component:MostIn},
{path:'/bannerTo',component:BannerTo},
{path:'/person',component:Person},
{path:'/Setting',component:Setting},
{path:'/Screen',component:Screen},
{path:'/fans',component:Fans},
]

const router=new VueRouter({
	routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
