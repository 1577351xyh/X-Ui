console.log(111111)
import Vue from 'vue'
import pathout from './layouts/pathOut.vue'
import router from '../utils/router'
// import '@/./style/common'
// import 'prismjs/themes/prism.css';
// import './index.js'
console.log(pathout)
console.log(2222)
new Vue({
  el: '#app',
  router,
  render: h => h(pathout),
})
