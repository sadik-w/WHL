<!--  -->
<template>
  <div class="container">
    <div class="header">
      <span class="logo">
        <slot name="logo"></slot>
      </span>
      <span class="titleNav">
        <ul class="horizontalNav">
          <slot name="titleNav"></slot>
        </ul>
      </span>
    </div>
    <div class="middle">
      <div class="menu">
        <ul class="verticalNav">
          <slot name="menu"></slot>
        </ul>
      </div>
      <div class="main">
        <div class="card">
          <transition mode="out-in" enter-active-class="animated slideInDown" leave-active-class="animated bounceOutUp">
            <slot name="main"></slot>
          </transition>
        </div>
      </div>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: {},
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
  /* 头部导航样式 */
  .header {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .logo {
    position: absolute;
    width: 10%;
    left: 3%;
    top: 10%;
    float: left;
    /* background-color: rgb(117, 131, 136); */
  }

  .titleNav {
    width: 55%;
    position: absolute;
    float: left;
    left: 40%;
    top: 5%;
    /* background-color: rgb(117, 131, 136); */
  }

  .middle {
    position: relative;
    min-height: 500px;
    overflow: hidden;
  }

  .menu {
    background-color: rgb(184, 184, 184);
    color: #333;
    text-align: center;
    width: 15%;
    float: left;
    min-height: 700px;
    height: auto;
    /* padding-bottom: 100%;
    margin-bottom: -100%; */
  }

  .card {
    background-color: white;
    border-radius: 10px;
    position: absolute;
    width: 96%;
    top: 2%;
    left: 2%;
    height: 95%;
  }

  .card:hover {
    box-shadow: 3px 3px 3px 4px #cecbcb;
  }

  .main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    width: 85%;
    position: relative;
    min-height: 700px;
    height: auto;
    float: left;
    /* padding-bottom: 100%;
    margin-bottom: -100%; */
  }

  .footer {
    background-color: #B3C0D1;
    clear: both;
    text-align: center;
    min-height: 30px;
  }
</style>