// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2
// import { watchFormData } from './object.js'

const hidden = {
  data() {
    return {
      attrs: {
        obj_hidden: { title: '隐藏条件', colType: 'object', objType: 'object3', span: 12 }
      }
    }
  },
  methods: {

  }

}

export default hidden
