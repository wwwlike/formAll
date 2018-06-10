/** 自定义系统插件 */
import BlueDivshow from './Divshow/index.js'
import PopoMenu from './Divshow/src/popoMenu'

const components = [
  BlueDivshow,
  PopoMenu
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

//   /* istanbul ignore if */
//   if (typeof window !== 'undefined' && window.Vue) {
//     components.map(component => {
//         Vue.component(component.name, component);
//      });
//   };

// const blue={
//     install:function (Vue) {
//         Vue.component('Loading',LoadingComponent)
//     }
// }

export default install

