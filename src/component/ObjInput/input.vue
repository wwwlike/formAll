<template>
  <div>
    <el-row>
      <el-col>
        <el-button @click="()=>{array.push({key:undefined,val:undefined})}">增加</el-button>
      </el-col>
    </el-row>
    <el-row v-for="(obj ,index) in array" :key="index">
      <el-col :span="4">{{index}}</el-col>
      <el-col :span="8">
        <el-input v-model="obj.key"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="obj.val"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="()=>{
                
                array=array.filter(((one,thisindex)=>{
                  if(thisindex===index){
                    return false
                  }
                  return true
                }))
                }">删除</el-button>
      </el-col>
    </el-row>
    <div>
      <el-button v-if="array.length>0&&finishSize===array.length" @click="writeAndtoStep2">下一步存到vuex里</el-button>
    </div>
  </div>
</template>

<script>
// import VueRouter from 'vue-router'
export default {
  created() {
    if (sessionStorage.getItem('array')) {
      this.array = JSON.parse(sessionStorage.getItem('array'))
    }
  },
  data() {
    return {
      array: []
    }
  },
  methods: {
    writeAndtoStep2() {
      sessionStorage.setItem('array', JSON.stringify(this.array))
      this.$router.push({ path: '/' }) // -> /user/123
    }

  },
  computed: {
    finishSize() {
      return this.array.filter(one => {
        if (one.key && one.val) {
          return true
        }
        return false
      }).length
    }
  }}
</script>

<style>
</style>
