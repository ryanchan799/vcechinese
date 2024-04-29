"use client";
import React, { useState } from "react";
import * as Icons from "../_assets/Icons";
import {
  COLORS,
  FORUMS_SIDEBAR_PADDING,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import { ForumTopic, getTopicConfig, hexToRgba } from "../_assets/Utility";
import { FORUM_TOPIC } from "../_assets/Constants";
import NewThreadOverlay from "./NewThreadOverlay";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed left-[0px] top-[0px] pt-[130px] z-50 ${FORUMS_SIDEBAR_PADDING}`}
      style={{ width: FORUMS_SIDEBAR_WIDTH }}
    >
      <NewThreadButton setOpen={setOpen} />
      <div className="h-6"></div>
      <QuickLinks />
      <div className="h-6"></div>
      <TopicsList />
      {open ? <NewThreadOverlay setOpen={setOpen} /> : null}
    </div>
  );
}

function NewThreadButton(props: { setOpen: (arg0: boolean) => void }) {
  return (
    <div className="flex items-center gap-3">
      <button
        className="flex flex-row w-[65px] items-center justify-center rounded-md"
        style={{
          color: COLORS.BRIGHT_BLUE,
          borderColor: hexToRgba(COLORS.BRIGHT_BLUE, 0.9),
          borderWidth: "1px",
        }}
        onClick={() => props.setOpen(true)}
      >
        <div className="flex flex-row items-center text-[11px] gap-2 py-[3px] -translate-x-[1px]">
          <Icons.PlusIcon className="w-[8px] h-[8px]" />
          <span className="-tracking-[0.1px]">New</span>
        </div>
      </button>
      <div className="flex gap-0.5">
        <KeyTile character="⌘" size="text-[9px]" />
        <KeyTile character="K" size="text-[8.5px]" />
      </div>
    </div>
  );
}

function QuickLinks() {
  const links = [
    new ForumTopic(
      "Notes",
      "#111111",
      <Icons.NotesIcon className={size} />,
      <Icons.NotesIcon className={size} />
    ),
    new ForumTopic(
      "AskAI",
      "#111111",
      <Icons.RobotIcon className={size} />,
      <Icons.RobotIcon className={size} />
    ),
  ];

  return (
    <div>
      {links.map((link, index) => (
        <Topic key={index} topic={link} className="text-[11.5px] pl-2" />
      ))}
    </div>
  );
}

function TopicsList() {
  return (
    <div>
      {Object.values(FORUM_TOPIC).map((topic, index) => {
        const forumTopic = getTopicConfig(topic, size);
        return forumTopic == null ? null : (
          <Topic
            key={index}
            topic={forumTopic}
            className="text-[11.5px] pl-2"
          />
        );
      })}
    </div>
  );
}

function Topic(props: { topic: ForumTopic; className: string }) {
  return (
    <div className="flex flex-row items-center text-gray-700 fill-gray-700 opacity-80 py-[3.6px]">
      {props.topic.fillIcon}
      <button
        className={`tracking-[-0.15px] hover:underline ${props.className}`}
      >
        {props.topic.topic}
      </button>
    </div>
  );
}

function KeyTile(props: { character: string; size: string }) {
  return (
    <div
      className="flex min-w-[12px] h-[12px] items-center justify-center rounded-sm px-[1px] opacity-30"
      style={{
        color: COLORS.BRIGHT_BLUE,
        borderColor: hexToRgba(COLORS.BRIGHT_BLUE, 0.9),
        borderWidth: "1px",
      }}
    >
      <span className={`${props.size}`}>{props.character}</span>
    </div>
  );
}

const size = "w-[12px] h-[12px]";
