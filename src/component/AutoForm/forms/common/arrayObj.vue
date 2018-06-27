<!--创建数组对象的array-->
<template>

  <el-table :data="formData">
    
    <el-table-column prop="item.field" :label="item.title" v-for="(item,index) in columns" :key="index" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row[item.field]"></el-input>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: function() {
        return [
          { field: 'key', title: '字段名', must: true, type: String },
          { field: 'val', title: '中文说明', must: true, type: String },
          { field: 'span', title: '长度', must: true, type: String }]
        //
      }
    },
    formData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      columns: []
    }
  }
}
</script>

<style>

</style>
