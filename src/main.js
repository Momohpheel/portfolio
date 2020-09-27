import "core-js/stable";
import "regenerator-runtime/runtime";
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue} from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);


new Vue({
  render: h => h(App),
}).$mount('#app')
