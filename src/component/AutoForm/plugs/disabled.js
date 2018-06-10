// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2

const disabled = {
  data() {
    return {
      attrs: {
        disabled: { title: '不可编辑条件', colType: 'object', span: 12 }

      }
    }
  },
  computed: {
    disabled() {
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
    for (var attr in this.thisForm) {
      const conf = this.thisForm[attr]
      if (conf.disabled) {
        for (const attr in conf.disabled) {
          this.$watch('thisData.' + attr, (newVal, oldVal) => {
            var flag = this.disabledCheck(this, conf.disabled)
            if (!conf['attr']) {
              this.$set(conf, 'attr', {})
            }
            this.$set(conf.attr, 'disabled', flag)
            if (flag) {
              this.thisData[conf.key] = null
            }
          }, {
            immediate: true,
            deep: true
          })
        }
      }
    }
  },
  methods: {
    disabledCheck: function(obj, checkObj) {
      for (const attr in checkObj) {
        if (obj.thisData[attr] !== checkObj[attr]) {
          return false
        }
      }
      return true
    }
  }

}

export default disabled
