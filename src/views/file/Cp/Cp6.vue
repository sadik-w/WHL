<template>
  <div id="test">
    <Content1>
      <div style="padding: 0;">
        <div>
          <wButton type="primary" @click="checkout('datepicker1')">时间选择器1</wButton>
          <wButton type="primary" @click="checkout('datepicker2')">时间选择器2</wButton>
          <wButton type="primary" @click="checkout('rgform1')">注册表单1</wButton>
          <wButton type="primary" @click="checkout('rgform2')">注册表单2</wButton>
          <wButton type="primary" @click="test">primary button</wButton>
          <wButton type="spdb" @click="test">spdb button</wButton>
          <el-select v-model="state" placeholder="请选择输入框状态" @change="checkout('input')">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <wButton type="primary" @click="checkout('select')">select</wButton>
          <wButton type="primary">111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
          <wButton type="primary">1111</wButton>
        </div>
        <div style="position: absolute;top: 100px;">
          <WhlForm :formtype="formtype" :formdata="value" @receivechilddata="hanldechilddata" :state="state"></WhlForm>
        </div>
      </div>
    </Content1>
  </div>
</template>
<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import form from '../../components/form.vue'
  import button from '../../components/whlButton.vue'
  import content from '../../components/content.vue'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      WhlForm: form,
      wButton: button,
      Content1: content
    },
    data() {
      //这里存放数据
      return {
        formtype: 'select',
        state: 'normal',
        dicstyle: {

        },
        value: [{
          value: 'normal',
          label: '普通'
        }, {
          value: 'error',
          label: '错误'
        }, {
          value: 'disabled',
          label: '禁用'
        }, {
          value: 'password',
          label: '密码框'
        }],
        parentData: [],
        options: [{
          value: 'normal',
          label: '普通'
        }, {
          value: 'error',
          label: '错误'
        }, {
          value: 'disabled',
          label: '禁用'
        }, {
          value: 'password',
          label: '密码框'
        }],
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

      test() {
        console.log('aaa');
      },
      checkout(e) {
        this.formtype = e;
        console.log(this.formtype);
        console.log(this.state);
      },
      hanldechilddata(data) {
        switch (this.formtype) {
          case 'datepicker1':
            {
              this.parentData = data;
              console.log(this.parentData);
              break;
            }
          case 'datepicker2':
            {
              this.parentData = data;
              console.log(this.parentData);
              break;
            }
          case 'rgform1':
            {
              this.parentData = data;
              console.log(this.parentData);
              break;
            }
          case 'rgform2':
            {
              this.parentData = data;
              console.log(this.parentData);
              break;
            }
          case 'select':
            {
              this.parentData = data;
              console.log(this.parentData.value);
              break;
            }
          case 5:
            {
              break;
            }
          case 6:
            {
              break;
            }
          default:
            {
              break;
            }
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
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
  #test {
    padding: 0;
  }
</style>