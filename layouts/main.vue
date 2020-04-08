<template>
  <div class="main-cnt">
    <!-- 左侧导航栏 -->
    <leftNav></leftNav>
    <div class="content" ref="content">
      <router-view></router-view>
      <div class="footer">
        <span @click="go(routerFooter[1].path)">{{
          routerFooter[1].name || ''
        }}</span>
        <span @click="go(routerFooter[0].path)">{{
          routerFooter[0].name || ''
        }}</span>
      </div>
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
      routerIndex: '',
      routerFooter: [],
    }
  },
  created() {
    this.createdFooter()
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        this.routerFooter = []
        this.navArr = []
        this.createdDom()
        this.createdFooter()
      })
    },
  },
  methods: {
    createdFooter() {
      let cuurrPuoter = this.$router.currentRoute.path
      this.$router.options.routes[1].children.forEach((vm, index, arr) => {
        if (cuurrPuoter.indexOf(vm.path) > -1) {
          this.routerIndex = index
          if (index + 1 !== arr.length) {
            this.routerFooter.push(this.obj(index + 1), this.obj(index - 1))
          } else {
            this.routerFooter.push(this.obj(-1), this.obj(index - 1))
          }
        }
      })
    },
    go(path) {
      this.$router.push(path)
    },
    obj(index) {
      let obj = {}
      if (index === -1) {
        return (obj = {
          path: '',
          name: '',
        })
      }
      return (obj = {
        path: this.$router.options.routes[1].children[index].path,
        name: this.$router.options.routes[1].children[index].name,
      })
    },
    createdDom() {
      if (this.$refs.content) {
        let el = this.$refs.content.querySelector('.markdown')
        if (el && el.getElementsByTagName('h3')) {
          let navArr = el.getElementsByTagName('h3')
          navArr.forEach((vm) => {
            this.navArr.push(vm.innerText)
          })
        }
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
    margin: 10px;
    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
  }
  .right-nav {
    width: 200px;
  }
}
</style>
