import React from "react";
import {
  ThreadsIcon,
  Divider,
  MessageFillIcon,
  HeartFillIcon,
} from "../_assets/Icons";
import { ProfilePictureSmall } from "./ProfilePicture";
import numeral from "numeral";
import { DocumentData, Timestamp } from "firebase/firestore";
import { makeApiRequest } from "@/firebase";
import { getUsers } from "../api/users/route";

export default async function ThreadsList() {
  const threads: DocumentData[] = await makeApiRequest("threads", "GET").then(
    (res) => res.threads
  );

  return (
    <div>
      <div
        className="ml-[290px] w-[345px] border-l-[1px] border-r-[1px] border-gray-200 border-opacity-50 overflow-y-scroll scrollbar-none"
        style={{ height: `calc(100vh - 74px)` }}
      >
        <div className="grow">
          {threads.map((thread) => {
            return (
              <Row
                key={thread.id}
                title={thread.title}
                topic={thread.topic}
                date={thread.date}
                users={thread.posts.users}
              />
            );
          })}
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
}) {
  const [poster, ...interactors] = await getUsers(props.users);

  return (
    <div>
      <div className="flex flex-row text-gray-700 pl-4 py-[14px] items-center">
        <Lhs
          title={props.title}
          topic={props.topic}
          date={props.date}
          poster={poster}
        />
        <div className="grow"></div>
        <Rhs />
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
}) {
  return (
    <div className="space-y-1.5 font-light">
      <div className="flex items-center space-x-2">
        <ThreadsIcon className="fill-gray-400 opacity-80 w-3 h-3" />
        <p className="text-[11.5px]">{props.title}</p>
      </div>
      <p className="text-[8.5px]">
        <span className="text-[#EF4146] font-bold">{props.topic}</span>
        <span className="px-2">{props.poster.name}</span>
        <span>5mth</span>
      </p>
    </div>
  );
}

function Rhs() {
  return (
    <div className="flex flex-col items-end mr-2 space-y-2.5">
      <ProfilePicStack />
      <div className="flex flex-row items-center">
        <StatsDisplay
          icon={<MessageFillIcon className="w-1.5 h-1.5" />}
          value={132}
        />
        <StatsDisplay
          icon={<HeartFillIcon className="w-1.5 h-1.5" />}
          value={20}
        />
      </div>
    </div>
  );
}

function ProfilePicStack() {
  return (
    <div className="flex flex-row space-x-[2px]">
      <ProfilePictureSmall color="#344ABB" letter="A" />
      <ProfilePictureSmall color="#AAAA11" letter="R" />
      <ProfilePictureSmall color="#AC88F4" letter="M" />
      <ProfilePictureSmall color="#AAAA11" letter="R" />
      <ProfilePictureSmall color="#AC88F4" letter="M" />
    </div>
  );
}

function StatsDisplay(props: { icon: React.JSX.Element; value: number }) {
  return (
    <div className="flex flex-row items-center text-[7.5px] text-gray-400 opacity-80 pl-2 gap-[2.5px]">
      {props.icon}
      <p>
        {props.value > 999 ? numeral(props.value).format("0.0a") : props.value}
      </p>
    </div>
  );
}
