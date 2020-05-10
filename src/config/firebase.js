import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
  apiKey: "AIzaSyC_4Nc6dwnIp1_jNm4rWKCU2djKgxQRyyA",
  authDomain: "react-fb-boilerplate.firebaseapp.com",
  databaseURL: "https://react-fb-boilerplate.firebaseio.com",
  projectId: "react-fb-boilerplate",
  storageBucket: "react-fb-boilerplate.appspot.com",
  messagingSenderId: "974356619867",
  appId: "1:974356619867:web:a97aeb67ed3c11269e557e"
}

export const fbApp = firebase.initializeApp(config);
const fbFunctions = fbApp.functions();
const baseDb = fbApp.firestore();
export const db = baseDb;
