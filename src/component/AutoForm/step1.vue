<!--
方便初始化表单
-->
<template>
  <wirteObj :data="formData" @dataOut="dataOut"></wirteObj>
</template>

<script>
import wirteObj from './forms/common/wirteObj.vue'

export default {
  components: { wirteObj },
  data() {
    return {
      formData: []
    }
  },
  created() {
    if (sessionStorage.getItem('formData')) {
      this.formData = JSON.parse(sessionStorage.getItem('formData'))
    }
  },
  methods: {
    dataOut(objData) {
      sessionStorage.setItem('formData', JSON.stringify(objData))
      this.$router.push({ path: '/create' }) // -> /user/123
    }
  }
}
</script>

<style>
</style>
