import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDsiJMLyK-NDaURFsLD9dkj-dhljfY5AIk",
  authDomain: "px-9bcec.firebaseapp.com",
  projectId: "px-9bcec",
  storageBucket: "px-9bcec.appspot.com",
  messagingSenderId: "819825871643",
  appId: "1:819825871643:web:b250d69b6e687c393121be",
});
const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseConfig);
export { db, auth, storage };
