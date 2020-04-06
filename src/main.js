import Vue from 'vue'
import App from './App.vue'
import router from '../utils/router.js'
import '../style/common.css'
Vue.config.productionTip = false
import 'prismjs/themes/prism.css';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
