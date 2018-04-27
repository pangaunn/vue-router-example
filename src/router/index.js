import Vue from 'vue'
import Router from 'vue-router'
import GettingStarted from '@/pages/GettingStarted'
import DynamicRoute from '@/pages/DynamicRoute'
import NestedRoutes from '@/pages/NestedRoutes'
import Posts from '@/components/Posts'

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
    },
    {
      path: '/nested-routes',
      name: 'NestedRoutes',
      component: NestedRoutes,
      children: [
        {
          path: 'profile',
          component: () => import('../components/Profile.vue')
        },
        {
          path: 'posts',
          component: Posts
        }
      ]
    }
  ]
})
