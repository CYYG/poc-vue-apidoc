import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Redoc from '@/components/redoc'
import Guide from '@/components/guide'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/redoc',
      name: 'redoc',
      component: Redoc
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    }
  ]
})
