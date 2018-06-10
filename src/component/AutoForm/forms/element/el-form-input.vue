<template>
<!-- <div>{{conf}} -->
   <el-input v-model="thisData[conf.key]" v-bind=attrs></el-input> 
   <!-- </div> -->
</template>

<script>
import common from '../common.vue'
export default {
  data: {

  },
  extends: common,
  created() {

  }

}
</script>

<style>
</style>
