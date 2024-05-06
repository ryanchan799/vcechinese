"use client";
import { useEffect, useState } from "react";
import { ProfilePictureBig } from "./ProfilePicture";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase";
import { ADMIN_USER } from "../_assets/Constants";
import Login, { Logout } from "./authentication/Login";

export function Rhs() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        loggedInCurrentUser = currentUser;
        currentUserIsAdmin = currentUser?.uid == ADMIN_USER;
      });
    };
  }, []);

  return (
    <div className="flex flex-grow items-center">
      <div className="flex flex-row items-end gap-2">
        <img src="/images/Wechat.jpg" alt="wechat" className="w-14 h-14" />
        <div className="flex flex-col items-start -space-y-0.5">
          <span className="text-[9px] text-gray-400">加我微信</span>
          <span className="text-[10px]">ryan03austrump</span>
        </div>
      </div>
      <div className="grow"></div>
      <div className="flex gap-4">
        <Logout />
        <Login />
        <span>{user ? user.displayName : "No user"}</span>
        {/* {user == null ? (
          <Login />
        ) : (
          <div className="flex flex-row items-center gap-5">
            <Logout />
            <ProfilePictureBig url={user.photoURL} />
          </div>
        )} */}
      </div>
    </div>
  );
}

export var loggedInCurrentUser: User | null = null;
export var currentUserIsAdmin = false;
