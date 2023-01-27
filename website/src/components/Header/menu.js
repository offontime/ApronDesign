const menu = [
  {
    key: 'design',
    name: '设计',
    type: 'route',
    to: '/design'
  },
  {
    key: 'guide',
    name: '开发',
    type: 'submenu',
    children: [
      {
        key: 'vue',
        name: 'Vue2',
        type: 'route',
        to: '/develop/vue'
      },
      {
        key: 'vue-next',
        name: 'Vue3',
        type: 'route',
        to: '/develop/vue-next'
      },
      {
        key: 'react',
        name: 'React',
        type: 'route',
        to: '/develop/react'
      },
      {
        key: 'react-taro',
        name: 'Taro',
        type: 'route',
        to: '/develop/react-taro'
      }
    ]
  },
  {
    key: 'lab',
    name: '实验室',
    type: 'route',
    to: '/lab'
  },
  {
    key: 'ecosystem',
    name: '生态系统',
    type: 'route',
    to: '/ecosystem'
  }
]

export default menu
