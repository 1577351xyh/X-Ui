<template>
  <div class="containav-right">
    <ul>
      <li class="title">导航</li>
      <li v-for="(item, index) in data" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      requier: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scope>
.containav-right {
  > ul {
    margin: 16px 0;
    padding-left: 0;
    font-size: 12px;
    padding-left: 26px;
    list-style: none;
    border-left: 1px solid #f0f0f0;
    > li {
      text-align: left;
      margin-left: 0;
      padding-left: 0;
      line-height: 1.5;
      list-style: none;
      cursor: pointer;
      font-size: 14px;
    }
    .title {
      color: #1989fa;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
}
</style>
