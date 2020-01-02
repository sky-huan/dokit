const getters = {
  size: state => state.app.size,
  deployUploadApi: state => state.api.deployUploadApi,
  databaseUploadApi: state => state.api.databaseUploadApi,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  roles: state => state.user.roles,
  user: state => state.user.user,
  loadMenus: state => state.user.loadMenus,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  socketApi: state => state.api.socketApi,
  imagesUploadApi: state => state.api.imagesUploadApi,
  baseApi: state => state.api.baseApi,
  fileUploadApi: state => state.api.fileUploadApi,
  updateAvatarApi: state => state.api.updateAvatarApi,
  qiNiuUploadApi: state => state.api.qiNiuUploadApi,
  sqlApi: state => state.api.sqlApi,
  swaggerApi: state => state.api.swaggerApi,
  errorLogs: state => state.errorLog.logs
}
export default getters
