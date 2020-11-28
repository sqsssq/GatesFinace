<!--
 * @Author: your name
 * @Date: 2020-10-31 09:19:12
 * @LastEditTime: 2020-11-04 09:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\HelloWorld.vue
-->
<template>
  <div>
    
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">GATES FINACE TECHNOLOGY</el-menu-item>
  
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <el-submenu index="1200">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
</el-menu>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'gatesNavbar',
  // props: {
  //   msg: String
  // }
  data () {
    return {
      username: ''
    }
  },
  methods: {
    loginStatus () {
      if (JSON.parse(sessionStorage.getItem('userData')) != null) {
        console.log(JSON.parse(sessionStorage.getItem('userData')))
        console.log(typeof (this.$store.state.userData))

        let userData;
        if (typeof (this.$store.state.userData) == 'object') {
          userData = this.$store.state.userData;
        } else {
          userData = JSON.parse(this.$store.state.userData);
        }
        this.username = userData.username;
      }
    }
  },
  created () {
    // console.log(2);
    // this.getmsg();
    this.loginStatus();
  },
  mounted () {

    // this.createLogo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  letter-spacing: 3px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 15px;
}

h2 {
  margin-top: 10px;
  color: #fff;
  letter-spacing: 10px;
  // font-size: 40px
  font-size: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
