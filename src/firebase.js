// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1_JT3p2MN2U25iqbeUFLk_WC0F29PE40",
  authDomain: "ecommerce-4c692.firebaseapp.com",
  projectId: "ecommerce-4c692",
  storageBucket: "ecommerce-4c692.appspot.com",
  messagingSenderId: "1022598396878",
  appId: "1:1022598396878:web:bf5f92c66ef6f350c4099f",
  measurementId: "G-RW5E0VHT7E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}