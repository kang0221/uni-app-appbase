import Vue from 'vue'
import App from './App'
import APIs from './api/API.js';
import { ApiList } from './common/constants.js';

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$hy_ajax = APIs.hy_ajax
Vue.prototype.$ApiList = ApiList

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
