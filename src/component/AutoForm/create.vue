
<!--
  
  自动表单对象创建组件
-->
<template>


  <div class="wrap">
    <!-- <div class="left">111111111111333333333333333333333</div> -->
    <div class="middle">
      <el-tabs type="border-card" style="height:100%;">
        <el-tab-pane label="视图">
          {{currField}}
          <elm-form :formData="thisData" showType="view" ref="autoform" :autoForm="autoForm" @selected="(selectKey)=>{colKey=selectKey}"></elm-form>
        </el-tab-pane>
        <el-tab-pane label="代码">
          <pre><code class="jsonStyle">{{JSON.stringify(autoForm, null, 2)}}</code></pre>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">
      <div>
         <router-link to="/?opt=true">上一步</router-link>
      </div>
      <el-tabs type="border-card" style="height:96%;">
        <el-tab-pane label="基础属性">
          <el-form>
            <el-row><el-col>
            <el-form-item label-width="100px" label="字段关键字">
              <el-input v-model="colKey" size="small"></el-input>
            </el-form-item>
            </el-col></el-row>
          </el-form>
          <!---->
          <elm-form :formData="currField"  showType="design" @dataOut="(data)=>{designData=data
            
            
            }"></elm-form> 
        </el-tab-pane>

        <el-tab-pane label="代码">
          <pre><code class="jsonStyle">{{JSON.stringify(designData, null, 2)}}</code></pre>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import elmForm from '@/component/AutoForm/elmForm.vue'

export default {
  components: { elmForm },
  created() {
    var obj = JSON.parse(localStorage.getItem('formData'))
    this.arrayToForm(obj)
    // this.$set(this, 'autoForm', this.arrayToForm(obj))
  },
  data() {
    return {
      thisData: {}, // 真是表单值
      designData: {}, // 设计表单值
      autoForm: {},
      colKey: '' // 当前关键字

    }
  },
  watch: {
    colKey: function(newKey, oldKey) {
      if (!this.autoForm[newKey] && this.autoForm[oldKey]) { // 修改操作
        this.copyData(newKey, oldKey)
      }
    }
  },
  computed: {
    currField() {
      if (this.colKey === '' || !this.colKey) {
        return {}
      }
      return this.autoForm[this.colKey]
    }
  },
  methods: {
    copyData(newKey, oldKey) {
      this.$set(this.autoForm, newKey, this.autoForm[oldKey])
      this.$set(this.autoForm, oldKey, null)
      delete this.autoForm[oldKey]
      this.$refs.autoform.selectKey = newKey
    },
    // 数组转换对象
    arrayToForm(obj) {
      var i = 0
      for (var attr in obj) {
        var temp = {}
        temp.title = obj[attr].val
        temp.colType = 'input'
        temp.span = 4
        temp.x = 0
        temp.y = i
        // temp.hidden = { 'a': '1' }
        i++
        this.$set(this.autoForm, obj[attr].key, temp)// this.autoForm[obj[attr].key] = temp
      }
    }
  }

}
</script>

<style lang="scss">
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  .middle {
    padding: 10px;
    flex: 1;
  }
  .right {
    width: 600px;
    padding: 20px 20px 0 0;
  }
  .left {
    width: 300px;
    padding: 20px 20px 0 0;
  }
}
.jsonStyle {
  line-height: 1em;
}
</style>
