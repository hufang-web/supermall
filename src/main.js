import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'components/common/toast/index.css'
import Toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。

Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
