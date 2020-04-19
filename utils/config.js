export const router = [
  {
    path: '/component',
    title: '开发指南',
    children: [
      {
        name: '介绍',
        path: 'jieshao'
      },
      {
        name: '安装',
        path: 'anzhuang'
      },
      {
        name: '快速上手',
        path: 'shangshou'
      },
    ]
  },
  {
    path: '/component',
    title: '组件',
    children: [
      {
        path: 'icon',
        name: 'icon 图标',
        meta: {
          title: 'icon'
        }
      },
      {
        path: 'button',
        name: 'button 按钮',
        meta: {
          title: 'button'
        }
      },
    ]
  }

]