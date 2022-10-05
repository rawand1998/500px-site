import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsiJMLyK-NDaURFsLD9dkj-dhljfY5AIk",
  authDomain: "px-9bcec.firebaseapp.com",
  projectId: "px-9bcec",
  storageBucket: "px-9bcec.appspot.com",
  messagingSenderId: "819825871643",
  appId: "1:819825871643:web:b250d69b6e687c393121be",
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebase;

export const db = getFirestore(app);
