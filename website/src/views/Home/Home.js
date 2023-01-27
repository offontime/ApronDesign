import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      demoStyle: {
        transform: 'translate(-50%, -50%)'
      },
      blueCirclePosition: '',
      greenCirclePosition: '',
      prevScrollTop: 0,
      scrollTop: 0
    }
  },
  watch: {
    scrollTop (next, current) {
      setTimeout(() => {
        if (next === window.scrollY) {
          // 滚动结束
          this.prevScrollTop = next
          this.circlePositionSet()
        }
      }, 100)
      if (current === this.prevScrollTop) {
        // 滚动开始
      }
    }
  },
  mounted () {
    this.init()
    document.addEventListener('mousemove', this.windowAreaMouseOver)
  },
  beforeDestroy () {
    document.removeEventListener('mousemove')
  },
  methods: {
    init () {
      // init
      this.circlePositionSet()
      document.addEventListener('scroll', () => {
        this.scrollTop = window.scrollY
      })
    },
    circlePositionSet () {
      this.setBlueCirclePosition()
      this.setGreenCirclePosition()
    },
    setBlueCirclePosition () {
      // 蓝色圆圈运动轨迹
      const y = window.scrollY
      const pageHeight = document.body.clientHeight
      const viewHeight = window.innerHeight
      const transitionY = (viewHeight - 450) * (y / pageHeight)
      this.blueCirclePosition = `${transitionY}px`
    },
    setGreenCirclePosition () {
      // 绿色圆圈运动轨迹
      const y = window.scrollY
      const pageHeight = document.body.clientHeight
      const viewHeight = window.innerHeight
      const transitionY = (viewHeight * (1 - (y / pageHeight)) - 280) * 0.6
      this.greenCirclePosition = `${transitionY}px`
    },
    windowAreaMouseOver ({ clientX, clientY }) {
      const demoArea = this.$refs.demo.getBoundingClientRect()
      const xArea = [demoArea.x - 150, demoArea.x + demoArea.width + 150]
      const yArea = [demoArea.y - 150, demoArea.y + demoArea.height + 150]
      const center = [(xArea[0] + xArea[1]) / 2, (yArea[0] + yArea[1]) / 2]
      const point = [clientX, clientY]
      let delta = [point[0] - center[0], point[1] - center[1]]
      if (point[0] > xArea[1] || point[0] < xArea[0] || point[1] > yArea[1] || point[1] < yArea[0]) {
        delta = [0, 0]
      }
      const transform = `translate(calc(-50% - ${delta[0] / 60}px), calc(-50% - ${delta[1] / 60}px))`
      const backgroundPosition = `${delta[0] / 200}px ${delta[1] / 200}px`
      this.demoStyle.transform = transform
      this.demoStyle.backgroundPosition = backgroundPosition
    }
  }
}
