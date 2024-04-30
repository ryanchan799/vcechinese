"use client";
import { DocumentData } from "firebase/firestore";
import React from "react";
import { Divider } from "../_assets/Icons";
import { getTopicConfig, formatTimeDifference } from "../_assets/Utility";
import { ProfilePictureSmall } from "./ProfilePicture";
import Link from "next/link";

export default function ThreadsRow(props: { thread: DocumentData }) {
  return (
    <Link href={"/forums/" + props.thread.id}>
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
    </Link>
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
          className="text-[11.2px] w-[300px] text-left truncate"
          style={{ fontWeight: 380, letterSpacing: "0.05px" }}
        >
          {props.thread.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[9.3px] font-bold pt-[0.2px]"
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
