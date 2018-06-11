// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2

const title = {
  data() {
    return {
      attrs: {
        title: { title: '字段说明', colType: 'input', span: 12 }
      }
    }
  },
  computed: {
    hidden() {
      // if (this.conf.hidden) {
      //   debugger
      //   return this.thisData + 1

      // for (const attr in this.conf.hidden) {
      //   if (this.thisData[attr] !== this.conf.hidden[attr]) {
      //     return false
      //   }
      // }
      // return true

      // if (this.conf.hidden) {
      //   debugger
      //   console.log(this.thisData)
      //   return this.hiddenCheck(this, this.conf.hidden)
      // }
      // return true
    }
  },
  created() {

  },
  methods: {

  }}

export default title
