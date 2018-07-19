import Vue from 'vue'
import App from './App.vue'
import zircle from 'zircle'
import 'zircle/dist/zircle.css'
Vue.use(zircle)
Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
