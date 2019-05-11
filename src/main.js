import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

window.eventHub = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
