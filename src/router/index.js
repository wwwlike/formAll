import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import create from '../component/AutoForm/create.vue'
const _import = require('./_import_development')

export const constantRouterMap = [
  {
    path: '/autoForm',
    component: create
  }
]

export default new VueRouter({
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

