import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyDxLmNtygKOsGEU7TCCsBcNI27kv_iZ3EY",
  authDomain: "smart-dog-monitor.firebaseapp.com",
  projectId: "smart-dog-monitor",
  storageBucket: "smart-dog-monitor.appspot.com",
  messagingSenderId: "889374748610",
  appId: "1:889374748610:web:7b38771914e8da8ae4705b"
};
firebase.initializeApp(firebaseConfig)
firebase.messaging().usePublicVapidKey("BJeKRnjk-YRuK7XeYK1J78WvA-hkwsbMhZEv8YdDCSgw3t6b3hY2jvHIhvNYdsLCxw2QKHPcL8Ft9Uu9BXM29xk")
navigator.serviceWorker.register('../public/firebase-messaging-sw.js').then(resgistration => {
  firebase.messaging().useServiceWorker(resgistration)
})
new Vue({
  render: h => h(App),
}).$mount('#app')
