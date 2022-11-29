<template>
  <div>{{ sum }}天</div>

  <el-button type="primary">公共组件库地址</el-button>
  <el-button type="success">Success</el-button>
</template>
<script>
  import { defineComponent, onMounted, ref, computed } from 'vue'
  export default {
    setup() {
      let sum = computed(() =>
        parseInt((new Date('2021-06-13'.replace(/-/g, '/')).getTime() - new Date()) / (1000 * 3600 * 24))
      )
      return {
        sum
      }
    }
  }
</script>
