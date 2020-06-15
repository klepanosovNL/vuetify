import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB7AZ00bQn3mOzMAB66VYspF5v3XfE8gDU',
      authDomain: 'fb-ads-klp.firebaseapp.com',
      databaseURL: 'https://fb-ads-klp.firebaseio.com',
      projectId: 'fb-ads-klp',
      storageBucket: 'fb-ads-klp.appspot.com',
      messagingSenderId: '1051507405564',
      appId: '1:1051507405564:web:bbe3985d5cd0bf010b9d79',
      measurementId: 'G-SRF6B1ZL8V'
    })
    // firebase.analytics();
  }
})
