import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Contents = () => {
  const zuowen = contents.get("作文");

  return (
    <div className="fixed flex-none py-10 pt-16 font-light">
      <div className="flex flex-row justify-center">
        <VerticalLine />
        <div className="flex-none w-[270px]">
          <ul>
            {zuowen.map((topic: string, index: number) => (
              <Topic
                key={index}
                topic={topic}
                isSelected={topic == zuowen[1]}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function VerticalLine() {
  return <div className="flex-none w-[1px] bg-gray-200"></div>;
}

function Topic(props: { topic: string; isSelected: boolean }) {
  return (
    <div className="flex flex-row items-center">
      <div
        className={`flex-none w-[1px] -translate-x-[1px] mr-4 ${
          props.isSelected ? "bg-black h-[30.5px]" : ""
        }`}
      ></div>
      <div className="pr-14 truncate py-[3px]">
        <Link
          href="/forums"
          className={`text-[13px] hover:font-bold ${
            props.isSelected
              ? "text-black font-semibold"
              : "text-gray-500 opacity-70"
          }`}
        >
          {props.topic}
        </Link>
      </div>
    </div>
  );
}

const contents = new Map();

contents.set("作文", [
  "我是如何考到了满分 50 的",
  "VCE中文到底应该怎么做才能考高分应该怎么做才能能考高分",
  "作文的五大文体与七大格式",
  "写作文要写得准 写得好 写得快",
  "一分钟内写完开头段的窍门妙招",
  "如何快速地仅在一分钟内写完结尾",
  "展开内容如何做",
  "作文写得好 语言必须漂亮",
  "高分范文集",
  "我是如何考到了满分 50 的",
]);

export default Contents;
