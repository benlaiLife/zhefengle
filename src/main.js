// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './views/Home'
import Category from './views/Category'
import Group from './views/Group'
import Mine from './views/Mine'
import MostIn from './views/MostIn'
import Choiceness from './components/group/Choiceness'
import Topic from './components/group/Topic'
import Attention from './components/group/Attention'
import Taglist from'./components/group/Taglist'
import GoodsInfo from'./components/group/GoodsInfo'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import UserInfo from './views/UserInfo'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
const routes=[
{path:'',component:Home},
{path:'/home',component:Home},
{path:'/userInfo',component:UserInfo},
{path:'/category',component:Category},
{path:'/group',component:Group,children:[
	{path:'',component:Choiceness},
	{path:'/choiceness',component:Choiceness},
	{path:'/topic',component:Topic},
	{path:'/attention',component:Attention},
	{path:'/taglist',component:Taglist},
	{path:'/goodsInfo',component:GoodsInfo},
]},
{path:'/mine',component:Mine},
{path:'/mostIn',component:MostIn},
]

const router=new VueRouter({
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
