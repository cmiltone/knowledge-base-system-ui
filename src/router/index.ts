// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
      },
    ],
  },
  {
    path: '/article',
    component: () => import('@/layouts/Full.vue'),
    children: [
      {
        path: '',
        name: 'Article List',
        component: () => import(/* webpackChunkName: "article-list" */ '@/views/Article.vue'),
      },
      {
        path: 'new',
        name: 'Create Article',
        component: () => import(/* webpackChunkName: "create-article" */ '@/views/CreateArticle.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
