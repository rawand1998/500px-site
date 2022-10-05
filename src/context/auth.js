import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = React.createContext();

function AuthProviders({ children }) {
  const provider = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerApple = new OAuthProvider();

  const RegisterAuth = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.error(err, "err");
    }
  };

  // const LoginAuth = (email, password) => {
  //   try {
  //     auth.signInWithEmailAndPassword(email, password);

  //     console.log("data login");
  //     console.log("rawand hosam meay jaradh");
  //   } catch (err) {
  //     console.log(err, "err");
  //   }
  // };
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
        // LoginAuth,
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
