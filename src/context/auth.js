import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = React.createContext();

function AuthProviders({ children }) {
  const provider = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerApple = new OAuthProvider();
  const [userName, setUserName] = useState("");
  const [ifLogin, setIfLogin] = useState(false);
  const [idUser, setUserId] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIfLogin(true);
      setUserId(user.uid);
    }
  });
  const RegisterAuth = async (email, password) => {
    try {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
        let email = res.user.email;
        let result = email.split("@")[0];
        setIfLogin(true);
        setUserId(res.user.uid);
        setUserName(result);
        db.collection("user").add({
          user_id: res.user.uid,
          name: result,
        });
     
      });
    } catch (err) {
      console.error(err, "err");
    }
  };
  const getName = (id) => {
    console.log(id);
   
    try {
      db.collection("user")
        .where("user_id", "==", id)
        .get().then((res)=>console.log(res.docs.map((data)=>console.log(data,"data")),"res"))
      
    } catch (err) {
      console.log(err);
    }
  };
  const LoginAuth = (email, password) => {
    try {
      auth.signInWithEmailAndPassword(email, password).then((res) => {
        let email = res.user.email;
        let result = email.split("@")[0];
         setUserName(result);
      });
    } catch (err) {
      console.log(err, "err");
    }
  };
  const authWithApple = () => {
    signInWithPopup(auth, providerApple);
  };
  const authWithGoogle = () => {
    try{
      signInWithPopup(auth, provider);

    }catch(err){
      console.log(err);
    }
  };
  const authWithFaceBook = () => {
    signInWithPopup(auth, providerFacebook);
  };
  const logout = () => {
    auth.signOut();
    setIfLogin(false);
    
  };

  return (
    <AuthContext.Provider
      value={{
        RegisterAuth,
        LoginAuth,
        authWithGoogle,
        authWithApple,
        authWithFaceBook,
        userName,
        ifLogin,
        logout,
        getName,
        idUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviders;
