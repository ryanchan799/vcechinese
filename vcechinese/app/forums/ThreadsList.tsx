import React from "react";
import { Divider, EllipsisIcon, SortUpDownIcon } from "../_assets/Icons";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import {
  FORUMS_LIST_HEADER_HEIGHT,
  FORUMS_LIST_WIDTH,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import { ProfilePictureSmall } from "./ProfilePicture";
import { getTopicConfig } from "./Sidebar";
import { formatTimeDifference } from "../_assets/Utility";
import { db } from "@/firebase";

export default async function ThreadsList() {
  const threads: DocumentData[] = await getDocs(collection(db, "threads")).then(
    (snapshot) => snapshot.docs.map((doc) => doc.data())
  );

  return (
    <div>
      <div
        className="border-l-[1px] border-r-[1px] border-gray-200 border-opacity-50 overflow-y-scroll scrollbar-none"
        style={{
          height: `calc(100vh - 74px)`,
          width: FORUMS_LIST_WIDTH,
          marginLeft: FORUMS_SIDEBAR_WIDTH,
        }}
      >
        <div className="grow font-light">
          <div>
            <div>
              <div className="sticky top-0 z-40">
                <StickyBar />
              </div>
              <div>
                <div>
                  {threads.map((thread, index) => (
                    <div key={index}>
                      {[...Array(1)].map((_, index) => (
                        <Row key={index} thread={thread} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyBar() {
  return (
    <div
      className="flex flex-row w-full items-center px-4 py-[9px] border-b-[1px] bg-white"
      style={{ height: `${FORUMS_LIST_HEADER_HEIGHT}px` }}
    >
      <div className="flex flex-grow items-center">
        <span className="text-[12px]">Threads</span>
        <span className="text-[8px] px-1.5 text-black text-opacity-70">
          April 2024
        </span>
        <div className="grow"></div>
        <div className="flex gap-3 opacity-70">
          <SortUpDownIcon className="w-3 h-3" />
          <EllipsisIcon className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

async function Row(props: { thread: DocumentData }) {
  return (
    <div>
      <div className="flex flex-row text-gray-700 pl-4 py-[14px] items-center">
        <Lhs thread={props.thread} />
        <div className="grow"></div>
        <Rhs thread={props.thread} />
      </div>
      <div className="pl-3">
        <Divider className="opacity-60" />
      </div>
    </div>
  );
}

function Lhs(props: { thread: DocumentData }) {
  const config = getTopicConfig(
    props.thread.topic,
    "fill-gray-400 opacity-90 w-3 h-3"
  );
  return (
    <div className="space-y-[7px]">
      <div className="flex items-center gap-2.5">
        {config.outlineIcon}
        <span
          className="text-[11.5px] w-[300px] truncate"
          style={{ fontWeight: 380, letterSpacing: "0.05px" }}
        >
          {props.thread.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[9.5px] font-bold"
          style={{ color: config.color }}
        >
          {props.thread.topic}
        </span>
        <span className="text-[9px] text-gray-800 pl-[1px]">
          {props.thread.poster}
        </span>
        <span className="text-[9px] text-gray-500 text-opacity-70">
          {formatTimeDifference(props.thread.date)}
        </span>
      </div>
    </div>
  );
}

function Rhs(props: { thread: DocumentData }) {
  return (
    <div className="mr-2 pt-[22px]">
      <ProfilePicStack interactors={props.thread.interactors} />
    </div>
  );
}

function ProfilePicStack(props: { interactors: string[] }) {
  return (
    <div className="flex flex-row space-x-[2px]">
      {props.interactors.map((user, index) => (
        <ProfilePictureSmall key={index} url={user} />
      ))}
    </div>
  );
}
