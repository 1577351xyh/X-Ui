<template>
  <div class="main-cnt">
    <!-- 左侧导航栏 -->
    <leftNav></leftNav>
    <div class="content" ref="content">
      <router-view></router-view>
      <div>底部前进后退</div>
    </div>
    <right-nav class="right-nav" :data="navArr"></right-nav>
    <!-- 右侧导航栏 -->
  </div>
</template>
<script>
import leftNav from './componentView/main-menu.vue'
import rightNav from './componentView/rightNav'
export default {
  data() {
    return {
      navArr: [],
    }
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        this.navArr = []
        this.createdDom()
      })
    },
  },
  methods: {
    createdDom() {
      let el = this.$refs.content.querySelector('.markdown')
      if (el.getElementsByTagName('h3')) {
        let navArr = el.getElementsByTagName('h3')
        console.log(navArr)
        navArr.forEach((vm) => {
          this.navArr.push(vm.innerText)
        })
      }
    },
  },
  mounted() {
    this.createdDom()
  },
  components: {
    leftNav,
    rightNav,
  },
}
</script>
<style lang="less" scope>
.main-cnt {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .content {
    flex-grow: 1;
    text-align: left;
  }
  .right-nav {
    width: 200px;
  }
}
</style>
