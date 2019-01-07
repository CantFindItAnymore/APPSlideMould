import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'
import Page4 from '@/pages/page4'
import Page5 from '@/pages/page5'
import End from '@/pages/end'

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
      path: '/page1',
      name: 'Page1',
      component: Page1,
      meta: {
        index: 1
      }
    }, {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      meta: {
        index: 2
      }
    }, {
      path: '/page3',
      name: 'Page3',
      component: Page3,
      meta: {
        index: 3
      }
    }, {
      path: '/page4',
      name: 'Page4',
      component: Page4,
      meta: {
        index: 4
      }
    }, {
      path: '/page5',
      name: 'Page5',
      component: Page5,
      meta: {
        index: 5
      }
    }, {
      path: '/end',
      name: 'end',
      component: End,
      meta: {
        index: 6
      }
    }
  ]
})
