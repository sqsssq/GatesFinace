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
      header="注册成功"
      header-border-variant="secondary"
      align="center"
      style="width: 300px;"
    >
        
        <el-button type="sucess" icon="el-icon-check" style="margin-top: 10px;" circle=""></el-button>
        
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
        password: '',
        email: ''
      }
    }
  },
  methods: {
    login () {
      // console.log(this.loginData.username);
      // console.log(this.loginData.password);
      let _this = this;
      if (_this.loginData.username == '' || _this.loginData.password == '') {
        // alert('账号或密码不能为空');
      } else {
        const path = global.urlPath + '/register'
        console.log(this.loginData);
        axios.post(path, this.loginData)
          .then((res) => {
            // console.log(res);
            if (res.data.status == true) {
              // alert('登陆成功');
              this.$store.commit('setUserData', res.data);
              this.$router.push('/login')
            } else {
              alert("注册失败")
            }
          })
          .catch(error => {
            alert('注册失败');
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
