import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import create from '../component/AutoForm/create.vue'
import step1 from '../component/AutoForm/step1.vue'
const _import = require('./_import_development')
// 路由配置
export const constantRouterMap = [
  {
    path: '/create',
    component: create
  },
  {
    path: '/',
    component: step1
  }
]

export default new VueRouter({
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

