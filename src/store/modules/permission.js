import { asyncRouterMap, constantRouterMap } from '../../router'
import store from '../../store'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param resources 遍历的资源
 * @param route 权限的name
 */
function hasPermission(resources, route) {
  for (const i in store.getters.roles) {
    if (store.getters.roles[i].id === '1') {
      return true
    }
  }
  var arrayFilter = resources.filter(resource => {
    if (resource === route.name) {
      return true
    }
  })

  return (arrayFilter.length > 0)
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap //所有菜单权限的路由资源
 * @param resources 可以访问的菜单资源
 */
function filterAsyncRouter(asyncRouterMap, resources) {
  // debugger
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(resources, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, resources)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    moduleRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      //   console.log(store.getters);
      state.routers = constantRouterMap.concat(routers)
    },
    SET_MODULE_ROUTERS: (state, routers) => {
      state.moduleRouters = routers
    }

  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { resources } = data

        const accessedRouters = filterAsyncRouter(asyncRouterMap, resources)

        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    SelectModule({ commit }, data) {
      return new Promise(resolve => {
        commit('SET_MODULE_ROUTERS', data)
        resolve()
      })
    }
  }
}

export default permission
