<!--  -->
<template>
  <div>
    <Content>
      <i-circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
      </i-circle>
      <div style="text-align:center;">
        <h1>颜色选择器</h1>
        <ColorPicker v-model="color" />
      </div>
      <h1>Grid练习</h1>
      <Row>
        <Col span="12" style="background-color: chartreuse;">col-12</Col>
        <Col span="12" style="background-color: coral;">col-12</Col>
      </Row>
      <br>
      <Row>
        <Col span="8" style="background-color: chartreuse;">col-8</Col>
        <Col span="8" style="background-color: coral;">col-8</Col>
        <Col span="8" style="background-color: chartreuse;">col-8</Col>
      </Row>
      <br>
      <Row>
        <Col span="6" style="background-color: chartreuse;">col-6</Col>
        <Col span="6" style="background-color: coral;">col-6</Col>
        <Col span="6" style="background-color: chartreuse;">col-6</Col>
        <Col span="6" style="background-color: coral;">col-6</Col>
      </Row>
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="4" style="background-color: chartreuse;">col-4</Col>
        <Col span="4" style="background-color: coral;">col-4</Col>
        <Col span="4" style="background-color: chartreuse;">col-4</Col>
        <Col span="4" style="background-color: coral;">col-4</Col>
      </Row>
      <br>
      <div style="background-color: rgb(172, 224, 231); width: 120px; float: right;height: 800px; padding: 0;">
        <div style="margin:30px auto; width: 20px; background-color: rgb(172, 231, 202);">1</div>
        <div style="margin:30px auto; width: 20px; background-color: rgb(177, 231, 172);">2</div>
        <div style="margin:30px auto; width: 20px; background-color: rgb(231, 172, 228);">3</div>
        <div style="margin:30px auto; width: 20px; background-color: rgb(231, 172, 172);">4</div>
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
        percent: 0,
        color1: '#19be6b',
      };
    },
    //监听属性 类似于data概念
    computed: {
      color() {
        let color = '#2db7f5';
        if (this.percent == 40) {
          color = '#5cb85c';
        }
        return color;
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
      setInterval(() => {
        this.percent = (this.percent + 10) % 100
      }, 1000);
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