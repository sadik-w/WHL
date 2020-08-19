<!--  -->
<template>
  <div>
    <Title>
      <Item to="/cp1">组件一</Item>
      <Item to="/cp2">组件二</Item>
      <Item to="/cp3">组件三</Item>
      <Item to="/cp4">组件四</Item>
      <Item to="/cp5">组件五</Item>
      <Item to="/cp6">组件六</Item>
      <Item to="/cp7">组件七</Item>
      <Item to="/cp8">组件八</Item>
    </Title>
    <Spdb></Spdb>
    <Content>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <button id="hide">隐藏</button>
      <button id="show">显示</button>
    </Content>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import content from '../../components/content.vue'
  import title from '../../components/title.vue'
  import item from '../../components/item.vue'
  import spdb from '../../components/spdb.vue'
  import $ from 'jquery'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Content: content,
      Title: title,
      Item: item,
      Spdb: spdb
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

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      console.log(window.innerHeight);
      console.log(window.innerWidth);
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      $(document).ready(function () {
        //
        $("button").click(function () {
          $("p").toggle();
        });
        //
      });
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
  img {
    width: 100%;
    height: 100%;
  }
</style>