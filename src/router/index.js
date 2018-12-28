import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Page2 from '@/pages/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        index: 0
      }
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      meta: {
        index: 1
      }
    }
  ]
})
