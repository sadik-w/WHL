<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <!-- 这里面放logo -->
            <Icon type="logo-github" size="40" color="red" />
          </div>
          <!-- 下面放导航栏 -->
          <div class="layout-nav">
            <MenuItem name="1" to="/">
            Home
            </MenuItem>
            <MenuItem name="2" to="/grid">
            Grid
            </MenuItem>
            <MenuItem name="3" to="/anchor">
            Anchor
            </MenuItem>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-bulb-outline" />
                More
              </template>
              <MenuGroup title="其他功能">
                <MenuItem name="5-1" to="/button">Button</MenuItem>
                <MenuItem name="5-2" to="/collapse">Collapse</MenuItem>
                <MenuItem name="5-3" to="/list">List</MenuItem>
                <MenuItem name="5-4" to="/table">Table</MenuItem>
              </MenuGroup>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>{{s}}</BreadcrumbItem>
        </Breadcrumb>
        <transition mode="out-in" enter-active-class="animated fadeInLeftBig" leave-active-class="animated flipOutY">
          <router-view></router-view>
        </transition>
      </Content>
      <Footer class="layout-footer-center">2020 whl @spdb</Footer>
    </Layout>
  </div>
</template>
<script>

  export default {
    beforeCreate() {
      sessionStorage.setItem('bread', 'home');
    },
    updated() {
      var s = sessionStorage.getItem('bread');
      this.s = s
    },
    data() {
      return {
        theme1: 'dark',
        s: 'home'
      }
    }
  }
</script>
<style>
  @import 'https://unpkg.com/animate.css@3.5.2/animate.min.css';

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: fixed;
    border-radius: 4px;
    /* overflow: hidden; */
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 100px;
    margin: 0 auto;
    margin-right: 0px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>