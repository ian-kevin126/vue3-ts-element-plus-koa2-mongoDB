import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

// 在全局挂载对象
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api

app.use(router).use(store).use(ElementPlus).mount('#app')
