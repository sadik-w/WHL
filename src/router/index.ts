import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ViewUI from 'view-design';

Vue.use(ViewUI);
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      isLogin: false//需要登录权限验证
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      isLogin: false//需要登录权限验证
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Register1.vue'),
    meta: {
      isLogin: false
    } //需要登录权限验证
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    meta: {
      isLogin: true//需要登录权限验证
    },//需要登录权限验证
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User/User.vue'),
        meta: {
          isLogin: true//需要登录权限验证
        },
      },
      {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('../views/UserInfo/UserInfo.vue'),
        meta: {
          isLogin: true//需要登录权限验证
        },
      },
      {
        path: '/usermanger',
        name: 'usermanger',
        component: () => import('../views/UserManger/UserManger.vue'),
        meta: {
          isLogin: true//需要登录权限验证
        },
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name != null) {
//     sessionStorage.setItem('bread', to.name);
//   }
//   next();
// })

router.beforeEach((to, from, next) => {
  // console.log('上一个页面'+from.name)
  // console.log('下一个页面'+to.name)
  let f = sessionStorage.getItem('isLogin');
  console.log('是否需要登录：');
  console.log(to.meta.isLogin);
  console.log('是否已经登录：');
  console.log(f);
  if (to.meta.isLogin) {
    if (f=='true') {
      console.log('已经登录');
      next();
    }
    else {
      console.log('没有登录');
      next('login');
      // console.log(f)
    }
  }
  else {
    console.log('不需要登录');
    next();
  }


})
export default router
