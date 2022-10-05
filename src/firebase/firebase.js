import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDsiJMLyK-NDaURFsLD9dkj-dhljfY5AIk",
  authDomain: "px-9bcec.firebaseapp.com",
  projectId: "px-9bcec",
  storageBucket: "px-9bcec.appspot.com",
  messagingSenderId: "819825871643",
  appId: "1:819825871643:web:b250d69b6e687c393121be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
