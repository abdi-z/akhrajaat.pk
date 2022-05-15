import firebase from "firebase/app";

import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAVgrMmSJgnWLHXWXOZ62qLNbbV9QIrK6A",
  authDomain: "akhrajaat-de70f.firebaseapp.com",
  projectId: "akhrajaat-de70f",
  storageBucket: "akhrajaat-de70f.appspot.com",
  messagingSenderId: "531601913356",
  appId: "1:531601913356:web:3a469d011a2b16d3eca029",
};

firebase.initializeApp(firebaseConfig);

//ini every individual service

const projectFireStore = firebase.firestore();
const projectAuth= firebase.auth()

export { projectFireStore, projectAuth };
