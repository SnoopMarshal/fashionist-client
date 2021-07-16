import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzYiwYUUi29eeh2GmK0-6XpAg72F33QvE",
  authDomain: "little-tags-bb.firebaseapp.com",
  projectId: "little-tags-bb",
  storageBucket: "little-tags-bb.appspot.com",
  messagingSenderId: "74003956724",
  appId: "1:74003956724:web:2ea65df97b7c5a681a2fa1",
  measurementId: "G-20LP6H40ZS",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
