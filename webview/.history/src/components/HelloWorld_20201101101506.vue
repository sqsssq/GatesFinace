<!--
 * @Author: your name
 * @Date: 2020-10-31 09:19:12
 * @LastEditTime: 2020-11-01 10:15:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>sss</h1>

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
      console.log(1);
      const path = 'http://127.0.0.1:5000/';
      axios.get(path)
        .then(res => {
          console.log(res.data);
          this.msg = res.data;
        })
        .catch(error => {
          console.log(error);
        })
      console.log(this.msg)
    },
  },
  created () {
    // console.log(2);
    this.getmsg();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
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
