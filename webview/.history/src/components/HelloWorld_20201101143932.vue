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
    <br>
    <hr style="width:500px">
    <h2>
      FINANCE INVESTMENT WITH AI
    </h2>
    <hr style="width:500px">

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
      cxt.moveTo(10, 10);
      cxt.lineTo(150, 50);
      cxt.lineTo(10, 50);
      cxt.stroke();

    }
  },
  created () {
    // console.log(2);
    this.getmsg();
  },
  mounted () {
    
    this.createLogo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h2 {
  letter-spacing: 3px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
}

h1 {
  margin-top: 150px;
  color: #fff;
  letter-spacing: 10px;
  // font-size: 40px
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
