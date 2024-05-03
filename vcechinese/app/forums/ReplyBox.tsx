"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { FORUMS_TOOLBAR_NEW_REPLY } from "../_assets/Constants";
import { LockIcon, ThreadsIcon } from "../_assets/Icons";
import RichTextEditor from "./RichTextEditor";
import Login from "./authentication/Login";

export default function ReplyBox(props: { threadId: string }) {
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
      {user == null ? <Lock /> : null}
      <div
        className={`flex flex-col justify-start gap-2 min-h-[600px] ${
          user == null
            ? "cursor-not-allowed pointer-events-none opacity-45 pt-16"
            : ""
        }`}
      >
        <div id="reply-box" className="flex gap-2 pl-1.5">
          <ThreadsIcon className="w-4 h-4 fill-gray-400 opacity-85 translate-y-[4px]" />
          <span className="text-md">Write a reply</span>
        </div>
        <RichTextEditor
          toolbarId={FORUMS_TOOLBAR_NEW_REPLY}
          isNewThreadPost={false}
          threadId={props.threadId}
        />
      </div>
    </div>
  );
}

export function Lock() {
  return (
    <div className="flex flex-col gap-3 text-[11px]">
      <Login />
      <div>
        <div className="flex flex-row gap-1 items-center pb-1">
          <LockIcon className="w-2.5 h-2.5" />
          <span>
            The Ultimate Place to Supercharge Your VCE Chinese Studies. Sign in
            to post and reply.
          </span>
        </div>
      </div>
    </div>
  );
}
