<template>
  <div class="main-menu-inner">
    <ul>
      <li v-for="(item, index) in routers" :key="index">
        <p class="main-menu-title">{{ item.title }}</p>
        <div
          class="nav-item"
          v-for="(itemChildren, index) in item.children"
          @click="Go(item.path + '/' + itemChildren.path)"
          :key="index"
        >
          {{ itemChildren.name || '' }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { router } from '../../utils/config.js'
import { uuid } from '../../utils/common.js'

export default {
  data() {
    return {}
  },
  methods: {
    Go(path) {
      this.$router.push(path)
    },
  },
  computed: {
    routers() {
      return router
    },
  },
}
</script>
<style lang="less" scope>
.main-menu-inner {
  height: 100%;
  margin-top: 10px;
  max-height: 100vh;
  overflow: hidden;
  min-width: 260px;
  border-right: 1px solid #dcdfe6;
  > ul {
    min-height: 100vh;
    li {
      p {
        padding-left: 80px;
      }
      div {
        padding-left: 100px;
        text-align: left;
      }
    }
  }
  .main-menu-title {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    text-align: left;
    text-decoration: none;
    display: block;
    position: relative;
    transition: 0.15s ease-out;
    cursor: pointer;
    font-weight: 700;
  }
  .nav-item {
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }
  .nav-item:hover {
    color: #409eff;
  }
}
</style>
