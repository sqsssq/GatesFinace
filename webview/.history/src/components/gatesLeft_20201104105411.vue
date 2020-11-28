<!--
 * @Author: your name
 * @Date: 2020-11-04 09:33:19
 * @LastEditTime: 2020-11-04 09:58:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webview\src\components\gatesLeft.vue
-->
<template>
  <div style="padding-left: 18px; padding-right: 5px;">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <!-- <template slot="title"><i class="el-icon-message"></i>债券产品</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>产品导购</template>
            <!-- <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>债券收益</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<style>
.time {
  font-size: 13px;
  /* color: #999; */
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

.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  line-height: 60px;
}

.el-aside {
  /* color: #333; */
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