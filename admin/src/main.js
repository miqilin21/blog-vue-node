import Vue from "vue";
import App from "./App.vue";
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './style.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

import http from "./http";
Vue.prototype.$http = http;

Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')