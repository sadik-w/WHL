<!--  -->
<template>
  <div>
    <Content>
      <Button @click="customIcon=!customIcon">切换</Button>
      <Button @click="changeNow">+</Button>
      <Step :list="datalist" :active="now" :icon="customIcon">
      </Step>
      <Tab>
        <TabItem :value="now" index='0'>
          <div id="page1">
            1
          </div>
        </TabItem>
        <TabItem :value="now" index='1'>
          <div id="page2">
            2
          </div>
        </TabItem>
        <TabItem :value="now" index='2'>
          <div id="page3">
            3
          </div>
        </TabItem>
        <TabItem :value="now" index='3'>
          <div id="page4">
            4
          </div>
        </TabItem>
        <TabItem :value="now" index='4'>
          <div id="page5">
            5
          </div>
        </TabItem>
        <TabItem :value="now" index='5'>
          <div id="page6">
            6
          </div>
        </TabItem>
      </Tab>
    </Content>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import content from '../../components/content.vue'
  import step from '../../components/whlStep.vue'
  import tab from '../../components/whlTab.vue'
  import tabitem from '../../components/whlTabItem.vue'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Content: content,
      Step: step,
      Tab: tab,
      TabItem: tabitem,
    },
    data() {
      //这里存放数据
      return {
        now: 4,
        customIcon: true,
        datalist: [
          {
            icon: 'ios-archive',
            color: 'blue',
            content: '步骤一',
          },
          {
            icon: 'md-at',
            color: 'blue',
            content: '步骤二',
          },
          {
            icon: 'md-beer',
            color: 'blue',
            content: '步骤三',
          },
          {
            icon: 'ios-camera',
            color: 'blue',
            content: '步骤四',
          },
          {
            icon: 'md-car',
            content: '步骤五',
            color: 'blue',
          },
          {
            icon: 'md-cloud-done',
            content: '步骤六',
            color: 'blue',
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
      changecolor() {
        this.datalist.forEach((item, index) => {
          if (index <= this.now) {
            item.color = 'blue';
          }
          else {
            item.color = '#cccccc';
          }
        });
      },
      changeNow() {
        this.now = (this.now + 1) % this.datalist.length;
        this.changecolor();
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
  #page1 {
    background-color: blue;
    width: 100%;
    position: relative;
    height: 100%;

  }

  #page2 {
    background-color: rgb(255, 251, 0);
    width: 100%;
    position: relative;
    height: 100%;

  }

  #page3 {
    width: 100%;
    position: relative;
    height: 100%;

    background-color: rgb(255, 0, 0);
  }

  #page4 {
    width: 100%;
    position: relative;
    height: 100%;

    background-color: rgb(0, 0, 0);
  }

  #page5 {
    background-color: rgb(255, 0, 140);
    width: 100%;
    position: relative;
    height: 100%;

  }

  #page6 {
    background-color: rgb(0, 255, 98);
    width: 100%;
    position: relative;
    height: 100%;

  }
</style>