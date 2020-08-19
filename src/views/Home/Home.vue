<template>
  <div>
    <Title>
      <TitleItem>
        <a @click="pagechange('/info')" class="select">指南</a>
      </TitleItem>
      <TitleItem>
        <a @click="pagechange('/cp')" class="select">组件</a>
      </TitleItem>
      <TitleItem>
        <a class="select">专业版</a>
      </TitleItem>
      <TitleItem>
        <a class="select">社区</a>
      </TitleItem>
      <TitleItem>
        <a class="select">教程</a>
      </TitleItem>
      <TitleItem>
        <Dropdown>
          <a href="javascript:void(0)" style="color: black;">
            <a class="select">生态</a>
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>View Pro</DropdownItem>
            <DropdownItem>View UI Pro</DropdownItem>
            <DropdownItem>GitHub</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </TitleItem>
      <TitleItem>
        <a class="select" @click="pagechange('/login')">
          <Icon type="md-contact" color="#00FF34" size="30" />登录
        </a>
      </TitleItem>
      <TitleItem>
        <a class="select">
          <Icon type="md-add" size="30" />
        </a>
      </TitleItem>
    </Title>
    <Content>
      <Spin size="large"></Spin>
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1451324619,2261889037&fm=26&gp=0.jpg"
        class="backimg">
    </Content>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import content from '../../components/content.vue'
  import title from '../../components/title.vue'
  import titleitem from '../../components/title.item.vue'
  // import titleitem from '../../components/title.item.vue'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Content: content,
      Title: title,
      TitleItem: titleitem
      // TitleItem:titleitem

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
      pagechange(val) {
        this.$router.replace(val)
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$Message.info('主页！！！！！！！！！！！');
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() {
    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
  .backimg {
    width: 100%;
    height: 100%;
  }
</style>