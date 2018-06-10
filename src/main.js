import Vue from 'vue'
import App from './App.vue'
import router from './router'// 引入路由
import i18n from './lang' // 国际化
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
// import './styles/Theme.css'
import 'normalize.css/normalize.css' // normalize.css 样式格式化
// import './permission' // 权限
// 国际化
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
new Vue({
  router: router, // router,//是router:router的简写
  store, // 引入数据缓存存储
  el: '#app',
  i18n,
  render: h => h(App)
})
