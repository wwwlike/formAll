<!--object组件-->
<template>
   <el-input v-model="tempStr" v-bind=attrs></el-input> 
</template>

<script>
import common from '../common.vue'
export default {
  data() {
    return {
      tempStr: ''
    }
  },
  // computed: {
  //   aaa() {
  //     return null
  //   }
  // },
  updated() {
  },
  created() {
    this.$watch('thisData.' + this.conf.key, (newVal, oldVal) => {
      this.tempStr = JSON.stringify(this.thisData[this.conf.key], null, 2)
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
      this.thisData[this.conf.key] = obj
    }
  },
  extends: common

}
</script>

<style>
</style>
