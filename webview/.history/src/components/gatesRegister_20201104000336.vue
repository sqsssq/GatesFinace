<!--
 * @Author: your name
 * @Date: 2020-10-31 09:19:12
 * @LastEditTime: 2020-11-03 22:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\HelloWorld.vue
-->
<template>
  <div>
    <b-card
      border-variant="secondary"
      header="注册"
      header-border-variant="secondary"
      align="center"
      style="width: 300px;"
    >
      <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="loginData.username"
        >
        </el-input>
        <!-- <b-input-group
          prepend="密码"
          class="mt-3"
        >
          <b-form-input
            v-model="loginData.password"
            type="password"
          ></b-form-input>
        </b-input-group> -->
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-key"
          v-model="loginData.password"
          style="margin-top: 10px;"
          type="password"
        >
        </el-input>
        <!-- <b-button
          @click="login()"
          variant="outline-primary"
          style="width: 100px;"
        >登陆</b-button> -->
        <el-button type="primary" icon="el-icon-edit" round @click="login()" style="margin-top: 10px;">登陆</el-button>
        
    </b-card>

  </div>
</template>

<script>
import axios from 'axios';
import global from './Global.vue';
export default {
  name: 'gatesRegister',
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
        console.log(this.loginData);
        axios.post(path, this.loginData)
          .then((res) => {
            // console.log(res);
            if (res.data.status == true) {
              alert('登陆成功');
              this.$store.commit('setUserData', res.data);
              this.$router.push('/main')
            } else {
              alert("登录失败")
            }
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
<style scoped lang="stylus">

</style>
