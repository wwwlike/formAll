// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2

const hidden = {
  data() {
    return {
      attrs: {
        hidden: { title: '隐藏条件', colType: 'object', span: 12 }
        // attr: { title: '隐藏条件1', colType: 'object', span: 12
      }
    }
  },
  computed: {
    hiddens() {

    }
  },
  created() {
    for (var attr in this.thisForm) {
      const conf = this.thisForm[attr] // 取得一个字段的配置
      if (conf.hidden) { // 字段配置里是否含hidden
        for (const attr1 in conf.hidden) {
          this.$watch('thisData.' + attr1, (newVal, oldVal) => {
            var flag = this.hiddenCheck(this, conf.hidden)
            this.$set(conf, 'if', flag)
          }, {
            immediate: true,
            deep: true
          })
        }
      }
    }
  },
  updated() {
  },
  // watch: {
  //   'conf.hidden': {
  //     handler(news) {
  //       alert(news)
  //     },
  //   }
  // },
  methods: {
    hiddenCheck: function(obj, checkObj) {
      for (const attr in checkObj) {
        if (obj.thisData[attr] !== checkObj[attr]) {
          return false
        }
      }

      return true
    }
  }

}

export default hidden
