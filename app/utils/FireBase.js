import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAnLjKCpJHq6zrIgXSPu8e2iuzFwCdqvv0",
  authDomain: "tenedores-7dd69.firebaseapp.com",
  databaseURL: "https://tenedores-7dd69.firebaseio.com",
  projectId: "tenedores-7dd69",
  storageBucket: "tenedores-7dd69.appspot.com",
  messagingSenderId: "245480900168",
  appId: "1:245480900168:web:8990befce5aa57b282ba7d",
  measurementId: "G-P29GJBFV47"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
