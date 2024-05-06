"use client";
import { auth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Login, { Logout } from "../forums/authentication/Login";

export default function AuthTesting() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
  }, []);
  return (
    <div>
      <Logout />
      <Login />
      {user ? user.displayName : "No user"}
    </div>
  );
}
