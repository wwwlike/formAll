<template>
  
</template>

<script>
export default {

  data() {
    return {

      thisForm: {}// 根据当前模式确定表单实际配置
    }
  },
  props: {
    autoForm: null, // 传入自动表单配置
    showType: { // 默认显示模式
      type: String,
      default: 'view'
    },
    formData: {}
  }, created() {
    if (this.showType === 'design') {
      this.$set(this, 'thisForm', this.attrs)
    } else {
      this.$set(this, 'thisForm', this.autoForm)
    }
    // 配置变化，值得监听也得发生变化，监控那些值也要发生变化

    // this.$watch('thisForm', (newsVal, oldVal) => {
    //   // 先清空先前所有监控，重新添加watch
    //   console.log(this.$watch)
    //   debugger
    //   for (var key in this.attrs) { // 循环遍历各组件的基础配置信息看那些配置是object类型的，这类型一般需要计算值后返回结果给前端，避免
    //     if (this.attrs[key].colType === 'object' && key.startsWith('obj_')) { // 读配置信息判断是否是object 是配置信息的话
    //       for (var att in this.thisForm) {
    //         if (this.thisForm[att][key]) {
    //           for (var at in this.thisForm[att][key]) {
    //             console.log('监听formData的' + at + '变化')
    //             this.$watch('formData.' + at, (newVal, oldVal) => {
    //               console.log('formDatad的' + at + '变化')
    //               if (this.thisForm[att][key]) {
    //                 var flag = this.valCheck(this.thisForm[att][key])
    //                 this.$set(this.thisForm[att], key.substring(4), flag)
    //               }
    //             }, {
    //               immediate: true,
    //               deep: true
    //             })
    //           }
    //         }
    //       }
    //     }
    //   }
    // }, { immediate: true, deep: true })
  },
  computed: {
    newForm() { // 最新值得变化 关联值得变化，配置的变化
      // var data = this.formData
      for (var key in this.attrs) { // 1 对字段配置进行遍历
        if (this.attrs[key].colType === 'object' && key.startsWith('obj_')) { // 2取出字段配置是object类型的字段
          for (var field in this.thisForm) { // 对当前配置信息进行遍历
            var attrConf = this.thisForm[field][key] // 找到這個配置的該屬性
            if (attrConf) {
              var flag = this.valCheck(attrConf)
              this.$set(this.thisForm[field], key.substring(4), flag)
            }
          }
        }
      }
      return this.thisForm
    },
    table() { // 表单配置转换成行列二维数组，并且把配置的KEY放入数组做KEY
      if (this.showType === 'design') {
        return this.attrTables()
      }
      var table = []
      for (const attr in this.thisForm) {
        var obj = this.thisForm[attr]
        if (!table[obj.x]) {
          table[obj.x] = []
        }
        obj.key = attr
        table[obj.x][obj.y] = obj
      }
      return table
    }
  },
  methods: {
    valCheck(checkObj) {
      for (const attr in checkObj) {
        if (this.formData[attr] !== checkObj[attr]) {
          return false
        }
      }
      return true
    },
    change(key, value) {
      this.formData[key] = value
      this.$emit('dataOut', this.formData)
    },
    attrTables() {
      var table = []
      var maxY = 1
      var curX = 0
      var curY = 0

      for (const attr in this.thisForm) {
        var obj = this.thisForm[attr]
        if (!table[curX]) {
          table[curX] = []
        }
        obj.key = attr
        table[curX][curY] = obj
        curY += 1
        if (curY > maxY) {
          curX += 1
          curY = 0
        }
      }
      return table
    }
  },
  watch: {

  }
}
</script>

<style>

</style>
