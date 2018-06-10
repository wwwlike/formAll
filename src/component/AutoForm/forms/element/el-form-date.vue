<template>
    <el-date-picker v-model="thisData[conf.key]" v-bind=attrs></el-date-picker>
</template>
<script>
import common from '../common.vue'
export default {
  extends: common

}
</script>

<style>

</style>
