import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const emailPassResister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPassLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const firebaseLogOut = () => {
    return signOut(auth);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    emailPassResister,
    emailPassLogin,
    user,
    firebaseLogOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
