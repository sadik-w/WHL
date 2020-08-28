<template>
  <div class="step">
    <ul class="steps">
      <span v-if="icon" v-for="(item,index) in list" :key="item+index" :class="{'active':active===index}">
        <Icon size="40" :type="item.icon" :color="item.color" />
        <strong style="font-size: large;">{{item.content}}</strong><br>
        {{item.content}}
      </span>
      <li v-if="!icon" v-for="(item,index) in list" :key="index" :class="{'active':active===index}">
        <strong style="font-size: large;">{{item.content}}</strong><br>
        {{item.content}}
      </li>
    </ul>
    </ul>
  </div>

</template>
<script>
  export default {
    //import引入的组件需要注入到对象中才能使用
    props: {
      list: Array,
      active: Number,
      icon: Boolean,
    },
    components: {

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
    updated() {

    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style>
  .step {
    position: relative;
    height: 100px;
    width: 100%;
  }

  .steps {
    position: relative;
    margin-bottom: 30px;
    counter-reset: step;
    /*创建步骤数字计数器*/
  }

  .steps span.active~span,
  .steps li.active~li {
    color: rgb(129, 127, 127);
  }

  /*步骤描述*/
  .steps span.active,
  .steps li.active {
    list-style-type: none;
    font-size: 12px;
    text-align: center;
    width: 15%;
    position: relative;
    float: left;
    color: blue;
  }

  .steps span,
  .steps li {
    list-style-type: none;
    font-size: 12px;
    text-align: center;
    width: 15%;
    position: relative;
    float: left;
    color: blue;
  }

  /*步骤数字*/
  .steps li:before {
    display: block;
    content: counter(step);
    /*设定计数器内容*/
    counter-increment: step;
    /*计数器值递增*/
    width: 32px;
    height: 32px;
    background-image: linear-gradient(to bottom right, red, blue);
    line-height: 32px;
    border-radius: 32px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin: 0 auto 8px auto;
  }

  /*连接线*/
  .steps span~span:after,
  .steps li~li:after {
    content: "";
    width: 60%;
    height: 2px;
    background-image: linear-gradient(to bottom right, red, blue);
    position: absolute;
    left: -28%;
    top: 16px;
    z-index: 1;
    /*放置在数字后面*/
  }

  .steps span.active:before,
  .steps span.active:after,
  .steps li.active:before,
  .steps li.active:after {
    background-image: linear-gradient(to bottom right, red, blue);
  }

  /*将当前/完成步骤之后的数字及连接线变灰*/
  .steps span.active~span:before,
  .steps span.active~span:after,
  .steps li.active~li:before,
  .steps li.active~li:after {
    background-image: linear-gradient(to bottom right, rgb(129, 127, 127), rgb(243, 243, 247));
  }
</style>