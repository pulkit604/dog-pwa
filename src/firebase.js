import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDxLmNtygKOsGEU7TCCsBcNI27kv_iZ3EY",
    authDomain: "smart-dog-monitor.firebaseapp.com",
    projectId: "smart-dog-monitor",
    storageBucket: "smart-dog-monitor.appspot.com",
    messagingSenderId: "889374748610",
    appId: "1:889374748610:web:7b38771914e8da8ae4705b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.messaging()
