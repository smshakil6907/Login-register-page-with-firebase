import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const name = "kakuda pagal";

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribed();
    };
  }, []);

  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log("currently logged user", currentUser);
  //     } else {
  //       console.log("No user logged in ");
  //     }
  //   });

  const authInfo = {
    name,
    user,
    auth,
    createUser,
    signInUser,
    signOutUser,
    loading,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
