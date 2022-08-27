import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index'
import store from '@/store/index'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion/]


Vue.filter('sellerIdFilter', (sellerId)=>{
    return sellerId.substring(21);
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
