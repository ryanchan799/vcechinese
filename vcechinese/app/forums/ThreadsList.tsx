import React from "react";
import {
  Divider,
  MegaphoneIcon,
  EllipsisIcon,
  SortUpDownIcon,
} from "../_assets/Icons";
import { DocumentData, Timestamp } from "firebase/firestore";
import { makeApiRequest } from "@/firebase";
import {
  FORUMS_LIST_HEADER_HEIGHT,
  FORUMS_LIST_WIDTH,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import { ProfilePictureSmall } from "./ProfilePicture";
import { getTopicConfig } from "./Sidebar";

export default async function ThreadsList() {
  const threads: DocumentData[] = await makeApiRequest("threads", "GET").then(
    (res) => res.threads
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
                        <Row
                          key={index}
                          title={thread.title}
                          topic={thread.topic}
                          date={thread.date}
                          poster={thread.poster}
                          interactors={thread.interactors}
                        />
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

async function Row(props: {
  title: string;
  topic: string;
  date: Timestamp;
  poster: string;
  interactors: string[];
}) {
  return (
    <div>
      <div className="flex flex-row text-gray-700 pl-4 py-[14px] items-center">
        <Lhs
          title={props.title}
          topic={props.topic}
          date={props.date}
          poster={props.poster}
        />
        <div className="grow"></div>
        <Rhs interactors={props.interactors} />
      </div>
      <div className="pl-3">
        <Divider className="opacity-60" />
      </div>
    </div>
  );
}

function Lhs(props: {
  title: string;
  topic: string;
  date: Timestamp;
  poster: string;
}) {
  const config = getTopicConfig(
    props.topic,
    "fill-gray-400 opacity-90 w-3 h-3"
  );
  return (
    <div className="space-y-[7px]">
      <div className="flex items-center gap-2.5">
        {config.outlineIcon}
        <span
          className="text-[11.5px]"
          style={{ fontWeight: 380, letterSpacing: "0.05px" }}
        >
          {props.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[9.5px] font-bold"
          style={{ color: config.color }}
        >
          {props.topic}
        </span>
        <div className="flex text-[9px] gap-0.5">
          <span className="text-gray-800 pl-[1px] pr-1">{props.poster}</span>
        </div>
      </div>
    </div>
  );
}

function Rhs(props: { interactors: string[] }) {
  return (
    <div className="flex flex-col items-end mr-2 space-y-1.5">
      <span className="text-[8px] text-gray-500 text-opacity-70 pr-[1px] -translate-y-[8px]">
        5m
      </span>
      <ProfilePicStack interactors={props.interactors} />
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
