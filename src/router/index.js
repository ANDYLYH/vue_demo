import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import shoppongCart from '@/components/shoppingCart/index'
import minirefresh from '@/components/minirefresh/index'
import pageReload from '@/components/pageReload/index'
import swiper from '@/components/swiper/index'
import ModalPage from '@/components/ModalPage/index'
import VuexExample from '@/components/Vuex_Example/index'
Vue.use(Router)
// 上下拉刷新
import MiniRefreshTools from 'minirefresh'
import 'minirefresh/dist/debug/minirefresh.css'
import 'minirefresh/dist/debug/themes/applet/minirefresh.theme.applet.js';
import 'minirefresh/dist/debug/themes/applet/minirefresh.theme.applet.css';
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/shoppongCart',
      name: 'shoppongCart',
      component: shoppongCart
    },
    {
      path: '/minirefresh',
      name: 'minirefresh',
      component: minirefresh
    },
    {
      path: '/pageReload',
      name: 'pageReload',
      component: pageReload
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/ModalPage',
      name: 'ModalPage',
      component: ModalPage
    },
    {
      path: '/VuexExample',
      name: 'VuexExample',
      component: VuexExample
    }
    
  ]
})
