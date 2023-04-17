import Vue from 'vue'
import App from './App.vue'

// import jquery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
