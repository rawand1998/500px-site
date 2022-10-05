import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
export const AuthContext = React.createContext();

function AuthProviders({ children }) {
  // const users = auth.currentUser;
  // console.log(users);
  const provider = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerApple = new OAuthProvider();
  // onAuthStateChanged=(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid,"rawandf hosam");
  //   } else {
  //     console.log("Erer");
  //   }
  // })
  const RegisterAuth = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password).then((res) => {
        const user = res.user;
        console.log(user, "user");
      });
    } catch (err) {
      console.error(err, "err");
    }
  };

  const LoginAuth =(email, password) => {
    try {
      auth.signInWithEmailAndPassword(email,password)
   
     console.log("data login");
      console.log("rawand hosam meay jaradh");
    } catch (err) {
      console.log(err, "err");
    }
  };
  const authWithApple = () => {
    signInWithPopup(auth, providerApple);
  };
  const authWithGoogle = (e) => {
    signInWithPopup(auth, provider);
  };
  const authWithFaceBook = () => {
    signInWithPopup(auth, providerFacebook);
  };

  return (
    <AuthContext.Provider
      value={{
        RegisterAuth,
        LoginAuth,
        authWithGoogle,
        authWithApple,
        authWithFaceBook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviders;
