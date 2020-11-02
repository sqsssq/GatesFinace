<!--
 * @Author: your name
 * @Date: 2020-10-31 09:19:12
 * @LastEditTime: 2020-11-01 13:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border:1px solid #c3c3c3;"
    >
      Your browser does not support the canvas element.
    </canvas>
    <h1>{{ msg }}</h1>
    <h3>----></h3>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getmsg () {
      // console.log(1);
      const path = 'http://localhost:5000/';
      axios.get(path)
        .then(res => {
          console.log(res.data);
          this.msg = res.data;
        })
        .catch(error => {
          console.log(error);
        })
      // console.log(this.msg)
    },
    createLogo () {
      var c = document.getElementById("myCanvas");
      var cxt = c.getContext("2d");
      var grd = cxt.createLinearGradient(0, 0, 175, 50);
      grd.addColorStop(0, "#FF0000");
      grd.addColorStop(1, "#00FF00");
      cxt.fillStyle = grd;
      cxt.fillRect(0, 0, 175, 50);
    }
  },
  created () {
    // console.log(2);
    this.getmsg();
    this.createLogo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

h1 {
  margin-top: 150px;
  color: #fff;
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
