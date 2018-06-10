const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,

  visitedViews: state => state.app.visitedViews,
  cachedViews: state => state.app.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  areas: state => state.user.areas,
  orgs: state => state.user.orgs,
  permission_routers: state => state.permission.routers,
  currUser: state => state.user.currUser,
  resources: state => state.user.resources,
  moduleRouters: state => state.permission.moduleRouters,
  addRouters: state => state.permission.addRouters

}
export default getters
