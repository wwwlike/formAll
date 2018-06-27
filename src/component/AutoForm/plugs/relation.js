// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2
// import { watchFormData } from './object.js'

const hidden = {
  data() {
    return {
      attrs: {
        relation: { title: '关联关系', colType: 'object', objType: 'object2', span: 12 }
      }
    }
  }, methods: {
    relationCallBack(key, conf) {
      for (var obj in conf) {
        if (
          this.formData[key] === obj || // 等于空的情况
          (!this.formData[key] && obj === 'null')
        ) {
          for (var obj2 in conf[obj]) { this.$set(this.formData, obj2, conf[obj][obj2]) }
        }
      }
      // alert(key + '||' + JSON.stringify(conf))
    }
  }
}

export default hidden
