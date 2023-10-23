// Composables
import { isAuthenticated } from '@/util/auth';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Full.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Auth Login',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
        meta: { noAuth: true },
      },
    ],
  },
  {
    path: '/register',
    name: 'Auth Register',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
        meta: { noAuth: true },
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
        component: () => import(/* webpackChunkName: "article-list" */ '@/views/Articles.vue'),
      },
      {
        path: 'new',
        name: 'Create Article',
        component: () => import(/* webpackChunkName: "create-article" */ '@/views/CreateArticle.vue'),
      },
      {
        path: ':articleId',
        name: 'View Article',
        props: true,
        component: () => import(/* webpackChunkName: "view-article" */ '@/views/ViewArticle.vue'),
      },
      {
        path: 'edit/:articleId',
        name: 'Edit Article',
        props: true,
        component: () => import(/* webpackChunkName: "edit-article" */ '@/views/EditArticle.vue'),
      },
    ]
  },
  {
    path: '/user',
    component: () => import('@/layouts/Full.vue'),
    children: [
      {
        path: '',
        name: 'User List',
        component: () => import(/* webpackChunkName: "user-list" */ '@/views/Users.vue'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      noAuth: true
    },
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        name: 'Not Found',
        component: () => import(/* webpackChunkName: "not-found" */ '@/views/404Page.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta?.noAuth) {
    next();
  } else {
    if (isAuthenticated()) {
      next();
      return;
    }
    next({ path: "/login", query: { redirectUrl: to.fullPath } });
  }
});

export default router
