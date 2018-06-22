<!--2层复杂对象写入-->
<template>
  <div>
    <el-row>
      <el-col>
        <el-button @click="()=>{formData.push({key:undefined,key1:undefined,val:undefined})}">增加</el-button>
      </el-col>
    </el-row>
    <el-table :data="formData" stripe style="width: 100%">
      <el-table-column prop="key" label="key" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.key"></el-input>
        </template>
      </el-table-column>
       <el-table-column prop="key" label="key1" width="180">
        <template slot-scope="scope">
          <el-select v-model="scope.row.key1">
                  <el-option v  v-for="(item,thiskey) in options" :key="thiskey"  :label="item" :value="thiskey" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="val" label="value" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.val"></el-input>
        </template>
      </el-table-column>
      <!--fixed="right"-->
       <el-table-column  label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="()=>{
                formData=formData.filter((one)=>{
                  if(one.key===scope.row.key){
                    return false
                  }
                  return true
                })
                }">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-button v-if="formData&&formData.length>0&&finishSize===formData.length" @click="next">确定</el-button>
    </div>
  </div>
</template>

<script>
// import VueRouter from 'vue-router'
export default {
  props: {
    formData: { // 需要编辑的值
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      options: {
        eq: '等于',
        nq: '不等于',
        in: 'in',
        ge: '大于等于',
        le: '小于等于',
        lt: '小于',
        gt: '大于',
        notNUll: '不等于空',
        null: '等于空'

      }
    }
  },
  methods: {
    next() {
      this.$emit('dataOut', this.formData)
    }

  },
  computed: {
    finishSize() {
      var array = this.formData.filter(one => {
        if (one.key && one.key1 && one.val) {
          return true
        }
        return false
      })

      if (array) {
        return array.length
      } else {
        return 0
      }
    }
  }}
</script>

<style>
</style>
