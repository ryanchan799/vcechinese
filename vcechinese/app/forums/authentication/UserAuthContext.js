"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const userAuthContext = createContext();

export function useUserAuth() {
  return useContext(userAuthContext);
}

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithRedirect(auth, googleAuthProvider);
  }

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          const ref = doc(db, "users", currentUser.uid);
          const snap = await getDoc(ref);

          if (!snap.exists()) {
            const data = {
              name: currentUser.displayName,
              email: currentUser.email,
              picture: currentUser.photoURL,
            };
            setDoc(doc(db, "users", currentUser.uid), data);
            console.log("Added new user to db", currentUser);
          }
        }

        setUser(currentUser);
      });
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logOut, googleSignIn }}>
      {children}
    </userAuthContext.Provider>
  );
}
