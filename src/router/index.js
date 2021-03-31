import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/pages/main'
import LifeCycle from '@/components/pages/life-cycle'
import TemplateSyntax from '@/components/pages/template-syntax'
import HttpAxios from '@/components/pages/http-axios'
import Component from '@/components/pages/component'
import VueRouter from '@/components/pages/vue-router'
import TheHeader from '@/components/layouts/TheHeader'
import TheLoginHeader from '@/components/layouts/TheLoginHeader'
import TheFooter from '@/components/layouts/TheFooter'
import LowerComponent from '@/components/router-view/lower-component'
import LowerComponent2 from '@/components/router-view/lower-component2'
import UpperComponent from '@/components/router-view/upper-component'
import NamedView from '@/components/router-view/named-view'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main,
        header: TheHeader,
        footer: TheFooter
      }
    },
    {
      path: '/life-cycle',
      name: 'LifeCycle',
      components: {
        default: LifeCycle,
        header: TheHeader,
        footer: TheFooter
      }
    },
    {
      path: '/template-grammer',
      name: 'TemplateGrammer',
      components: {
        default: TemplateSyntax,
        header: TheHeader,
        footer: TheFooter
      }
    },
    {
      path: '/http-axios',
      name: 'HttpAxios',
      components: {
        default: HttpAxios,
        header: TheHeader,
        footer: TheFooter
      }
    },
    {
      path: '/component',
      name: 'Component',
      components: {
        default: Component,
        header: TheHeader,
        footer: TheFooter
      }
    },
    {
      path: '/vue-router',
      name: 'VueRouter',
      components: {
        default: VueRouter,
        header: TheHeader,
        footer: TheFooter
      }
    },
    {
      path: '/nested-router',
      name: 'NestedRouter',
      component: UpperComponent,
      children: [
        {
          path: 'lower',
          component: LowerComponent
        },
        {
          path: 'lower2',
          component: LowerComponent2
        }
      ]
    },
    {
      path: '/named-view',
      name: 'NamedView',
      components: {
        default: NamedView,
      }
    },
  ]
})
