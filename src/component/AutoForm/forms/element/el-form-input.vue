<template>
<div>1{{attrs}}2
   <el-input v-model="thisData[conf.key]" style="width:100%" v-bind=attrs></el-input> 
   </div>
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
