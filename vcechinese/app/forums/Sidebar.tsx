import React from "react";
import * as Icons from "../_assets/Icons";
import {
  COLORS,
  FORUMS_SIDEBAR_PADDING,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import { hexToRgba } from "../_assets/Utility";
import { FORUM_TOPIC } from "../_assets/Constants";

export default function Sidebar() {
  return (
    <div
      className={`fixed left-[0px] top-[130px] space-y-8 z-50 ${FORUMS_SIDEBAR_PADDING}`}
      style={{ width: FORUMS_SIDEBAR_WIDTH }}
    >
      <NewThreadButton />
      <QuickLinks />
      <TopicsList />
    </div>
  );
}

function NewThreadButton() {
  return (
    <div className="flex items-center gap-3">
      <button
        className="flex flex-row w-[65px] items-center justify-center rounded-md"
        style={{
          color: COLORS.BRIGHT_BLUE,
          borderColor: hexToRgba(COLORS.BRIGHT_BLUE, 0.9),
          borderWidth: "1px",
        }}
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
        <Topic key={index} topic={link} />
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
          <Topic key={index} topic={forumTopic} />
        );
      })}
    </div>
  );
}

function Topic(props: { topic: ForumTopic }) {
  return (
    <div className="flex flex-row items-center text-gray-700 fill-gray-700 opacity-80 gap-2 py-[3.6px]">
      {props.topic.fillIcon}
      <button className="text-[11.5px] tracking-[-0.15px] hover:underline">
        {props.topic.topic}
      </button>
    </div>
  );
}

export class ForumTopic {
  topic: string;
  color: string;
  fillIcon: JSX.Element;
  outlineIcon: JSX.Element;

  constructor(
    topic: string,
    color: string,
    fillIcon: JSX.Element,
    outlineIcon: JSX.Element
  ) {
    this.topic = topic;
    this.color = color;
    this.fillIcon = fillIcon;
    this.outlineIcon = outlineIcon;
  }
}

export function getTopicConfig(topic: string, c?: string) {
  const className = c == null ? "" : c;

  switch (topic) {
    case FORUM_TOPIC.ANNOUNCEMENTS:
      return new ForumTopic(
        topic.toString(),
        "#ED4146",
        <Icons.MegaphoneFillIcon className={className} />,
        <Icons.MegaphoneIcon className={className} />
      );
    case FORUM_TOPIC.GENERAL:
      return new ForumTopic(
        topic.toString(),
        "#F4AB36",
        <Icons.InfoFillIcon className={className} />,
        <Icons.InfoIcon className={className} />
      );
    case FORUM_TOPIC.ESSAYS:
      return new ForumTopic(
        topic.toString(),
        "#00A62A",
        <Icons.PenFillIcon className={className} />,
        <Icons.PenIcon className={className} />
      );
    case FORUM_TOPIC.ORAL:
      return new ForumTopic(
        topic.toString(),
        "#5536DA",
        <Icons.SoundwaveIcon className={className} />,
        <Icons.SoundwaveIcon className={className} />
      );
    case FORUM_TOPIC.SACS:
      return new ForumTopic(
        topic.toString(),
        "#0080FF",
        <Icons.FileFillIcon className={className} />,
        <Icons.FileIcon className={className} />
      );
    case FORUM_TOPIC.EXAMS:
      return new ForumTopic(
        topic.toString(),
        "#F4AB36",
        <Icons.LayersStackFillIcon className={className} />,
        <Icons.LayersStackIcon className={className} />
      );
    case FORUM_TOPIC.GRADES:
      return new ForumTopic(
        topic.toString(),
        "#ED4146",
        <Icons.GraduateFillIcon className={className} />,
        <Icons.GraduateIcon className={className} />
      );
    case FORUM_TOPIC.SOCIAL:
      return new ForumTopic(
        topic.toString(),
        "#00A62A",
        <Icons.DotsConnectionFillIcon className={className} />,
        <Icons.DotsConnectionIcon className={className} />
      );
    default:
      return new ForumTopic(
        topic.toString(),
        "#EF4146",
        <Icons.MegaphoneFillIcon className={className} />,
        <Icons.MegaphoneIcon className={className} />
      );
  }
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
