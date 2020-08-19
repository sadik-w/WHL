<!--  -->
<template>
  <div class=''>
    <Content>
      <Anchor show-ink style="z-index: 3; position: absolute;">
        <AnchorLink href="#1" title="first" />
        <AnchorLink href="#2" title="second" />
        <AnchorLink href="#3" title="third" />
        <AnchorLink href="#4" title="fourth" />
      </Anchor>

      <div id="1" style="z-index: 1;width: 100%;height: 1000px; background-color: coral;">

      </div>
      <div id="2" style="z-index: 1;width: 100%;height: 1000px; background-color:greenyellow">

      </div>
      <div id="3" style="z-index: 1;width: 100%;height: 1000px; background-color:cyan">

      </div>
      <div id="4" style="z-index: 1;width: 100%;height: 1000px; background-color:saddlebrown">

      </div>
    </Content>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import content from '../../components/content.vue'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Content: content
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
<style lang='scss' scoped>


</style>