const setting = {
  title: {
    title: '名称',
    colType: 'input',
    span: 12,
    x: 0,
    y: 0
  },
  span: {
    title: '宽度',
    colType: 'input',
    span: 12,
    x: 0,
    y: 1
  },
  colType: {
    title: '输入框类型',
    colType: 'select',
    options: { select: '下拉框', input: '输入框' },

    span: 12,
    x: 1,
    y: 0
  },
  rules: {
    title: '校验规则',
    span: 12,
    dataType: Array,
    colType: 'input',
    hidden: { colType: 'select' },
    x: 1,
    y: 1
  }
}

// const rules = {
//   aaa: {
//     title: '校验规则',
//     dataType: Array,
//     colType: 'input',
//     // hidden: { colType: 'select' },
//     x: 0,
//     y: 0
//   }
// }
export {
  setting, rules
}
