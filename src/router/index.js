import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: resolve =>
            require(['../components/page/Dashboard.vue'], resolve),
          meta: { title: '系统首页' }
        },
        {
          path: '/biocide',
          component: resolve =>
            require(['../components/page/biocide.vue'], resolve),
          meta: { title: '常用农药' }
        },
        {
          path: '/pest',
          component: resolve =>
            require(['../components/page/pest.vue'], resolve),
          meta: { title: '病虫诊断' }
        },
        {
          path: '/grow',
          component: resolve =>
            require(['../components/page/grow.vue'], resolve),
          meta: { title: '作物栽培' }
        },
        {
          path: '/fertilizer',
          component: resolve =>
            require(['../components/page/fertilizer.vue'], resolve),
          meta: { title: '用肥指南' }
        },
        {
          path: '/safety',
          component: resolve =>
            require(['../components/page/safety.vue'], resolve),
          meta: { title: '食品安全' }
        },
        {
          path: '/weather',
          component: resolve =>
            require(['../components/page/weather.vue'], resolve),
          meta: { title: '天气灾害' }
        },
        {
          path: '/month',
          component: resolve =>
            require(['../components/page/month.vue'], resolve),
          meta: { title: '每月农事' }
        },
        {
          path: '/seed',
          component: resolve =>
            require(['../components/page/seed.vue'], resolve),
          meta: { title: '良种推荐' }
        },
        {
          path: '/formula',
          component: resolve =>
            require(['../components/page/formula.vue'], resolve),
          meta: { title: '测土配方' }
        },
        {
          path: '/icon',
          component: resolve =>
            require(['../components/page/Icon.vue'], resolve),
          meta: { title: '自定义图标' }
        },
        {
          path: '/table',
          component: resolve =>
            require(['../components/page/BaseTable.vue'], resolve),
          meta: { title: '基础表格' }
        },
        {
          path: '/tabs',
          component: resolve =>
            require(['../components/page/Tabs.vue'], resolve),
          meta: { title: 'tab选项卡' }
        },
        {
          path: '/form',
          component: resolve =>
            require(['../components/page/BaseForm.vue'], resolve),
          meta: { title: '基本表单' }
        },
        {
          // 富文本编辑器组件
          path: '/editor',
          component: resolve =>
            require(['../components/page/VueEditor.vue'], resolve),
          meta: { title: '富文本编辑器' }
        },
        {
          // markdown组件
          path: '/markdown',
          component: resolve =>
            require(['../components/page/Markdown.vue'], resolve),
          meta: { title: 'markdown编辑器' }
        },
        {
          // 图片上传组件
          path: '/upload',
          component: resolve =>
            require(['../components/page/Upload.vue'], resolve),
          meta: { title: '文件上传' }
        },
        {
          // vue-schart组件
          path: '/charts',
          component: resolve =>
            require(['../components/page/BaseCharts.vue'], resolve),
          meta: { title: 'schart图表' }
        },
        {
          // 拖拽列表组件
          path: '/drag',
          component: resolve =>
            require(['../components/page/DragList.vue'], resolve),
          meta: { title: '拖拽列表' }
        },
        {
          // 拖拽Dialog组件
          path: '/dialog',
          component: resolve =>
            require(['../components/page/DragDialog.vue'], resolve),
          meta: { title: '拖拽弹框' }
        },
        {
          // 权限页面
          path: '/permission',
          component: resolve =>
            require(['../components/page/Permission.vue'], resolve),
          meta: { title: '权限测试', permission: true }
        },
        {
          path: '/404',
          component: resolve =>
            require(['../components/page/404.vue'], resolve),
          meta: { title: '404' }
        },
        {
          path: '/403',
          component: resolve =>
            require(['../components/page/403.vue'], resolve),
          meta: { title: '403' }
        }
      ]
    },
    // {
    //     path: '/login',
    //     component: resolve => require(['../components/page/Login.vue'], resolve)
    // },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
