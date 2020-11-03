<!--
 * @Author: your name
 * @Date: 2020-10-31 09:19:12
 * @LastEditTime: 2020-11-03 22:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\HelloWorld.vue
-->
<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="/main">Gates Finace Technology</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item
            href="#"
            disabled
          >Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form style="padding-top: 2px">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <router-link to="/login">denglu</router-link>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ username == '' ? '登陆' : username }}</em>
            </template>
            <b-dropdown-item href="/login">登陆</b-dropdown-item>
            <b-dropdown-item href="#">注册</b-dropdown-item>
            <b-dropdown-item href="/logout">登出</b-dropdown-item>
            <b-dropdown-item href="#">实名认证</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
