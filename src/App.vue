<template>
  <router-view />
  <el-button type="primary">公共组件库地址</el-button>
  我是公用组件<br />
  值:{{ tip }}<br />
  <avue-input v-model="tip" placeholder="请输入内容"></avue-input>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, computed } from 'vue'
  export default {
    setup() {
      const tip = ref('我是内容')
      return {
        tip
      }
    }
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
