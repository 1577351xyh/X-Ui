import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import { router } from './config'

export const ComontRouters = [
  {
    path: "/",
    component: () => import("../layouts/index"),
  },
  {
    path: "/component",
    component: () => import("../layouts/main"),
    children: []
  }
]
router.forEach(vm => {
  ComontRouters[1].children = ComontRouters[1].children.concat(vm.children)
})

ComontRouters[1].children.forEach((vm, index) => {
  vm.component = () => import(`../md/${vm.path}.md`)
})

export default new Router({
  routes: ComontRouters
});