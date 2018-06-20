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
thisForm 当前表单定义信息
table  thisForm转换后的table 数组增加XY坐标的thisForm
formData：所有表单的输入项目
-->
<template>
 <div>
    <!--v-if="col.if"-->
   整个表单配置 {{newForm}}
  
    <el-form size="small" :model="formData" status-icon :inline="true" ref="dynamicValidateForm" labelPosition="left">
      <el-row :key="index" v-for="(row,index) in table">
        <el-col :class="{red:col.key===selectKey}"  :span="col.span?col.span:12" @click.native="()=>{selectKey=col.key;$emit('selected',col.key)}" :key="col_index" v-for="(col,col_index) in row">
           <!--   -->
          <el-form-item label-width="100px" v-if="col.hidden===undefined|| col.hidden===false" :prop="col.key" :label="col.title">
            <!-- <div>{{col}}</div> -->
            <!-- {{thisData[col.key]}} -->
            <!-- 1:字段类型 2字段配置信息 3全部数值(改关联值的影响)-->
            <keep-alive>
              <component　v-bind:is="'el-form-'+col.colType" :showType="showType" :conf="col" :allData="formData" :form="thisForm" @change='change'></component>
            </keep-alive>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
</div>
</template>

<script>
import hidden from './plugs/hidden'
import title from './plugs/title'
import colType from './plugs/colType'
import disabled from './plugs/disabled'

/**
 *各种元素ui导入
 */
import { elFormDate, elFormInput, elFormSelect, elFormObject } from './forms/element'
import form from './form.vue'

export default {
  mixins: [hidden, disabled, colType, title], // 混合进来的各种组件 在design情况下需要
  components: { elFormDate, elFormInput, elFormSelect, elFormObject },
  extends: form,
  data() {
    return {
      selectKey: ''
    }
  }
}

</script>