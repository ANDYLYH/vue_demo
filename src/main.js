import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('@/assets/css/reset.css')
import _utils from './utils'
Vue.config.productionTip = false
Vue.use(ElementUI)
// 公共js
// if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
// 	var version = parseFloat(RegExp.$1);
// 	if (version > 2.3) {
// 		var phoneScale = parseInt(window.screen.width) / 750;
// 		document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
// 	} else {
// 		document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
// 	}
// } else {
// 	document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi,minimal-ui">');
// }
// 将一个全局的方法（变量）挂载在vue上，每个组件都可以访问这个方法（变量）；
Vue.prototype.utils = _utils;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
