<!--  -->
<template>
  <div class="header" style="z-index: 99;">
    <Row type="flex" justify="space-between" class="code-row-bg">

      <!-- <Col span="3" class="border">
      <MenuItem name="1">
      <p @click="pagechange" class="select">指南</p>
      </MenuItem>
      </Col> -->
      <slot></slot>

      <!-- <Col span="3" class="border">
      <MenuItem name="2">
      <p class="select">组件</p>
      </MenuItem>
      </Col>

      <Col span="3" class="border">
      <MenuItem name="3">
      <p class="select">专业版</p>
      </MenuItem>
      </Col>

      <Col span="3" class="border">
      <MenuItem name="4">
      <p class="select">社区</p>
      </MenuItem>
      </Col>

      <Col span="3" class="border">
      <MenuItem name="5">
      <Badge dot>
        <a href="#" class="demo-badge">
          <p class="select">教程</p>
        </a>
      </Badge>
      </MenuItem>
      </Col>

      <Col span="3" class="border">
      <MenuItem name="6">
      <Dropdown>
        <a href="javascript:void(0)" style="color: black;">
          <p class="select">生态</p>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>View Pro</DropdownItem>
          <DropdownItem>View UI Pro</DropdownItem>
          <DropdownItem>GitHub</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </MenuItem>
      </Col>

      <Col span="3" class="border">
      <MenuItem name="7">
      <p class="select">
        <Icon type="md-contact" color="#00FF34" size="30" />登录
      </p>
      </MenuItem>
      </Col>

      <Col span="3" class="border">
      <MenuItem name="8">
      <p class="select">
        <Icon type="md-add" size="30" />
      </p>
      </MenuItem>
      </Col> -->

    </Row>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
import titleitem from './title.item.vue'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      TitleItem:titleitem
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
      pagechange() {
        this.$router.push('grid')
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
  .header {
    position: fixed;
    right: 100px;
    top: 10%;
    width: 50%;
  }

  .select {
    color: #515a6e;
    font-size: 20px;
    text-align: center;

  }

  .border:hover {
    border-bottom: 3px solid #03a0e9;

  }
</style>