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
  watch: {
    thisForm: {
      handler(newThisForm) {
        if (this.selectKey) { // 有选中一条记录
          const conf = newThisForm[this.selectKey] // 取得一个字段的配置
          if (conf.disabled) { // 字段配置里是否含hidden
            for (const attr1 in conf.disabled) {
              this.$watch('formData.' + attr1, (newVal, oldVal) => {
                debugger
                var flag = this.hiddenCheck(this, conf.disabled)
                this.$set(conf.attr, 'disabled', flag)

                if (flag) {
                  this.formData[conf.key] = null
                }
              }, {
                immediate: true,
                deep: true
              })
            }
          }
        }
      }, deep: true, immediate: true
    }
  },
  methods: {
    disabledCheck: function(obj, checkObj) {
      for (const attr in checkObj) {
        if (obj.formData[attr] !== checkObj[attr]) {
          return false
        }
      }
      return true
    }
  }

}

export default disabled
