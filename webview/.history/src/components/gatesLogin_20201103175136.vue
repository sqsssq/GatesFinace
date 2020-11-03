<!--
 * @Author: your name
 * @Date: 2020-10-31 09:19:12
 * @LastEditTime: 2020-11-03 08:32:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\HelloWorld.vue
-->
<template>
  <div>
    <b-card
      border-variant="secondary"
      header="登陆"
      header-border-variant="secondary"
      align="center"
    >
      <!-- <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text> -->
      <b-input-group
        prepend="邮箱"
        class="mt-3"
      >
        <b-form-input v-model="loginData.username"></b-form-input>
      </b-input-group>
      <b-input-group
        prepend='<i class="el-icon-edit"></i>'
        class="mt-3"
      >
        <b-form-input v-model="loginData.password" type="password"></b-form-input>
      </b-input-group>
      <br>
      <b-button
        @click="login()"
        variant="outline-primary"
        style="width: 100px;"
      >登陆</b-button>
    </b-card>

  </div>
</template>

<script>
import axios from 'axios';
import global from './Global.vue'
export default {
  name: 'gatesLogin',
  // props: {
  //   msg: String
  // }
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // console.log(this.loginData.username);
      // console.log(this.loginData.password);
      let _this = this;
      if (_this.loginData.username == '' || _this.loginData.password == '') {
        alert('账号或密码不能为空');
      } else {
        const path = global.urlPath + '/login'
        axios.post(path, this.loginData)
        .then((res) => {
          console.log(res);
        })
      }
    }
  },
  created () {
    // console.log(2);
    // this.getmsg();
  },
  mounted () {

    // this.createLogo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
