import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const GetTitle = (title) => {
  const slogan = '轻盈设计 精致律动体验'
  return `${title} - ${slogan}`
}
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: GetTitle('Apron Design')
    },
    component: () => import('../views/Home')
  },
  {
    path: '/design/:routeId',
    name: 'design',
    meta: {
      title: GetTitle('设计')
    },
    component: () => import('../views/Document')
  },
  {
    path: '/guide/:routeId',
    name: 'guide',
    meta: {
      title: GetTitle('使用指南')
    },
    component: () => import('../views/Document')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
