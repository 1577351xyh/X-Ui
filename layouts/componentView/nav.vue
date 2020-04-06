<template>
  <header>
    <div class="container">
      <div class="container-left">
        <!-- <img src="/assets/logo.jpeg" alt="" /> -->
        <a href="">X-Ui</a>
      </div>
      <div class="container-right">
        <!-- <a href="">组件</a> -->
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scope>
header {
  height: 80px;
  background-color: #fff;
  color: #1989fa;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
  .container {
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
    max-width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container-left {
      height: 100%;
      align-items: center;
      display: flex;
      > img {
        width: 60px;
        height: 60px;
      }
      a {
        font-size: 26px;
      }
    }
    .container-right {
      height: 100%;
      display: flex;
      a {
        width: 60px;
      }
    }
    .gitIcon {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      > svg {
        color: #409eff;
        font-size: 34px;
      }
    }
  }
}
</style>
