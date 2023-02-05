import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import allMds from '../../docs'
import Menu from './nav'

const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}

export default {
  name: 'DocumentPage',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      mdList: [],
      navigation: [],
      allMds
    }
  },
  computed: {
    menu () {
      const buffer = this.queryMenu()
      return buffer
    },
    activeMenu () {
      return this.$route.params.routeId
    }
  },
  mounted () {
    highlightCode()
    this.init()
  },
  updated () {
    highlightCode()
    // this.loadMarkdown()
  },
  methods: {
    init () {
      // init
      const currentRoute = this.$route.path.split('/')[1]
      if (!Menu[currentRoute]) {
        this.$router.push('/')
        return
      }
      const buffer = [
        ...Menu[currentRoute]
      ]
      const navigation = []
      const arr = []
      buffer.map(e => {
        if (e.isMarkdownPage) {
          navigation.push(e)// load navigation
          arr.push(e.key)// load markdown
        }
        return 0
      })
      this.navigation = navigation
      this.mdList = arr
    },
    handleRoute (key) {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      const menuStr = buffer[0]
      const path = `/${menuStr}/${key}`
      this.$router.push({
        path
      })
    },
    queryMenu () {
      const buffer = this.$route.path.split('/')
      buffer.shift()
      const menuStr = buffer[0]
      return Menu[menuStr]
    }
  }
}
