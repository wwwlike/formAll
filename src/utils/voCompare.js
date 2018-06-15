// 对比规则

// 给出 对比规则，给出值，查看是否满足情况

// vo {abc:{ge:'1',in:[1,2,3],ls:a}}
// showType {}
//
/**
 *
 * @param {*} val 对象值
 * @param {*} valConf 对象配置
 * return 返回是否符合对象配置的情况
 */
export function voCompare(val, valConf) {
  if (val === valConf) {
    return true
  } else if (valConf instanceof Object) {
    for (var key in valConf) {
      if (key === 'in' && valConf[key] instanceof Array) { // 在什么范围里
        return (valConf[key].filter((one) => {
          return one === val
        }).length > 0)
      } else if (key === 'eq') { // 等于
        return val === valConf[key]
      } else if (key === 'nq') { // 不等于
        return val !== valConf[key]
      } else if (key === 'le') { // 不等于
        return val <= valConf[key]
      } else if (key === 'lt') { // 不等于
        return val < valConf[key]
      } else if (key === 'ge') { // 不等于
        return val >= valConf[key]
      } else if (key === 'gt') { // 不等于
        return val > valConf[key]
      }
    }
  }
}
