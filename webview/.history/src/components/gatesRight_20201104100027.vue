<!--
 * @Author: your name
 * @Date: 2020-11-04 09:33:19
 * @LastEditTime: 2020-11-04 09:58:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\gatesLeft.vue
-->
<template>
<div style="padding-left: 5px; padding-right: 15px;">
  <el-row>
    <el-col
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3773296791,1585961395&fm=26&gp=0.jpg"
          class="image"
        >
        <div style="padding: 14px;">
          <span>上海证券交易所
          </span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <!-- <el-button
              type="text"
              class="button"
            >操作按钮</el-button> -->
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    };
  }
}
</script>