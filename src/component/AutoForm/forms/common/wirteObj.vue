<template>
  <div>
    <el-row>
      <el-col>
        <el-button @click="()=>{formData.push({key:undefined,val:undefined})}">增加</el-button>
      </el-col>
    </el-row>
    <el-table :data="formData" stripe style="width: 100%">
      <el-table-column prop="key" label="字段名" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.key"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="val" label="字段含义" width="180">
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

    <!-- <el-row v-for="(obj ,index) in formData" :key="index">
      <el-col :span="4">{{index}}</el-col>
      <el-col :span="8">
        <el-input v-model="obj.key"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="obj.val"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="()=>{
                
                formData=formData.filter(((one,thisindex)=>{
                  if(thisindex===index){
                    return false
                  }
                  return true
                }))
                }">删除</el-button>
      </el-col>
    </el-row> -->
    <div>
      <el-button v-if="formData&&formData.length>0&&finishSize===formData.length" @click="next">下一步存到vuex里</el-button>
    </div>
  </div>
</template>

<script>
// import VueRouter from 'vue-router'
export default {
  props: {
    formData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },

  methods: {
    next() {
      this.$emit('dataOut', this.formData)
      // sessionStorage.setItem('array', JSON.stringify(this.array))
      // this.$router.push({ path: '/' }) // -> /user/123
    }

  },
  computed: {
    finishSize() {
      debugger
      var array = this.formData.filter(one => {
        if (one.key && one.val) {
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
