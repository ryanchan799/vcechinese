import React from "react";
import {
  DotsConnectionFillIcon,
  DotsConnectionIcon,
  FileFillIcon,
  FileIcon,
  InfoFillIcon,
  InfoIcon,
  LayersStackFillIcon,
  LayersStackIcon,
  MegaphoneFillIcon,
  MegaphoneIcon,
  PenFillIcon,
  PenIcon,
  SoundwaveIcon,
  TrophyFillIcon,
  TrophyIcon,
  VerticalLine,
} from "../_assets/Icons";
import { FORUMS_SIDEBAR_WIDTH } from "../_assets/Constants";

export default function Sidebar() {
  return (
    <div
      className="flex flex-row h-screen"
      style={{ width: FORUMS_SIDEBAR_WIDTH }}
    >
      <div>
        {Object.values(FORUM_TOPIC).map((topic, index) => {
          const config = getTopicConfig(topic, "w-[12px] h-[12px]");
          return config == null ? null : (
            <Topic
              key={index}
              topic={topic}
              color={config.color}
              icon={config.fillIcon}
            />
          );
        })}
      </div>
      <div className="grow"></div>
      <VerticalLine />
    </div>
  );
}

function Topic(props: { topic: string; color: string; icon: JSX.Element }) {
  return (
    <div className="flex flex-row items-center text-gray-700 fill-gray-700 opacity-80 gap-2 py-[4px]">
      {props.icon}
      <button className="text-[11px] hover:underline">{props.topic}</button>
    </div>
  );
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

export class ForumTopic {
  color: string;
  fillIcon: JSX.Element;
  outlineIcon: JSX.Element;

  constructor(color: string, fillIcon: JSX.Element, outlineIcon: JSX.Element) {
    this.color = color;
    this.fillIcon = fillIcon;
    this.outlineIcon = outlineIcon;
  }
}

export function getTopicConfig(topic: FORUM_TOPIC, className: string) {
  switch (topic) {
    case FORUM_TOPIC.ANNOUNCEMENTS:
      return new ForumTopic(
        "#EF4146",
        <MegaphoneFillIcon className={className} />,
        <MegaphoneIcon className={className} />
      );
    case FORUM_TOPIC.GENERAL:
      return new ForumTopic(
        "#F4AB36",
        <InfoFillIcon className={className} />,
        <InfoIcon className={className} />
      );
    case FORUM_TOPIC.ESSAYS:
      return new ForumTopic(
        "#18C27D",
        <PenFillIcon className={className} />,
        <PenIcon className={className} />
      );
    case FORUM_TOPIC.ORAL:
      return new ForumTopic(
        "#5436DA",
        <SoundwaveIcon className={className} />,
        <SoundwaveIcon className={className} />
      );
    case FORUM_TOPIC.SACS:
      return new ForumTopic(
        "#19C2FF",
        <FileFillIcon className={className} />,
        <FileIcon className={className} />
      );
    case FORUM_TOPIC.EXAMS:
      return new ForumTopic(
        "#F4AB36",
        <LayersStackFillIcon className={className} />,
        <LayersStackIcon className={className} />
      );
    case FORUM_TOPIC.GRADES:
      return new ForumTopic(
        "#EF4146",
        <TrophyFillIcon className={className} />,
        <TrophyIcon className={className} />
      );
    case FORUM_TOPIC.SOCIAL:
      return new ForumTopic(
        "#18C27D",
        <DotsConnectionFillIcon className={className} />,
        <DotsConnectionIcon className={className} />
      );
    default:
      return null;
  }
}
