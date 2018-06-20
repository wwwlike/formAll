<!--
方便初始化表单
-->
<template>
  <wirteObj :formData="formData" @dataOut="dataOut"></wirteObj>
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
    if (JSON.parse(localStorage.getItem('formData'))) {
      this.$set(this, 'formData', JSON.parse(localStorage.getItem('formData')))
    }

    if (!this.$route.query.opt && this.formData !== []) {
      this.$router.push({ path: '/create' }) // -> /user/123
    }
  },
  methods: {
    dataOut(objData) {
      localStorage.setItem('formData', JSON.stringify(objData))
      this.$router.push({ path: '/create' }) // -> /user/123
    }
  }
}
</script>

<style>
</style>
