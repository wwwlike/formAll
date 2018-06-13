<!--object组件-->
<template>

<el-popover
  placement="right"
  width="400"
  trigger="click">
    <wirteObj :formData="formArray" @dataOut="dataOut"></wirteObj>
   <el-input v-model="tempStr"  slot="reference" v-bind=attrs></el-input> 
</el-popover>
</template>

<script>
import wirteObj from '../common/wirteObj.vue'

import common from '../common.vue'
export default {
  components: { wirteObj },

  data() {
    return {
      tempStr: '',
      formArray: []
    }
  },
  computed: {

  },
  methods: {
    dataOut(array) {
      this.$set(this.thisData, this.conf.key, {})
      for (var i = 0; i < array.length; i++) {
        this.$set(this.thisData[this.conf.key], array[i].key, array[i].val)
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
      debugger
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
