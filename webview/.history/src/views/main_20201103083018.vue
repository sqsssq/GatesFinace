<!--
 * @Author: your name
 * @Date: 2020-11-01 17:40:45
 * @LastEditTime: 2020-11-03 08:30:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\views\main.vue
-->
<template>
  <div class="home" style="height: 100%">
    main
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" style="height:100%"/> -->
    <main style="height: 100%" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import main from '@/components/main.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    main
  }
}
</script>
