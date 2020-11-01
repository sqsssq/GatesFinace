<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

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
      const path = 'http://localhost:5000/';
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
    created () {
      this.getmsg();
    }
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
