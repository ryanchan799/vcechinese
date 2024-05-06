"use client";
import React, { useState } from "react";
import {
  Divider,
  InfoIcon,
  LightBulbIcon,
  MagicIcon,
  PenIcon,
  RobotIcon,
  SoundwaveIcon,
} from "../_assets/Icons";
import Searchbar from "./Searchbar";
import { SpinnerLoader } from "../forums/SpinningLoader";

export default function Rhs() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col justify-end pl-16 h-screen w-full pb-12">
      <Heading />
      <Functions />
      <Searchbar
        question={question}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        setLoading={setLoading}
      />

      {loading ? (
        <div className="fixed top-[55px]">
          <SpinnerLoader />
        </div>
      ) : answer === "" ? null : (
        // Question & Answer Box
        <div className="fixed flex flex-col flex-none w-[650px] top-[55px] border-[0.5px] border-gray-300 rounded-md">
          <div className="bg-gray-500 text-black text-opacity-35 bg-opacity-10 text-[9px] px-3 py-1 border-b-[0.5px] border-gray-300 rounded-t-md">
            <div className="flex flex-row items-center gap-1.5 text-ellipsis">
              <RobotIcon className="w-2.5 h-2.5 flex-none" />
              <span className="truncate">{question}</span>
            </div>
          </div>
          <div className="px-10 py-5 text-[13px] font-light leading-[23px] tracking-[0.5px] bg-gray-50 rounded-b-md">
            {answer}
          </div>
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
        <Function
          key={index}
          heading={f[0]}
          subheading={f[1]}
          icon={functionIcons.get(f[0]) ?? placeholder}
        />
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
  ["Write an essay", "写作不再是难题，全智能的小助手随时为你助力！"],
  ["Polish my essay", "作文不够好？文字不够美？一键润色帮你轻松解决！"],
  ["Script my oral", "科技在手，口试竟变得如此简单！你离高分不远了。"],
  [
    "Explore study tips",
    "学习讲究方法，线上学习轻松又有趣，一切困难轻松解决！",
  ],
  ["Ask anything", "有想问的就快来问吧，答案都在这里哦！"],
];

const functionIcons = new Map([
  [
    "Write an essay",
    <PenIcon
      key="askai-pen"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Polish my essay",
    <MagicIcon
      key="askai-magic"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Script my oral",
    <SoundwaveIcon
      key="askai-soundwave"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Explore study tips",
    <LightBulbIcon
      key="askai-lightbulb"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
  [
    "Ask anything",
    <InfoIcon
      key="askai-info"
      className="w-2.5 h-2.5 flex-none translate-y-[4px]"
    />,
  ],
]);

const placeholder = <PenIcon key="askai-pen" className="" />;
