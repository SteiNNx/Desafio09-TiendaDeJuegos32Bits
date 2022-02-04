import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/** Import CSS Compilado y minificado */
import 'bootstrap/dist/css/bootstrap.min.css';
/** Import Javascript */
import 'bootstrap';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
