<!--object组件-->
<template>
<div> 
<el-popover  v-model="visible2"
  placement="right"
  width="600" height="600"
  trigger="click">
    <wirteObj :formData="formArray" @dataOut="dataOut"></wirteObj>
   <el-input v-model="tempStr"  slot="reference" v-bind=attrs></el-input> 
</el-popover>
</div>
</template>

<script>
import wirteObj from '../common/wirteObj.vue'

import common from '../common.vue'
export default {
  components: { wirteObj },

  data() {
    return {
      tempStr: '',
      visible2: false,
      formArray: []
    }
  },
  computed: {

  },
  methods: {
    dataOut(array) {
      // 数组转成对象
      this.visible2 = false
      this.$set(this.thisData, this.conf.key, {}) // 1设置对象
      for (var i = 0; i < array.length; i++) {
        // 设置对象各个属性
        this.$set(this.thisData[this.conf.key], array[i].key, array[i].val)
      }
    },
    // 复杂属性返回进行合并
    dataOut2(array) {
      // 数组转成对象
      this.visible2 = false
      this.$set(this.thisData, this.conf.key, {}) // 1设置对象
      for (var i = 0; i < array.length; i++) {
        if (!this.thisData[this.conf.key][array[i].key]) {
          this.$set(this.thisData[this.conf.key], array[i].key, {})
        }
        this.$set(this.thisData[this.conf.key][array[i].key], array[i].key1, array[i].val)
      }
    }
  },
  created() {
    this.$watch('thisData.' + this.conf.key, (newVal, oldVal) => {
      this.formArray = []
      this.tempStr = JSON.stringify(this.thisData[this.conf.key], null, 2)

      for (var arrayKey in this.thisData[this.conf.key]) {
        const obj = {}
        obj.key = arrayKey

        obj.val = this.thisData[this.conf.key][arrayKey]
        this.formArray.push(obj)
      }
    })
  },
  watch: {
    tempStr(newStr) {
      var obj = {}
      try {
        obj = JSON.parse(newStr)
      } catch (error) {
        return
      }
      this.$set(this.thisData, this.conf.key, obj)
    }, deep: true, immediate: true
  },
  extends: common

}
</script>

<style>
</style>
