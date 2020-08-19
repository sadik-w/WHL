export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      formCustom: {
        passwd: '',
        passwdCheck: '',
        age: ''
      },
      rule: {
        blank: false,
        six: false,
        eq: false,
        num: false,
        tp: false
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submit() {
      if (!(this.rule.blank) && !(this.rule.six) && !(this.rule.eq) && !(this.rule.num) && !(this.rule.tp)) {
        this.$Spin.show({
          render: (h) => {
            return h('div', [
              h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                  type: 'ios-loading',
                  size: 18
                }
              }),
              h('div', 'Loading')
            ])
          }
        });
        setTimeout(() => {
          this.$Spin.hide();
          this.$Message.info('成功提交');
        }, 3000);
      }
    },
    reset() {
      this.formCustom =
      {
        passwd: '',
        passwdCheck: '',
        age: ''
      }
      this.$Message.info('清除成功');
    },
    pw() {
      if (this.formCustom.passwd.length < 6 && this.formCustom.passwd.length !== 0) {
        this.rule.six = true
      }
      if (this.formCustom.passwd === '') {
        this.rule.blank = true
      }
      const result = /^\d+$/.test(this.formCustom.passwd)
      if (result) {
        this.rule.tp = true
      }
    },
    pwck() {
      if (this.formCustom.passwd !== this.formCustom.passwdCheck) {
        this.rule.eq = true
      }
    },
    age() {
      if (!/^[0-9]+$/.test(this.formCustom.age)) {
        this.rule.num = true
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() {
    if (this.formCustom.passwd.length > 6) {
      this.rule.six = false
      this.rule.blank = false
    }
    if (this.formCustom.passwd === this.formCustom.passwdCheck) {
      this.rule.eq = false
    }
    if (/^[0-9]+$/.test(this.formCustom.age)) {
      this.rule.num = false
    }
    const result = /^\d+$/.test(this.formCustom.passwd)
    if (!result) {
      this.rule.tp = false
    }
  }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}