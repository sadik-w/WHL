<!--  -->
<template>
  <div class=''>
    <Content>
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
          <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
          {{ item.content }}
          <template slot="action">
            <li>
              <Icon type="ios-star-outline" /> 123
            </li>
            <li>
              <Icon type="ios-thumbs-up-outline" /> 234
            </li>
            <li>
              <Icon type="ios-chatbubbles-outline" /> 345
            </li>
          </template>
          <template slot="extra">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2359294348,1673575777&fm=26&gp=0.jpg" style="width: 280px">
          </template>
        </ListItem>
      </List>
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
        data: [
          {
            title: '野原新之助1',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1605351046,793978037&fm=26&gp=0.jpg',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          },
          {
            title: '野原新之助2',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=394833138,3694650107&fm=26&gp=0.jpg',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          },
          {
            title: '小葵',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1977064271,2718442389&fm=26&gp=0.jpg',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          }
        ]
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

</style>