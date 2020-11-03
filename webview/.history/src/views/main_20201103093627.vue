<!--
 * @Author: your name
 * @Date: 2020-11-01 17:40:45
 * @LastEditTime: 2020-11-03 08:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\views\main.vue
-->
<template>
  <div class="container-fiuled" style="height: 100%;">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" style="height:100%"/> -->
    <gatesNavbar style="height: 100%" />
    <div class="row" style="margin-top: 10px;">
      <div class="col" style="border: 1px black;">
      </div>
      <div class='col-5'>
        
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gatesNavbar from '@/components/gatesNavbar.vue'

export default {
  name: 'Home',
  components: {
    gatesNavbar
  }
}
</script>
