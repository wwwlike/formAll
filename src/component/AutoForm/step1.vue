<!--
方便初始化表单
-->
<template>
<div>
  <!-- <wirteObj :formData="formData" @dataOut="dataOut"></wirteObj> -->
  <arrayObj :formData="formData" ></arrayObj>
</div>
</template>

<script>
import wirteObj from './forms/common/wirteObj.vue'
import arrayObj from './forms/common/arrayObj.vue'

export default {
  components: { wirteObj, arrayObj },
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
