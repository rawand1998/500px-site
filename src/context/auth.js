import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = React.createContext();

function AuthProviders({ children }) {
  const provider = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerApple = new OAuthProvider();
  const [userName,setUserName]=useState('bhvbrfe')

  const RegisterAuth = async (email, password) => {
    try {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
      let email = res.user.email
      const result = email.split("@")[0];
       return setUserName(result)
      
      })
    } catch (err) {
      console.error(err, "err");
    }
  };
  console.log("","jhujjhu",userName);
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
        userName
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviders;
