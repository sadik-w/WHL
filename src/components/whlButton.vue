<template>
  <span :class="type" @click="handleClickLink">
      <slot></slot>
  </span>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: {
      type:String
    },
    data() {
      //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      handleClickLink(event) {
        this.$emit('click', event);
        // console.log(event);
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
  .primary {
    border:1px solid #dcdfe6;
    border-radius: 5px;
    color: #606266;
    background-color:#ffffff;
    padding: 15px 10px;
    margin:15px;
  }
  .primary:hover {
    border:1px solid #c6e2ff;
    color: #40a9ff;
    background-color:#ecf5ff;
    cursor:pointer;
  }
  .spdb{
    border:1px solid #577fdd;
    border-radius: 5px;
    color: #243047;
    background-image: linear-gradient(to bottom right, rgb(245, 77, 77), rgb(148, 148, 245));
    padding: 15px 10px;
    margin:15px;
  }
  .spdb:hover{
    border:1px solid #577fdd;
    color: #40a9ff;
    background-image: linear-gradient(to bottom right, red, blue);
    cursor:pointer;
  }
</style>