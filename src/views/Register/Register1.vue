<!--  -->
<template>
  <div class="pageregister">
    <div class="login">
      <Myform :formtype="formtype" :formdata="value" @receivechilddata="hanldechilddata" :state="state"></Myform>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import form from '../../components/form.vue'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Myform: form,
    },
    props: {},
    data() {
      //这里存放数据
      return {
        formtype: 'rgform2',
        state: 'normal',
        value: [],
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
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
  .pageregister {
    height: 1000px;
    background-color: cadetblue;
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594293335448&di=fa0ba3a0727154d784f398ca650efc06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170802%2Ffee4f199355c4255976290e2ec5d796f.jpeg');
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>