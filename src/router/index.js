import Vue from 'vue'
import Router from 'vue-router'
import GettingStarted from '@/pages/GettingStarted'
import DynamicRoute from '@/pages/DynamicRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/getting-started',
      name: 'GettingStarted',
      component: GettingStarted
    },
    {
      path: '/dynamic-route/:id/:name',
      name: 'DynamicRoute',
      component: DynamicRoute,
      props: true
    }
  ]
})
