import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAMrZwi2wXTS23gWF1pIaNtk0edGJGRiVc",
  authDomain: "px-40649.firebaseapp.com",
  projectId: "px-40649",
  storageBucket: "px-40649.appspot.com",
  messagingSenderId: "487268744806",
  appId: "1:487268744806:web:e2c0c1f1951fdfc838b7a7",
});
const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseConfig);
export { db, auth, storage };
