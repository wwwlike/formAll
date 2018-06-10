import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { findOneForCode } from '@/api/area/area.js'
import { findOneByOrgcode } from '@/api/ylfwdw/ylfwdw.js'

import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    currUser: {},
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    areas: new Map(), //  '420000': { 'areaname': '湖北省' } 缓存行政区划数据
    orgs: new Map(), // 单位缓存数据
    resources: [], // 用户可以访问的资源
    setting: {
      articlePlatform: []
    },
    loading: {},
    httping: false,
    https: 0,
    // 权限按钮信息
    buttons: []
  },

  mutations: {
    SET_CURRUSER: (state, currUser) => {
      state.currUser = currUser
    },
    SET_RESOURCES: (state, resources) => {
      state.resources = resources
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AREAS: (state, area) => {
      state.areas[area.areacode] = area
    },
    SET_ORGS: (state, org) => {
      state.orgs[org.orgcode] = org
    },
    SET_LOADING: (state, org) => {
      state.loading = org
    },
    ADD_HTTPS: (state) => {
      state.https++
    },
    REDUCE_HTTPS: (state) => {
      state.https--
    },
    ZERO_HTTPS: (state) => {
      state.https = 0
    },
    SET_BUTTONS: (state, org) => {
      state.buttons = org
    }
  },

  actions: {
    // 用户名登录{commit} ? 理解应该是调用者的一个属性
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          if (data.item && data.item.token) {
            // 登录成功设ET_TOKEN置 token
            commit('SET_TOKEN', data.item.token)
            setToken(response.data.item.token)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    cacheArea({ commit, state }, areacode) {
      return new Promise((resolve, reject) => {
        findOneForCode(areacode).then(response => { // 根据用户信息取得用户数据
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_AREAS', data)// 设置用户 后面的都可以无效了
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    cacheOrg({ commit, state }, orgcode) {
      return new Promise((resolve, reject) => {
        findOneByOrgcode(orgcode).then(response => { // 根据用户信息取得用户数据
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_ORGS', data)// 设置用户 后面的都可以无效了
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    cacheArea1({ commit, state }, data) {
      commit('SET_AREAS', data)// 设置用户 后面的都可以无效了
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => { // 根据用户信息取得用户数据
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_CURRUSER', data)// 设置用户 后面的都可以无效了
          commit('SET_ROLES', data.roles)// 设置角色
          commit('SET_NAME', data.name)// 设置姓名
          commit('SET_AVATAR', data.avatar)// 设置图标
          commit('SET_INTRODUCTION', data.introduction)
          commit('SET_RESOURCES', data.menuCodes)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_CURRUSER', [])

        removeToken()
        resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_CURRUSER', [])
        removeToken()
        resolve()
      })
    },
    // 动态修改权限
    ChangeRole({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    },
    loadingStatus({ commit }, role) {

    }
  }
}

export default user
