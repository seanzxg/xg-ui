import Vue from 'vue';
import App from './App';
import Xg from 'main/index.js'
import VueRouter from 'vue-router';
import Home from './Home'
Vue.use(VueRouter)
Vue.use(Xg)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
new Vue({
  router,
  render: h=>h(App)
}).$mount('#app');
