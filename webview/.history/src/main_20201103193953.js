import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/base.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/store.js'

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
