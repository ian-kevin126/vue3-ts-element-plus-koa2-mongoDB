/**
 * axios 二次封装
 */

import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
import router from '../router'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
})

service.interceptors.request.use((req) => {
  const headers = req.headers

  if (!headers.Authorization) headers.Authorization = 'Bear kevin'

  return req
})

service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data

  if (code === 200) {
    return data
  } else if (code === 500001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

function request(options) {
  options.method = options.method || 'get'

  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  let isMock = config.mock

  // 在局部对每个接口做单独的mock配置，覆盖全局的（config.js中的mock）
  if (typeof options.mock != undefined) {
    isMock = options.mock
  }

  if (config.env === 'prod') {
    // 生产环境下使用baseApi
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }

  return service(options)
}

// 支持 this.$request.get('/getUserInfo', {name: 'kevin'}).then() 这种方式去调用接口
;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    })
  }
})

export default request
