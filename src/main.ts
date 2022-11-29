import { createApp } from 'vue'
import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import { vueBridge } from '@garfish/bridge-vue-v3'
import { createPinia } from 'pinia'
const routes = router.options.routes
function newRouter(basename: any) {
  const router = createRouter({
    history: createWebHistory(basename),
    routes: routes
  })
  return router
}
export const provider = vueBridge({
  rootComponent: App,
  // 可选，注册 vue-router或状态管理对象
  appOptions: ({ basename, dom, appName, props }) => ({
    el: '#app',
    render: () => h(App),
    router: newRouter(basename)
  })
})
const app = createApp(App)
app.use(ElementPlus)
app.use(Avue)
app.use(router)
app.use(createPinia())
app.mount('#app')
