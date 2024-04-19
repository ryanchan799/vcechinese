import React from "react";
import * as Icons from "../_assets/Icons";
import { COLORS, FORUMS_SIDEBAR_WIDTH } from "../_assets/Constants";

export default function Sidebar() {
  return (
    <div
      className="flex flex-row h-screen"
      style={{ width: FORUMS_SIDEBAR_WIDTH }}
    >
      <div className="pl-[11px] py-[30px] space-y-8">
        <NewThreadButton />
        <QuickLinks />
        <TopicsList />
      </div>
      <div className="grow"></div>
      <Icons.VerticalLine />
    </div>
  );
}

function NewThreadButton() {
  return (
    <div className="flex flex-row w-[70px] items-center justify-center gap-1.5 rounded-md">
      <Icons.PlusIcon className={size} />
      <p className="text-xs">New</p>
    </div>
  );
}

function QuickLinks() {
  const links = [
    new ForumTopic(
      "All threads",
      "#111111",
      <Icons.ListIcon className={size} />,
      <Icons.ListIcon className={size} />
    ),
    new ForumTopic(
      "My activity",
      "#111111",
      <Icons.CalendarIcon className={size} />,
      <Icons.CalendarIcon className={size} />
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
      <button className="text-[11.8px] tracking-[-0.15px] hover:underline">
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

export enum FORUM_TOPIC {
  ANNOUNCEMENTS = "Announcements",
  GENERAL = "General",
  ESSAYS = "Essays",
  ORAL = "Oral",
  SACS = "SACs",
  EXAMS = "Exams",
  GRADES = "Grades",
  SOCIAL = "Social",
}

export function getTopicConfig(topic: FORUM_TOPIC, className: string) {
  switch (topic) {
    case FORUM_TOPIC.ANNOUNCEMENTS:
      return new ForumTopic(
        topic.toString(),
        "#EF4146",
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
        "#18C27D",
        <Icons.PenFillIcon className={className} />,
        <Icons.PenIcon className={className} />
      );
    case FORUM_TOPIC.ORAL:
      return new ForumTopic(
        topic.toString(),
        "#5436DA",
        <Icons.SoundwaveIcon className={className} />,
        <Icons.SoundwaveIcon className={className} />
      );
    case FORUM_TOPIC.SACS:
      return new ForumTopic(
        topic.toString(),
        "#19C2FF",
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
        "#EF4146",
        <Icons.GraduateFillIcon className={className} />,
        <Icons.GraduateIcon className={className} />
      );
    case FORUM_TOPIC.SOCIAL:
      return new ForumTopic(
        topic.toString(),
        "#18C27D",
        <Icons.DotsConnectionFillIcon className={className} />,
        <Icons.DotsConnectionIcon className={className} />
      );
    default:
      return null;
  }
}

const size = "w-[13px] h-[13px]";
