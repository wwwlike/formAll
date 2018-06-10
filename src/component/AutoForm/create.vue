
<!--
  
  自动表单对象创建组件
-->
<template>
  <div class="wrap">
    <div class="left">111111111111333333333333333333333</div>
    <div class="middle">
      <el-tabs type="border-card" style="height:100%;">
        <!-- {{autoForm.formInfo}} -->
        <el-tab-pane label="视图">
          <!-- <auto-form :autoForm="autoForm" showType="formCreate" :formData="{}" ref="autoform" @getObj="fieldClick"></auto-form> -->
            <elm-form :formData="thisData" showType="view" ref="autoform" :autoForm="autoForm" @selected="(selectKey)=>{colKey=selectKey}"></elm-form>
        </el-tab-pane>
        <el-tab-pane label="代码">
          <pre><code class="jsonStyle">{{JSON.stringify(autoForm, null, 2)}}</code></pre>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">
      <el-input v-model="colKey" ></el-input>
       <el-tabs type="border-card" style="height:96%;">
        <el-tab-pane label="基础属性">
            <elm-form :formData="currField" @dataOut='setOut' showType="design" ></elm-form>
        </el-tab-pane>
        <!-- <el-tab-pane label="属性校验"> 
            <elm-form :formData="currField" @dataOut='setOut' showType="add" :autoForm="rules"></elm-form>


        </el-tab-pane>
        <el-tab-pane label="关联插件"> </el-tab-pane> -->
      </el-tabs>
    

    </div>
  </div>
</template>

<script>
import elmForm from '@/component/AutoForm/elmForm.vue'
import { setting } from './setting.js'

export default {
  components: { elmForm },
  data() {
    return {
      settingField: {},
      setting,
      autoForm: {
        name: { title: '姓名', colType: 'input', span: 8, x: 0, y: 0, disabled: { areacode: '1' }},
        tel: { title: '滇西电话', colType: 'input', span: 8, x: 0, y: 1, hidden: { name: 'a', areacode: 'b' }},
        areacode: { title: '区划编码', colType: 'input', span: 8, x: 1, y: 0, hidden: { name: 'c' }}
      },
      colKey: '', // 当前关键字
      currLine: 0, // 当前行
      thisData: {}

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
    getCurrField() {
      if (this.colKey === '' || !this.colKey) {
        return {}
      }
      return this.getField(this.colKey)
    },
    setOut(setOutData) {
      this.addData(this.colKey, setOutData)
    },
    newField() {
      this.addData('xxx', { title: '姓名1', colType: 'input', span: 8 })
      this.colKey = 'xxx'
    }, fieldClick(data) {
      this.colKey = data.colKey
      this.currLine = data.index
    }, copyData(newKey, oldKey) {
      this.$set(this.autoForm, newKey, this.autoForm[oldKey])
      this.$set(this.autoForm, oldKey, null)
      delete this.autoForm[oldKey]
      this.$refs.autoform.selectKey = newKey
    },
    addLine() { // 新增一行
      this.autoForm.formInfo.push({ data: { 'xxx': { title: '姓名1', colType: 'input', span: 8 }}}) // 注意数组索引, [0,1,2..]
      this.colKey = 'xxx'
      this.$refs.autoform.selectKey = 'xxx'
    },
    addData(addKey, value) {
      for (const s in this.autoForm.formInfo) {
        // 取得每一行
        for (const v in this.autoForm.formInfo[s]) {
          if (v === 'data') {
            for (const colkey in this.autoForm.formInfo[s][v]) {
              if (this.colKey === colkey) {
                this.$set(this.autoForm.formInfo[s][v], addKey, value)
                this.$refs.autoform.selectKey = addKey
              }
            }
          }
        }
      }
    },
    deleteField() {
      this.$refs.autoform.selectKey = null
      for (const s in this.autoForm.formInfo) {
        // 取得每一行
        for (const v in this.autoForm.formInfo[s]) {
          if (v === 'data') {
            for (const colkey in this.autoForm.formInfo[s][v]) {
              if (this.colKey === colkey) {
                this.$set(this.autoForm.formInfo[s][v], colkey, null)
                this.colKey = null
                delete this.autoForm.formInfo[s][v][colkey]
              }
            }
          }
        }
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
