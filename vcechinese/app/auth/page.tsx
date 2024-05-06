"use client";
import React, { useEffect, useState } from "react";
import { UserAuthContextProvider } from "../forums/authentication/UserAuthContext";
import { auth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import Login, { Logout } from "../forums/authentication/Login";

export default function page() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
  }, []);

  return (
    <UserAuthContextProvider>
      <Logout />
      <Login />
      {user ? user.displayName : "No user"}
    </UserAuthContextProvider>
  );
}
