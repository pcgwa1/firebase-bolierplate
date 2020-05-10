import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "react-fb-boilerplate",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

export const fbApp = firebase.initializeApp(config);
const fbFunctions = fbApp.functions();
const baseDb = fbApp.firestore();
export const db = baseDb;
