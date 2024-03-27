import Link from "next/link";

const Contents = () => {
  const zuowen = contents.get("作文");

  return (
    <div className="fixed flex-none pl-5 py-10 pt-12 font-light">
      <div className="flex flex-row justify-center">
        <VerticalLine />
        <div className="flex-none w-[270px]">
          <ul>
            {zuowen.map((topic: string, index: number) => (
              <Topic
                key={index}
                topic={topic}
                isSelected={topic == zuowen[0]}
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
          props.isSelected ? "bg-black h-[27.5px]" : ""
        }`}
      ></div>
      <div className="pr-16 truncate py-[2px]">
        <Link
          href="/forums"
          className={`text-[12.5px] hover:font-bold ${
            props.isSelected
              ? "text-black font-semibold"
              : "text-gray-500 opacity-85"
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
  // "把写作练好有多重要？",
  // "写作的黄金三要素",
  // "怎样才能写好一篇记叙文",
  // "把评估文和说服文写好的窍门妙招",
  // "论点该如何论证？",
  // "写作千万别踩的坑",
  // "如何提升作文的语言水平",
  // "历年试卷作文真题回顾",
  // "菜就多练",
  // "优秀范文精选",
  "口试：噩梦般的存在",
  "一般对话",
  "文化研究",
  "要想口试考得好 战略布局不可少",
  "在口试当中好的作答是什么样子的",
  "一场心理战：口试的精神考验",
  "稿子要怎样才能背熟？",
  "口试千万别踩的坑",
  "刁钻无比的题 你答得上来多少",
  "口试虽难但绝非主角",
  // "作文题大合集",
  // "口试题大合集",
  // "模考卷大合集",
]);

export default Contents;
