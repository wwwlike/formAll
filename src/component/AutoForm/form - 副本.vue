<template>
  
</template>

<script>
import { valCheck, voCompare } from '@/utils/voCompare.js'
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
  },
  computed: {
    newForm() { // 最新值得变化 关联值得变化，配置的变化
      debugger
      // var data = this.formData
      for (var key in this.attrs) { // 1 对字段配置进行遍历
        if (this.attrs[key].colType === 'object' && key.startsWith('obj_')) { // 2取出字段配置是object类型的字段
          for (var field in this.thisForm) { // 对当前配置信息进行遍历
            var attrConf = this.thisForm[field][key] // 找到這個配置的該屬性
            if (attrConf) {
              var flag = this.valCheck(this.formData, attrConf)
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
    voCompare, valCheck,
    compare(checkObj) {
      debugger
      return this.valCheck(this.formData, checkObj)
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
