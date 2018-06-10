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
    alert('1')
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
