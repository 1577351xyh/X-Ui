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
      console.log(index)
      let obj = {}
      let name = ''
      let path = ''
      if (index !== -1) {
        path = this.$router.options.routes[1].children[index].path
        name = this.$router.options.routes[1].children[index].name
      }
      return (obj = { name, path })
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
    padding-left: 30px;
    padding-top: 8px;
    h2 {
      line-height: 32px;
      margin-bottom: 20px;
    }
    h5 {
      line-height: 26px;
    }
    p {
      line-height: 32px;
    }
    pre {
      line-height: 1.4;
      background-color: rgb(40, 44, 52);
      padding: 1.25rem 1.5rem;
      margin: 0.85rem 0px;
      border-radius: 6px;
      overflow: auto;
      color: #fff;
    }
    .token.operator {
      color:#fff;
       background: transparent
    }
    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      span {
        cursor: pointer;
      }
    }
  }
  .right-nav {
    width: 200px;
  }
}
</style>
