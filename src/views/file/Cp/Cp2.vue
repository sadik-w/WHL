<!--  -->
<template>
  <div class="libai">
    <div class="demo-spin-article">
      <h3>登金陵凤凰台</h3>
      <address>李白</address>
      <article>
        <p>凤凰台上凤凰游，凤去台空江自流。</p>
        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
        <p>三山半落青天外，二水中分白鹭洲。</p>
        <p>总为浮云能蔽日，长安不见使人愁。</p>
      </article>
    </div>
    <br>
    <Button @click="handleSpinCustom">
      加载！！
    </Button>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
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
      handleSpinCustom() {
        this.$Spin.show({
          render: (h) => {
            return h('div', [
              h('Icon', {
                'class': 'demo-spin-icon-load',
                props: {
                  type: 'ios-loading',
                  size: 18
                }
              }),
              h('div', 'Loading')
            ])
          }
        });
        setTimeout(() => {
          this.$Spin.hide();
        }, 3000);
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
  .libai {
    text-align: center;
  }

  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }
</style>