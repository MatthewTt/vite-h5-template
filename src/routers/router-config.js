export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
    meta: {
      // title: '首页'
    }
  }
]
