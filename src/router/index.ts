import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home/Home.vue'
import ViewUI from 'view-design';

Vue.use(ViewUI);
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/Button/Button.vue')
  },
  {
    path: '/anchor',
    name: 'anchor',
    component: () => import('../views/Anchor/Anchor.vue')
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: () => import('../views/Collapse/Collapse.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List/List.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('../views/Grid/Grid.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/Table/Table.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/Info/Info.vue')
  },
  {
    path: '/cp',
    name: 'cp',
    component: () => import('../views/Cp/Cp.vue'),
  },
  {
    path: '/cp1',
    name: 'cp1',
    component: () => import('../views/Cp/Cp1.vue')
  },
  {
    path: '/cp2',
    name: 'cp2',
    component: () => import('../views/Cp/Cp2.vue')
  },
  {
    path: '/cp3',
    name: 'cp3',
    component: () => import('../views/Cp/Cp3.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name != null) {
    sessionStorage.setItem('bread', to.name);
  }
  next();
})

export default router
