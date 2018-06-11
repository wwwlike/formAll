<template>
 
    <el-select v-model="thisData[conf.key]" style="width:100%" v-bind=attrs>
      <el-option v  v-for="(item,key) in conf.options" :key="key"  :label="item" :value="key" />
     </el-select> 

</template>

<script>
import common from '../common.vue'
export default {
  extends: common,
  // props: {
  //   options: {
  //     type: Object,
  //     default: function() {
  //       return {}
  //     }
  //   }
  // },
  created() {
    // this.$watch('thisData', function(newVal, oldVal) {
    //   alert(this.conf.key)
    // }).deep(true)
  }
  // watch: {
  //   thisData: {
  //     handler(news) {
  //       debugger
  //       console.log(news)
  //     },
  //     deep: true
  //   }
  // }

}
</script>

<style>
</style>
