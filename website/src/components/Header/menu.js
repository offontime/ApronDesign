const menu = [
  {
    key: 'design',
    name: '设计',
    type: 'route',
    to: '/design/introduction'
  },
  {
    key: 'guide',
    name: '使用指南',
    type: 'route',
    to: '/guide/apron'
  },
  {
    key: 'document',
    name: '开发',
    type: 'submenu',
    children: [
      {
        key: 'vue',
        name: 'Vue2',
        type: 'link',
        to: 'https://vue.apron.design'
      },
      {
        key: 'vue-next',
        name: 'Vue3',
        type: 'link',
        to: 'https://vue-next.apron.design'
      },
      {
        key: 'react',
        name: 'React',
        type: 'link',
        to: 'https://react.apron.design'
      },
      {
        key: 'react-taro',
        name: 'Taro',
        type: 'link',
        to: 'https://taro.apron.design'
      }
    ]
  },
  {
    key: 'ecosystem',
    name: '生态系统',
    type: 'route',
    to: '/ecosystem'
  }
]

export default menu
