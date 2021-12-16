/**
 * 环境配置
 */

const env = import.meta.env.MODE || 'prod' // 默认是生产

const EnvConfig = {
  development: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/9422af4d6568bf4f2584c09a1b9820b6/api',
  },
  test: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/9422af4d6568bf4f2584c09a1b9820b6/api',
  },
  prod: {
    baseApi: '/',
    mockApi: '',
  },
}

export default {
  env,
  mock: true, // mock总开关
  nameSpace: 'vue3-client',
  ...EnvConfig[env],
}
