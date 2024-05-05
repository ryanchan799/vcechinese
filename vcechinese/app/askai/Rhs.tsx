"use client";
import React, { useState } from "react";
import {
  InfoIcon,
  LightBulbIcon,
  MagicIcon,
  PenIcon,
  SoundwaveIcon,
} from "../_assets/Icons";
import Searchbar from "./Searchbar";
import { SpinnerLoader } from "../forums/SpinningLoader";

export default function Rhs() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col justify-end pl-16 h-screen w-full pb-12">
      <Heading />
      <Functions />
      <Searchbar setAnswer={setAnswer} setLoading={setLoading} />

      {loading ? (
        <div className="fixed top-[55px]">
          <SpinnerLoader />
        </div>
      ) : answer === "" ? null : (
        <div className="fixed flex flex-row px-10 py-6 top-[55px] text-sm font-light w-[700px] leading-[24px] tracking-[0.8px] bg-gray-50 rounded-lg border-[0.5px] border-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}

function Heading() {
  return (
    <div className="text-[68px] font-bold font-serif -space-y-7 pb-8">
      <h1>有问必答</h1>
      <h1>全智能的超级小助手</h1>
    </div>
  );
}

function Functions() {
  return (
    <div className="flex flex-row gap-4 pb-8">
      {functions.map((f, index) => (
        <Function key={index} heading={f[0]} subheading={f[1]} icon={f[2]} />
      ))}
    </div>
  );
}

function Function(props: {
  heading: string;
  subheading: string;
  icon: JSX.Element;
}) {
  return (
    <div className="flex flex-row flex-none w-[150px] items-start gap-1.5">
      {props.icon}
      <div className="flex flex-col gap-0.5">
        <span className="text-[12px] font-semibold hover:underline">
          {props.heading}
        </span>
        <span className="text-[10px] tracking-wide text-gray-500 text-opacity-80">
          {props.subheading}
        </span>
      </div>
    </div>
  );
}

const functions = [
  [
    "Write an essay",
    "写作不再是难题，全智能的小助手随时为你助力！",
    <PenIcon
      key="askai-pen"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Polish my essay",
    "作文不够好？文字不够美？一键润色帮你轻松解决！",
    <MagicIcon
      key="askai-magic"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Script my oral",
    "科技在手，口试竟变得如此简单！你离高分不远了。",
    <SoundwaveIcon
      key="askai-soundwave"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Explore study tips",
    "学习讲究方法，线上学习轻松又有趣，一切困难轻松解决！",
    <LightBulbIcon
      key="askai-lightbulb"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Ask anything",
    "有想问的就快来问吧，答案都在这里哦！",
    <InfoIcon
      key="askai-info"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
];
