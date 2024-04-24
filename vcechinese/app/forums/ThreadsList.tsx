import React from "react";
import {
  ThreadsIcon,
  Divider,
  MessageFillIcon,
  HeartFillIcon,
  MegaphoneIcon,
} from "../_assets/Icons";
import { ProfilePictureSmall } from "./ProfilePicture";
import numeral from "numeral";
import { DocumentData, Timestamp } from "firebase/firestore";
import { makeApiRequest } from "@/firebase";
import { getUsers } from "../api/users/route";
import { FORUMS_LIST_WIDTH, FORUMS_SIDEBAR_WIDTH } from "../_assets/Constants";

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
          {threads.map((thread, index) => (
            <div key={index}>
              {[...Array(12)].map((_, index) => (
                <Row
                  key={index}
                  title={thread.title}
                  topic={thread.topic}
                  date={thread.date}
                  users={thread.interactions.users}
                  numLikes={thread.numLikes}
                  numPosts={thread.interactions.posts.length}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function Row(props: {
  title: string;
  topic: string;
  date: Timestamp;
  users: string[];
  numLikes: number;
  numPosts: number;
}) {
  const [poster, ...interactors] = await getUsers(props.users);

  return (
    <div>
      <div className="flex flex-row text-gray-700 pl-4 py-[13px] items-center">
        <Lhs
          title={props.title}
          topic={props.topic}
          date={props.date}
          poster={poster}
          numLikes={props.numLikes}
          numPosts={props.numPosts}
        />
        <div className="grow"></div>
        <Rhs interactors={interactors} />
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
  poster: DocumentData;
  numLikes: number;
  numPosts: number;
}) {
  return (
    <div className="space-y-[7px]">
      <div className="flex items-center gap-2.5">
        <MegaphoneIcon className="fill-gray-400 opacity-90 w-3 h-3" />
        <p
          className="text-[11.8px]"
          style={{ fontWeight: 360, fontStretch: "98%" }}
        >
          {props.title}
        </p>
      </div>
      <div className="flex items-center gap-2" style={{ fontStretch: "95%" }}>
        <p className="text-[9.5px] font-bold text-[#EF4146]">{props.topic}</p>
        <div className="flex text-[9px] gap-0.5">
          <p className="text-gray-800 pl-[1px] pr-1">{props.poster.username}</p>
          <StatsDisplay
            icon={
              <MessageFillIcon className="w-[6px] h-[6px] -translate-y-[0.5px]" />
            }
            value={props.numPosts}
          />
          {props.numLikes == 0 ? null : (
            <StatsDisplay
              icon={<HeartFillIcon className="w-[6px] h-[6px]" />}
              value={props.numLikes}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Rhs(props: { interactors: DocumentData[] }) {
  return (
    <div className="flex flex-col items-end mr-2 space-y-1.5">
      <p className="text-[8px] text-gray-500 text-opacity-70 pr-[1px] -translate-y-[8px]">
        5m
      </p>
      {/* <ProfilePicStack interactors={props.interactors} /> */}
    </div>
  );
}

function ProfilePicStack(props: { interactors: DocumentData[] }) {
  return (
    <div className="flex flex-row space-x-[2px]">
      {/* {props.interactors.map((user, index) => (
        <ProfilePictureSmall/>
      ))} */}
    </div>
  );
}

function StatsDisplay(props: { icon: React.JSX.Element; value: number }) {
  return (
    <div className="flex flex-row items-center text-[8px] text-gray-800 pl-1 pr-[1px] gap-[3.5px]">
      <div className="opacity-30">{props.icon}</div>
      <p>
        {props.value > 999 ? numeral(props.value).format("0.0a") : props.value}
      </p>
    </div>
  );
}
