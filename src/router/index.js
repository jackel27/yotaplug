import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
/* eslint-disable */
import Sept72017 from '@/components/Blog/Sept72017'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog/09-07-2017',
      name: 'Sept72017',
      component: Sept72017
    }
  ]
})
