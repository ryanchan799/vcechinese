"use client";
import Link from "next/link";
import { VerticalLine } from "../_assets/Icons";
import { NOTES_CONTENTS_WIDTH } from "../_assets/Constants";
import { useState } from "react";

export default function Contents(props: { setSelected: any }) {
  const zuowen: string[] = contents.get("作文");

  const [currTopic, setCurrTopic] = useState(firstTopic);

  return (
    <div className="fixed flex-none pl-5 py-10 pt-12 font-light">
      <div className="flex flex-row justify-center">
        <VerticalLine />
        <div className="flex-none" style={{ width: NOTES_CONTENTS_WIDTH }}>
          <ul>
            {zuowen.map((topic, index) => (
              <Topic
                key={index}
                topic={topic}
                isSelected={topic == currTopic}
                setSelected={props.setSelected}
                setCurrTopic={setCurrTopic}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Topic(props: {
  topic: string;
  isSelected: boolean;
  setSelected: any;
  setCurrTopic: any;
}) {
  return (
    <div className="flex flex-row items-center">
      <div
        className={`flex-none w-[1px] -translate-x-[1px] mr-4 ${
          props.isSelected ? "bg-black h-[27.5px]" : ""
        }`}
      ></div>
      <div className="pr-16 truncate py-[2px]">
        <button
          className={`text-[12.5px] hover:underline ${
            props.isSelected
              ? "text-black font-semibold"
              : "text-gray-500 opacity-85"
          }`}
          onClick={() => {
            props.setCurrTopic(props.topic);
            props.setSelected(props.topic == firstTopic);
          }}
        >
          {props.topic}
        </button>
      </div>
    </div>
  );
}

const contents = new Map();

contents.set("作文", [
  "练好写作有多重要",
  "写作的黄金三要素",
  "记叙文：你会写吗？",
  "说服文：怎样才能更有说服力？",
  "评估文：如何写出满分的作文？",
  "写作千万别踩的坑",
  "如何提升作文的语言水平",
  "历年试卷作文真题回顾",
  "作文题大合集",
  "口试：噩梦般的存在",
  "一般对话",
  "文化研究",
  "要想口试考得好 战略布局不可少",
  "一场心理战：口试的精神考验",
  "口试千万别踩的坑",
  "口试题大合集",
]);

const firstTopic = "练好写作有多重要";
