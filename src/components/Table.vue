<!--  -->
<template>
<div style="overflow: scroll;width: 100%;height: 400px;">
  <table border="1">
    <tr>
      <th align="center" v-for="i in title" :style="thstyle">{{i.title}}</th>
    </tr>
    <tr v-for="i in data">
      <td align="center" v-for="item in i">{{item}}</td>
        <slot></slot>
    </tr>
  </table>
</div>
  
    
  </div>
  
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {

    },
    props: {
      title: {
        type: Array
      },
      data: {
        type: Array
      },
      thclass: {
        type: String
      },
    },
    data() {
      //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
    computed: {
      thstyle() {
        if (this.thclass === 'dark') {
          return {
            'background-color': '#bbbbbb'
          }
        }
        else if (this.thclass === 'primary') {
          return {
            'background-color': '#3be7fa'
          }
        }
        else {
          return {
            'background-color': '#d6eaed'
          }
        }
      }
    },
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
  table {
    width: 150%;
    border: 1;
    border-collapse: collapse;
  }

  table,
  td,
  th {
    border: 1px solid black;

  }
  th {
    /* width: 270px; */
    height: 70px;
  }

  td {
    height: 50px;
    /* width: 270px; */
    text-align: center;
  }
</style>