import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProjectDescription from '@/components/ProjectDescription'
import PartsList from '@/components/PartsList'
import ProjectOutcome from '@/components/ProjectOutcome'
/* eslint-disable */
import Sept72017 from '@/components/Blog/Sept72017'
import ProjectSpecifics from '@/components/ProjectSpecifics'
import MorePosts from '@/components/Blog/MorePosts'
import Timeline from '@/components/Timeline'
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
    },
    {
      path: '/ProjectDescription',
      name: 'ProjectDescription',
      component: ProjectDescription
    },
    {
      path: '/PartsList',
      name: 'PartsList',
      component: PartsList
    },
    {
      path: '/ProjectOutcome',
      name: 'ProjectOutcome',
      component: ProjectOutcome
    },
    {
      path: '/ProjectSpecifics',
      name: 'ProjectSpecifics',
      component: ProjectSpecifics
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/blog/MorePosts',
      name: 'MorePosts',
      component: MorePosts
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
