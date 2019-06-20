import Vue from 'vue'
import Router from 'vue-router'
import p1 from '@/components/p1'
import p2 from '@/components/p2'
import p3 from '@/components/p3'
import p4 from '@/components/p4'
import p5 from '@/components/p5'
import p6 from '@/components/p6'
import p7 from '@/components/p7'
import p8 from '@/components/p8'
import p9 from '@/components/p9'
import p10 from '@/components/p10'
import p11 from '@/components/p11'
import p12 from '@/components/p12'
import p13 from '@/components/p13'
import p14 from '@/components/p14'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'p1',
      component: p1
    },
    {
      path: '/p2',
      name: 'p2',
      component: p2
    },
    {
      path: '/p3',
      name: 'p3',
      component: p3
    },
    {
      path: '/p4',
      name: 'p4',
      component: p4
    },
    {
      path: '/p5',
      name: 'p5',
      component: p5
    },
    {
      path: '/p6',
      name: 'p6',
      component: p6
    },
    {
      path: '/p7',
      name: 'p7',
      component: p7
    },
    {
      path: '/p8',
      name: 'p8',
      component: p8
    },
    {
      path: '/p9',
      name: 'p9',
      component: p9
    },
    {
      path: '/p10',
      name: 'p10',
      component: p10
    },
    {
      path: '/p11',
      name: 'p11',
      component: p11
    },
    {
      path: '/p12',
      name: 'p12',
      component: p12
    },
    {
      path: '/p13',
      name: 'p13',
      component: p13
    },
    {
      path: '/p14',
      name: 'p14',
      component: p14
    }
  ]
})
