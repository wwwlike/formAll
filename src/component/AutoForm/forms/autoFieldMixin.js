var autoFieldMixin = {
  props: {
    conf: {
      type: Object,
      defalult: function() {
        return {}
      }
    },
    val: {
      type: Object,
      defalult: function() {
        return {}
      }
    }
  },
  created: function() {

  },
  computed: {
    aaa() {
      return '123'
    }
  },
  methods: {

  }
}
export { autoFieldMixin }
