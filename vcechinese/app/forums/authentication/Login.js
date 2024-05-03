"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useUserAuth } from "./UserAuthContext";
import { GoogleIcon } from "@/app/_assets/Icons";

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

  return (
    <div>
      <button onClick={handleGoogleSignIn}>
        <div className="flex flex-row items-center gap-2.5 outline outline-gray-600 outline-[1px] rounded-md px-4 py-2 hover:scale-[101%]">
          <GoogleIcon className="w-3 h-3" />
          <span className="text-xs" style={{ fontWeight: 370 }}>
            Sign in via Google
          </span>
        </div>
      </button>
    </div>
  );
}

export function Logout() {
  const { user, logOut, googleSignIn } = useUserAuth();

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
    <div>
      <button
        onClick={handleLogOut}
        className="text-[11px] text-black opacity-90 hover:underline"
      >
        Sign out
      </button>
    </div>
  );
}
