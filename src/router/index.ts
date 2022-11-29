import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/common'
  },
  {
    path: '/common',
    name: 'common',
    component: () => import('@/layout/index.vue'), // 注意这里要带上 文件后缀.vue
    meta: { title: '组件库' }
  }
]

const index = createRouter({
  history: createWebHistory(),
  routes
})

export default index
