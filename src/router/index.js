import { createRouter,  createWebHashHistory} from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: import("@/layout/Layout.vue"),
    children: [{
      path: '',
      name:"home",
      component: HomeView,
      meta: {
        keepAlive: true //设置页面是否需要使用缓存
      }
    },
    {
      path: '/categoryPaperInfo',
      name: 'categoryPaperInfo',
      component: import("@/views/categoryPaperInfo/CategoryPaperInfo.vue"),
      meta: {
        keepAlive: true //设置页面是否需要使用缓存
      }
    },
    {
      path: '/login',
      name: 'login',
      component: import("@/views/login/LoginView.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: import("@/views/registerPage/RegisterView.vue")
    },
    {
      path: '/userHome',
      name: 'userHome',
      component: import("@/views/user/UserHome.vue"),
      meta: {
        keepAlive: true //设置页面是否需要使用缓存
      }
    },
    {
      path: '/publishedPaper',
      name: 'publishedPaper',
      component: import("@/views/user/publishedPaper/PublishedPaper.vue"),
      meta: {
        keepAlive: true //设置页面是否需要使用缓存
      }
    },
    {
      path: '/unpublishedPaper',
      name: 'unpublishedPaper',
      component: import("@/views/user/unpublishedPaper/UnpublishedPaper.vue"),
      meta: {
        keepAlive: true //设置页面是否需要使用缓存
      }
    },
    {
      path: '/submissionPaper',
      name: 'submissionPaper',
      component: import("@/views/submission/SubmissionView.vue"),
      meta: {
        keepAlive: true //设置页面是否需要使用缓存
      }
    }

  ]
  },
  {
    path: '/about',
    name: 'about',
    component: import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
