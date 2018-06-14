// 对象满足条件配置是否满足条件的通用JS

/**
 *
 * @param {*} obj vue对象
 * @param {*} thisForm 表单配置
 * @param {*} data 表单输入值
 * @param {*} selectKey 监控的字段
 */
export function watchObject(obj, thisForm, data, selectKey, typeField) {
  if (selectKey) { // 有选中一条记录
    const conf = thisForm[selectKey] // 取得一个字段的配置
    if (conf[typeField]) { // 字段配置里是否含hidden
      for (const attr1 in conf[typeField]) {
        obj.$watch('formData.' + attr1, (newVal, oldVal) => {
          var flag = hiddenCheck(this, conf[typeField])
          this.$set(conf, 'if', flag)
        }, {
          immediate: true,
          deep: true
        })
      }
    }
  }
}

/**
 *监formData变化 是否和表达式一致，返回给前端
 */
export function watchFormData(obj, attr, express) {

}

function hiddenCheck(obj, checkObj) {
  for (const attr in checkObj) {
    if (obj.formData[attr] !== checkObj[attr]) {
      return false
    }
  }
  return true
}

