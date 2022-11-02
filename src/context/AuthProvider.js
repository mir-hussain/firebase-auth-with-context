import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const handleOneClickAuth = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = { handleOneClickAuth };

  return (
    <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
  );
};

export default AuthProvider;
