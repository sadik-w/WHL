<template>
  <div>
    <Navmenu>
      <div slot="logo">
        <img src="../../assets/logo-cat.png" width="157" height="85">
      </div>
      <div slot="titleNav">
        <!-- 顶部导航栏 -->
        <Menuitem jump="login"><i class="el-icon-loading"></i>登录</Menuitem>
        <Menuitem jump="register"><i class="el-icon-edit">注册</i></Menuitem>
        <Menuitem ump="login"><i class="el-icon-switch-button" @click="exit">退出</i></Menuitem>
        <Menuitem index="user"><i class="el-icon-user">个人中心</i></Menuitem>
      </div>
      <div slot="menu">
        <!-- 侧边导航栏 -->
        <Menuitem index="userinfo">用户信息</Menuitem>
        <Menuitem index="usermanger">用户管理</Menuitem>
        <Menuitem>主页</Menuitem>
        <Menuitem>主页</Menuitem>
        <Menuitem>主页</Menuitem>
        <Menuitem>主页</Menuitem>
      </div>
      <div slot="main">
        <router-view></router-view>
      </div>
      <div slot="footer">
        <h3>whl 练习</h3>
      </div>
    </Navmenu>
  </div>
</template>

<script>
  import navamenu from '../../components/NavaMenu/NavaMenu.vue'
  import menuitem from '../../components/NavaMenu/menuitem.vue'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      Navmenu: navamenu,
      Menuitem: menuitem
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
      exit(){
        this.$router.replace({
          path: "/login"
        });
        sessionStorage.setItem("isLogin",'false');
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
    updated() {
    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
</style>