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
        <div className="grow">
          {threads.map((thread, index) => (
            <div key={index}>
              {[...Array(20)].map((_, index) => (
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
      <div className="flex flex-row text-gray-700 pl-4 py-[14px] items-center">
        <Lhs
          title={props.title}
          topic={props.topic}
          date={props.date}
          poster={poster}
        />
        <div className="grow"></div>
        <Rhs
          numLikes={props.numLikes}
          numPosts={props.numPosts}
          interactors={interactors}
        />
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
    <div className="space-y-[6px] py-0.5">
      <div className="flex items-center space-x-2">
        <ThreadsIcon className="fill-gray-400 opacity-80 w-3 h-3" />
        <p className="text-[11px]">{props.title}</p>
      </div>
      <p className="text-[9px] font-light">
        <span className="text-[#EF4146] font-bold">{props.topic}</span>
        <span className="px-2">{props.poster.name}</span>
        <span>5mth</span>
      </p>
    </div>
  );
}

function Rhs(props: {
  numLikes: number;
  numPosts: number;
  interactors: DocumentData[];
}) {
  return (
    <div className="flex flex-col items-end mr-2 space-y-3">
      <ProfilePicStack interactors={props.interactors} />

      <div className="flex flex-row items-center">
        {props.numPosts == 0 ? null : (
          <StatsDisplay
            icon={<MessageFillIcon className="w-[7px] h-[7px]" />}
            value={props.numPosts}
          />
        )}
        {props.numLikes == 0 ? null : (
          <StatsDisplay
            icon={<HeartFillIcon className="w-[7px] h-[7px]" />}
            value={props.numLikes}
          />
        )}
      </div>
    </div>
  );
}

function ProfilePicStack(props: { interactors: DocumentData[] }) {
  return (
    <div className="flex flex-row space-x-[2px]">
      {props.interactors.map((user, index) => (
        <ProfilePictureSmall
          key={index}
          color={user.color}
          letter={user.name.charAt(0)}
        />
      ))}
    </div>
  );
}

function StatsDisplay(props: { icon: React.JSX.Element; value: number }) {
  return (
    <div className="flex flex-row items-center text-[7.5px] text-gray-400 pl-2 pr-[1.5px] gap-[3.5px]">
      <div className="opacity-50">{props.icon}</div>
      <p>
        {props.value > 999 ? numeral(props.value).format("0.0a") : props.value}
      </p>
    </div>
  );
}
