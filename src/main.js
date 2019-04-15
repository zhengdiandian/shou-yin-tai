import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icons from './components/icons.vue'
import icons2 from './components/icons2.vue'
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import 'vant/lib/index.css'
import { Tab, Tabs, DatetimePicker, Picker, Popup, Dialog } from 'vant'
Vue.config.productionTip = false
Vue.component('icons', icons)
Vue.component('icons2', icons2)
Vue.use(Tab).use(Tabs).use(DatetimePicker).use(Picker).use(Popup).use(Dialog)
Vue.component('uniNavBar', uniNavBar)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
