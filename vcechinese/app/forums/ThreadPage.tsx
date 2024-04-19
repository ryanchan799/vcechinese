import React from "react";
import { ProfilePictureBigger, ProfilePictureTiny } from "./ProfilePicture";
import { HeartIcon } from "../_assets/Icons";
import {
  COLORS,
  FORUMS_SIDEBAR_WIDTH,
  HEADER_BAR_WIDTHS,
  PAGE,
} from "../_assets/Constants";
import { FORUM_TOPIC, getTopicConfig } from "./Sidebar";
import Tags from "./Tags";
import { hexToRgba } from "../_assets/UtilityFunctions";

export default function ThreadPage() {
  return (
    <div className={HEADER_BAR_WIDTHS.get(PAGE.FORUMS)}>
      <div
        className="flex flex-row font-light"
        style={{ marginLeft: FORUMS_SIDEBAR_WIDTH }}
      >
        <ThreadsConversation />
        <div className="w-full pt-14 px-10 space-y-8">
          <PopularThreads />
          <NewestThreads />
        </div>
      </div>
    </div>
  );
}

function ThreadsConversation() {
  const config = getTopicConfig(FORUM_TOPIC.ANNOUNCEMENTS, "w-[18px] h-[18px]");
  const icon = config == null ? null : config.outlineIcon;

  return (
    <div className="flex-none w-[641px] mx-16 py-[50px]">
      <div className="pb-8">
        <div className="flex flex-row items-center gap-3.5 pb-1.5">
          {icon}
          <p className="text-[23px] tracking-[0.8px]">
            Welcome to VCE Chinese Forums!
          </p>
        </div>
        <Tags tags={["writing", "作文", "essays", "vce-chinese"]} />
      </div>
      <div className="flex flex-row items-center gap-2">
        <ProfilePictureBigger color="#FFAC00" letter="A" />
        <div>
          <p className="text-[12.5px] text-[#D87252]">Antonio192</p>
          <p className="text-[9px]">
            <span className="text-gray-400">5 months ago in </span>
            <span className="text-[#EF4146] font-bold">Announcements</span>
          </p>
        </div>
      </div>
      <div className="text-[12.5px] ml-[50px] py-3 space-y-3.5">
        <p>
          Hi all, apologies for the delay. After much back and forth with the
          Grok team, the marks for the Haskell portion of Assignment 2 are now
          available on Grok. Please let us know if there are any problems.
        </p>
        <p>
          EDIT: For some reason (Grok bug?), you will need to click "Load" in
          the list of your submissions at the bottom of the page to see your
          scorecard.
        </p>
        <p>
          VCE中文大致可划分为三大板块：SACs、口试、笔试。且不说六次SAC考试中就有两个直接考你作文，在年底最关键的口试和笔试中，写作更是占据了至关重要的位置。口试本质上是什么？它本质上是写作与口语相结合的产物。
        </p>
      </div>
    </div>
  );
}

const threads = [
  "How do I refresh a page using Javascript?",
  "How do I modify the URL without reloading the page",
  "When to use JSX.Element vs ReactNode vs ReactElement",
  "What are the three dots in React doing?",
  "Scroll to the top of the page using Javascript?",
  "Get the size of the screen, current web page and browser window",
  "React-router URLs don't work when refreshing or writing manually",
];

function PopularThreads() {
  return (
    <div>
      <Header title="Popular threads" />
      {threads.map((thread, index) => (
        <div className="flex py-[3px]">
          <div className="flex flex-row flex-none w-[55px] justify-end gap-[1.5px] translate-y-[2px] overflow-visible">
            <ProfilePictureTiny color="#FFAC00" letter="S" />
            <ProfilePictureTiny color="#6EE8D8" letter="A" />
            <ProfilePictureTiny color="#7B8D56" letter="S" />
            <ProfilePictureTiny color="#065F46" letter="S" />
            <ProfilePictureTiny color="#11E693" letter="S" />
          </div>
          <Row thread={thread} index={index} />
        </div>
      ))}
    </div>
  );
}

function NewestThreads() {
  return (
    <div>
      <Header title="Newest threads" />
      {threads.map((thread, index) => (
        <div className="flex py-[3px]">
          <div className="flex flex-none w-[55px] justify-center text-[8px] text-gray-500 opacity-80 translate-y-[2px]">
            10m ago
          </div>
          <Row thread={thread} index={index} />
        </div>
      ))}
    </div>
  );
}

function Row(props: { thread: string; index: number }) {
  return (
    <div
      key={props.index}
      className="w-[72%] text-[11px] leading-[15.5px] pl-3"
      style={{ color: COLORS.DULL_BLUE }}
    >
      {props.thread}
    </div>
  );
}

function Header(props: { title: string }) {
  return (
    <div className="flex items-center pb-4">
      <p className="text-[13.5px]">{props.title}</p>
      <div className="grow"></div>
    </div>
  );
}
