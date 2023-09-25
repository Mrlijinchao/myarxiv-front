import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
// import errorHandler from './utils/error-handler'

// createApp.config.errorHandler = errorHandler;


createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
