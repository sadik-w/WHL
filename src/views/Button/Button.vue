<!--  -->
<template>
  <div>
    <Content>
      <h4>Basic</h4>
      <br><br>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </ButtonGroup>
      <br><br>
      <h4>Icons</h4>
      <br><br>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="ios-arrow-back"></Icon>
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="ios-color-filter-outline"></Button>
      </ButtonGroup>
      <br><br>
      <h4>Circle</h4>
      <br><br>
      <ButtonGroup shape="circle">
        <Button type="primary">
          <Icon type="ios-arrow-back"></Icon>
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
      </ButtonGroup>
      <ButtonGroup shape="circle">
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="ios-color-filter-outline"></Button>
      </ButtonGroup>
      <br><br>
      <h4>Size</h4>
      <br><br>
      <ButtonGroup size="large">
        <Button>Large</Button>
        <Button>Large</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
      <ButtonGroup size="small">
        <Button>Small</Button>
        <Button>Small</Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup size="large" shape="circle">
        <Button>Large</Button>
        <Button>Large</Button>
      </ButtonGroup>
      <ButtonGroup shape="circle">
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
      <ButtonGroup size="small" shape="circle">
        <Button>Small</Button>
        <Button>Small</Button>
      </ButtonGroup>
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