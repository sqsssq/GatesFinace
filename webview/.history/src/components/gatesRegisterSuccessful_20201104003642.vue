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
      style="width: 300px; margin-top: 50px;"
    >
        
        <el-button type="success" icon="el-icon-check" style="margin-top: 0px;" circle></el-button>
        <b-card-text>将在 {{ count }} 秒后<router-link to="/login">跳转</router-link></b-card-text>
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
      count: 5
    }
  },
  methods: {
    sendCode() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.count == 0) {
            clearInterval(this.timer);
            this.$router.push('/login');
          } else {
            this.count--;
          }
        }, 1000);
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
