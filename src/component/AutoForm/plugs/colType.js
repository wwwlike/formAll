// 设计这个的初衷是想给字段增加一个属性时加入一个解析的方法
// 字段解析处理器
// 1 初始化读这个值后如何处理
// 2 这个指改变后如何处理2

const colType = {
  data() {
    return {
      attrs: {
        colType: {
          title: '表单类型',
          colType: 'select',
          options: {
            select: '下拉框',
            input: '输入框'
          },
          span: 12
        }

        // objectType: {
        //   title: '对象类型',
        //   colType: 'select',
        //   obj_hidden: {
        //     colType: {
        //       nq: 'object'
        //     }
        //   },
        //   options: {
        //     object: '简单',
        //     object2: '逻辑关系',
        //     object3: '2层结构'
        //   },
        //   span: 12
        // }
      }
    }
  }
}

export default colType
