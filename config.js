import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyB_qn4oKVWdam3OlepR-rOpEwYmSw4Q1ik",
  authDomain: "auth-otp-bb904.firebaseapp.com",
  projectId: "auth-otp-bb904",
  storageBucket: "auth-otp-bb904.appspot.com",
  messagingSenderId: "55986416052",
  appId: "1:55986416052:web:2fc039c516e33bce246ae1",
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
