import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    meta: { title: "首页" },
    component: resolve => (require(["@/views/home"], resolve)),
  },
  {
    path: '/detail',
    name: 'detail',
    redirect: '/detail/page1',
    component: resolve => (require(["@/views/detail"], resolve)),
    children: [
      {
        path: "page1",
        name: "detailPage1",
        meta: { title: "详情页1" },
        component: resolve => (require(["@/views/detail/page1"], resolve)),
      }, {
        path: "page2",
        name: "detailPage2",
        meta: { title: "详情页2" },
        component: resolve => (require(["@/views/detail/page2"], resolve)),
      }, {
        path: "*",
        name: "detail404",
        component: resolve => (require(["@/views/404"], resolve)),
        meta: { title: "没找到页面" },
      }
    ]
  },
  {
    path: "/403",
    name: "403",
    meta: { title: "无权限访问" },
    component: resolve => (require(["@/views/403"], resolve)),
  },
  {
    path: "*",
    name: "404",
    component: resolve => (require(["@/views/404"], resolve)),
    meta: { title: "没找到页面" },
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    if (to.matched[0] && to.matched[0].meta.title) {
      document.title = to.matched[0].meta.title
    } else {
      document.title = '后台管理系统'
    }
  }
})
// 解决vue-router在3.0版本以上重复点报错问题
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}
export default router
