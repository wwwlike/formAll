import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import create from '../component/AutoForm/create.vue'
const _import = require('./_import_development')
// 路由配置
export const constantRouterMap = [
  {
    path: '/',
    component: create
  }
]

export default new VueRouter({
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
