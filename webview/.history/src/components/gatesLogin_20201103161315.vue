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
    <!-- <b-card
        border-variant="secondary"
        header="登陆"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card> -->
      
            <div class="card">
                <div class="card-header">
                    用户登陆
                </div>
                <div class="card-body">
                    <form method="post" action="LoginAction">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Username</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="staticEmail" value="${wrongname}" name="username">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" id="inputPassword" name="password">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Code</label>
                            <div class="col-sm-2" style="margin-top: 3px">
                                <img id="codeImg" src="Response02">
                            </div>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" id="inputWord" name="tcode">
                            </div>

                        </div>
                        <div style="text-align: center;">
                            <button class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
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
      username: ''
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
<style scoped lang="stylus">

</style>
