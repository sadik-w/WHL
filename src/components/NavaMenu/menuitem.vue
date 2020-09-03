<!--  -->
<template>
  <li>
    <a @click="to">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: {
      index: String,
      jump: String
    },
    data() {
      //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
    computed: {

    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      to() {
        if (this.index) {
          if (this.$router.history.current.name != (this.index)) {
            this.$router.replace(this.index)
          }
        }
        if(this.jump){
          this.$router.push(this.jump)
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
  /* 头部导航组件样式 */
  .horizontalNav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    float: right;
    background-color: #545c64;
  }

  .horizontalNav li {
    float: left;
  }

  .horizontalNav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 36px;
    text-decoration: none;
    margin:0;
  }

  .horizontalNav li a:hover {
    background-color: #111;
  }

  /* 侧边导航组件样式 */
  .verticalNav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(184, 184, 184);
    height: auto;
    float: left;
    width: 100%;
  }

  .verticalNav li {
    margin: 20px 0 20px 0;
  }

  .verticalNav li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .verticalNav li a:hover {
    background-color: #8d9196;
    color: whitesmoke;
  }
</style>