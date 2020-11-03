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
        <b-form-input></b-form-input>
      </b-input-group>
      <b-input-group
        prepend="密码"
        class="mt-3"
      >
        <b-form-input></b-form-input>
      </b-input-group>
      <br>
      <b-button variant="outline-primary">登陆</b-button>
    </b-card>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'gatesLogin',
  // props: {
  //   msg: String
  // }
  data () {
    return {
      username: '',
      passwoed: ''
    }
  },
  methods: {
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
