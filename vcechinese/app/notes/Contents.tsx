import React from "react";

const Contents = () => {
  return (
    <div className="flex-none w-[270px] py-10">
      <ul>
        {Array.from(contents).map(([chapter, topics]) => (
          <div className="py-2 tracking-wide">
            <p className="text-xs font-bold py-2">{chapter}</p>
            {topics.map((topic: string) => (
              <p className="text-xs truncate px-4 py-1.5 text-gray-500">
                {topic}
              </p>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

const contents = new Map();

contents.set("前言", [
  "我是如何考到了满分 50 的",
  "VCE中文到底应该怎么做才能考高分",
  "作文的五大文体与七大格式",
  "写作文要写得准 写得好 写得快",
]);

contents.set("第一章：把作文写好的窍门妙招", [
  "我是如何考到了满分 50 的",
  "VCE中文到底应该怎么做才能考高分",
  "作文的五大文体与七大格式",
  "写作文要写得准 写得好 写得快",
  "一分钟内写完开头段的窍门妙招",
  "一分钟内写完结尾段的三大要素",
  "展开内容如何做",
  "作文写得好 语言必须漂亮",
  "高分范文集",
  "我是如何考到了满分 50 的",
]);

export default Contents;
