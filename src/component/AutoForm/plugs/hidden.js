// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2
// import { watchFormData } from './object.js'

const hidden = {
  data() {
    return {
      attrs: {
        obj_hidden: { title: '隐藏条件', colType: 'object', span: 12 }
      }

    }
  },
  created() {
    // debugger
    // // alert('1')
    // this.$watch('formData.' + this.selectKey + '.hidden', (newVal, oldVal) => {
    //   debugger
    //   alert(newVal)
    // }, {
    //   immediate: true,
    //   deep: true
    // })
  },
  // watch: {

  //   thisForm: {// 1 监听配置信息
  //     handler(newThisForm) {
  //       if (this.selectKey) { // 有选中一条记录
  //         const conf = newThisForm[this.selectKey] // 取得一个字段的配置信息

  //         if (conf.hidden) { // 字段配置里是否含hidden
  //           for (const attr1 in conf.hidden) { // 对配置的所有值进行监听
  //             this.$watch('formData.' + attr1, (newVal, oldVal) => {
  //               var flag = this.hiddenCheck(this, conf.hidden)
  //               this.$set(conf, 'if', flag)
  //             }, {
  //               immediate: true,
  //               deep: true
  //             })
  //           }
  //         }
  //       }
  //     }, deep: true, immediate: true
  //   }
  // },
  methods: {
    hiddenCheck: function(obj, checkObj) {
      for (const attr in checkObj) {
        if (obj.formData[attr] !== checkObj[attr]) {
          return false
        }
      }
      return true
    }
  }

}

export default hidden
