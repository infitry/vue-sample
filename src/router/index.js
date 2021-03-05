import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/pages/main'
import LifeCycle from '@/components/pages/life-cycle'
import TemplateSyntax from '@/components/pages/template-syntax'
import HttpAxios from '@/components/pages/http-axios'
import Component from '@/components/pages/component'
import ComponentCommunication from '@/components/pages/component-communication'
import VueRouter from '@/components/pages/vue-router'
import TheHeader from '@/components/layouts/TheHeader'
import TheFooter from '@/components/layouts/TheFooter'

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
      path: '/component-communication',
      name: 'ComponentCommunication',
      components: {
        default: ComponentCommunication,
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
  ]
})
