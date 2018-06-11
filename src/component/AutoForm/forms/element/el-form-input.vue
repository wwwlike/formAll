<template>
<!-- <div>{{conf}} -->
   <el-input v-model="thisData[conf.key]" style="width:100%" v-bind=attrs></el-input> 
   <!-- </div> -->
</template>

<script>
import common from '../common.vue'
export default {
  data() {
    return {

    }
  },
  extends: common,
  created() {

  }

}
</script>

<style>
</style>
