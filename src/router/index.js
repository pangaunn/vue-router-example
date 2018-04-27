import Vue from 'vue'
import Router from 'vue-router'
import GettingStarted from '@/pages/GettingStarted'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/getting-started',
      name: 'GettingStarted',
      component: GettingStarted
    }
  ]
})
