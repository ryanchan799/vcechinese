"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useUserAuth } from "./UserAuthContext";

export default function Login() {
  const { user, logOut, googleSignIn } = useUserAuth();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      redirect("/forums");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-start gap-4 pt-7">
        <h2 className="mb-3">
          Current user: {user == null ? "N/A" : user.displayName}
        </h2>
        <button onClick={handleGoogleSignIn} className="font-bold">
          Sign in via Google
        </button>
        <button onClick={handleLogOut} className="font-bold">
          Log out
        </button>
      </div>
    </>
  );
}
