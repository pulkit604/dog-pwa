//firebase-messaging-sw.js

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

const app = firebase.initializeApp(firebaseConfig)

app.messaging().getToken({ vapidKey: 'BJeKRnjk-YRuK7XeYK1J78WvA-hkwsbMhZEv8YdDCSgw3t6b3hY2jvHIhvNYdsLCxw2QKHPcL8Ft9Uu9BXM29xk' })
.then((currentToken) => {
    if (currentToken) {
        console.log('client token', currentToken)
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
})
