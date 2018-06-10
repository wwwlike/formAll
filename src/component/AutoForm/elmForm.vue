<!--
  自动表单2.0版本
  1：支持扩展多种INPUT组件
  2：支持扩展formUI框架
  3：支持扩展自定义组件
  4：支持各种显示模式
  5: 校验做成插件
  6：各种模式是否显示做成插件 通过mix把配置植入到这里
-->

<!--
thisForm 所有表单
table  转换后的table 数组
-->
<template>
  <div>
    <!-- {{thisData}} -->
    <!--v-if="col.if"-->
    <el-form size="small" :model="thisData" status-icon class="relativeFull " ref="dynamicValidateForm" labelPosition="left">
      <el-row :key="index" v-for="(row,index) in table">
        <el-col :class="{red:col.key===selectKey}" :span="col.span" @click.native="()=>{selectKey=col.key;$emit('selected',col.key)}" :key="col_index" v-for="(col,col_index) in row">
          <el-form-item v-if="col.if===undefined|| col.if===false" :prop="col.key" :label="col.title">
            <!-- <div>{{col}}</div> -->
            <!-- {{thisData[col.key]}} -->
            <!-- 1:字段类型 2字段配置信息 3全部数值(改关联值的影响)-->
            <keep-alive>
              <component　v-bind:is="'el-form-'+col.colType" 　:conf="col" :allData="thisData" :form="thisForm" @change='change'></component>
            </keep-alive>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { setting } from './setting.js'
import hidden from './plugs/hidden'
import title from './plugs/title'
import colType from './plugs/colType'
import disabled from './plugs/disabled'

/**
 *各种元素ui导入
 */
import { elFormDate, elFormInput, elFormSelect, elFormObject } from './forms/element'
import common from './forms/common.vue'
// import showType from './attr/showType.vue'

export default {
  mixins: [hidden, title, colType, disabled],
  components: { elFormDate, elFormInput, elFormSelect, elFormObject, common },

  data() {
    return {
      setting,
      selectKey: '',
      thisData: {}
    }
  },
  props: {
    autoForm: null,
    showType: {
      type: String,
      default: 'view'
    },
    formData: {}
  },

  computed: {
    thisForm() {
      if (this.showType === 'design') {
        return this.attrs
      } else {
        return this.autoForm
        // this.$set(this, 'thisForm', news)
      }
    },
    table() { // 表单配置转换成行列二维数组，并且把配置的KEY放入数组做KEY
      if (this.showType === 'design') {
        return this.attrTables()
      }
      var table = []
      for (const attr in this.thisForm) {
        var obj = this.thisForm[attr]
        if (!table[obj.x]) {
          table[obj.x] = []
        }
        obj.key = attr
        table[obj.x][obj.y] = obj
      }
      return table
    }
  },
  methods: {
    change(key, value) {
      this.thisData[key] = value
      this.$emit('dataOut', this.thisData)
    },
    attrTables() {
      var table = []
      var maxY = 1
      var curX = 0
      var curY = 0

      for (const attr in this.thisForm) {
        var obj = this.thisForm[attr]
        if (!table[curX]) {
          table[curX] = []
        }
        obj.key = attr
        table[curX][curY] = obj
        curY += 1
        if (curY > maxY) {
          curX += 1
          curY = 0
        }
      }
      return table
    }
  },
  watch: {
    formData: {
      handler(news, old) {
        debugger
        this.thisData = {}
        this.$set(this, 'thisData', news)
      }, deep: true, immediate: true
    }
    // autoForm: {
    //   handler(news, old) {
    //     this.thisForm = {}
    //     this.$set(this, 'thisForm', news)
    //   }, deep: true, immediate: true
    // }
  }
}
</script>