importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyDxLmNtygKOsGEU7TCCsBcNI27kv_iZ3EY",
    authDomain: "smart-dog-monitor.firebaseapp.com",
    projectId: "smart-dog-monitor",
    storageBucket: "smart-dog-monitor.appspot.com",
    messagingSenderId: "889374748610",
    appId: "1:889374748610:web:7b38771914e8da8ae4705b"
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log(payload)
})
