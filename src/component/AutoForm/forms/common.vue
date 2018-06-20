<!--
w问题抛出 这里只能自己控制自己，自己如何控制别人，关联关系在哪里处理

-->

<script>
// import hidden from '../plugs/hidden'
export default {
  // mixins: [hidden], // 整合attr插件
  props: {
    conf: { // 单个字段配置信息
      required: true,
      type: Object,
      default: function() { return { attr: {}} }
    }, // 单行配置信息
    allData: {}, // 数据信息
    form: {}// 表单信息

  },
  mounted() {
    // this.thisConf.if = this.hidden
  },

  data() {
    return {
      thisData: {}, // 数据信息副本 得到prop引用，修改后也可以传出去
      thisForm: {} // 表单信息副本
      // thisConf:
    }
  },
  computed: {
    attrs() {
      return this.conf
    }
  },
  watch: {
    allData: {
      handler(news) {
        this.$set(this, 'thisData', this.allData)
        // Object.assign(this.thisData, this.data)
      }, deep: true, immediate: true
    },
    form: {
      handler(news) {
        this.$set(this, 'thisForm', this.form)
        // Object.assign(this.thisData, this.data)
      }, deep: true, immediate: true
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
