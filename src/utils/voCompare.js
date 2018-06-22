// 对比规则

// 给出 对比规则，给出值，查看是否满足情况

// showType {}
//

export function valCheck(data, checkObj) {
  for (const attr in checkObj) {
    var flag = voCompare(data[attr], checkObj[attr])
    if (flag === false) {
      return flag
    }
  }
  return true
}

/**
 *
// vo {field:{ge:'1',in:[1,2,3],ls:a},field2:2}
 * @param {*} val 对象值
 * @param {*} valConf 对象配置
 * return 返回是否符合对象配置的情况
 */
export function voCompare(val, valConf) {
  if (valConf instanceof Object) {
    let flag = false
    for (var key in valConf) {
      if (key === 'in' && valConf[key] instanceof Array) { // 在什么范围里
        return (valConf[key].filter((one) => {
          flag = (one === val)
        }).length > 0)
      } else if (key === 'eq') { // 等于
        flag = (val === valConf[key])
      } else if (key === 'nq') { // 不等于
        flag = (val !== valConf[key])
      } else if (key === 'le') { // 不等于
        flag = (val <= valConf[key])
      } else if (key === 'lt') { // 不等于
        flag = (val < valConf[key])
      } else if (key === 'ge') { // 不等于
        flag = (val >= valConf[key])
      } else if (key === 'gt') { // 不等于
        flag = (val > valConf[key])
      }
      if (flag === false) {
        return flag
      }
    }
    return true
  } else if (val === valConf) {
    return true
  }
  return false
}
