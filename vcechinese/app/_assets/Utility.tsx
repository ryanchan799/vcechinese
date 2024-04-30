import { Timestamp } from "firebase/firestore";
import { FORUM_TOPIC } from "./Constants";
import * as Icons from "../_assets/Icons";

export function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function formatTimeDifference(timestamp: Timestamp) {
  const currentTimestamp = Date.now();
  const timestampMilliseconds =
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
  const timeDifference = currentTimestamp - timestampMilliseconds;

  if (timeDifference < 60 * 1000) {
    return "Now";
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutes = Math.floor(timeDifference / (60 * 1000));
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (timeDifference < 4 * 7 * 24 * 60 * 60 * 1000) {
    const weeks = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (timeDifference < 52 * 7 * 24 * 60 * 60 * 1000) {
    const months = Math.floor(timeDifference / (4 * 7 * 24 * 60 * 60 * 1000));
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    const date = new Date(timestampMilliseconds);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString("en-US", options);
  }
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
