import React from "react";
import { zhimangxing } from "../_assets/Fonts";
import Contents from "./Contents";
import Image from "next/image";
import ResourcesPromotion from "../../public/ResourcesPromotion.png";
import {
  NotesBox,
  NumberedList,
  PlainText,
  Subheading,
  TextDisplay,
} from "./TextDisplay";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-[1050px]">
        <Contents />
        <Document />
      </div>
      <ImagePromotion />
    </div>
  );
}

function Document() {
  return (
    <div className="flex flex-row">
      <DummyContents />
      <div>
        <Heading />
        <div className="text-[16.5px] font-light tracking-wider leading-[32px] py-16">
          <ul>{RenderParagraphs()}</ul>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div>
      <div className={zhimangxing.className}>
        <div className="text-[68px] font-bold font-serif -space-y-7 pt-14">
          <h1>练好</h1>
          <h1>写作有多重要</h1>
        </div>
      </div>
      <SimplifiedTraditionalToggle />
    </div>
  );
}

function RenderParagraphs() {
  const paragraphs: TextDisplay[] = [];

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "写作难吗？它的确难，且它的难度是客观存在的。每一次的写作，都是对我们综合能力的全方位考核。作文要想写得好，首先要有丰富的词汇储备、扎实的语言基础、敏捷的思维能力，要做到用词精确、结构合理、逻辑清晰，还要保证内容充分且详细，不可泛泛而谈。写作有多难由此可见一斑。我们的首要任务就是把写作给练好。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "numberedlist",
      "写作：决定成败的关键 \n重视写作，高分不再是梦 \n该怎么练？"
    )
  );

  paragraphs.push(new TextDisplay("subheading", "写作：决定成败的关键"));

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "VCE中文大致可划分为三大板块：SACs、口试、笔试。且不说六次SAC考试中就有两个直接考你作文，在年底最关键的口试和笔试中，写作更是占据了至关重要的位置。口试本质上是什么？它本质上是写作与口语相结合的产物。口试要想考得好，一定要准备得够充分，有可能会被问到的问题，我们都要提前一一写好答案，以确保在实战时能做到临危不惧、对答如流。而且不但要写，还要写得好，写得精彩。写到最后，字数过万也是正常的。要是写作不过关，口试真的能考好吗？只能说很难。口试，不只看你说得好不好，还要看你说了些什么。你的内容要有深度，用词要精准，语言的表达也要清晰。口试中的种种要求都离不开写作，要想考得好，写作要好，口语也要好，缺一不可。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "笔试更不用说了，写作绝对是重头戏。光是笔试中的两篇作文就占据了卷子将近一半的分数，其重要性不容小觑。写作要是不过关，扣分是必然的。内容不充分、用词不得当、语言不流畅、结构不合理、逻辑不清晰、作文不扣题，都是扣分的理由，亦是你做得不够好的地方。写作能力的不足，会让你在笔试中处处碰壁，尤其是两篇作文的双重压力下，写不好、写不快、写不完，都是常见的问题，亦是最致命的。而擅长写作的人，则能轻松应对，能在有限的时间里快速写出好的作文。可见练好了写作，能在笔试中为你带来强大的助力。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "notesbox",
      "在VCE中文里，写作的身影无处不在。要想考得好，写作是关键。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "写作的本质，是对综合能力的全方位考核。一篇好的作文，要做到用词精确、结构合理、内容充分、逻辑清晰、语言流畅。擅长写作的人，往往综合能力都很强，且词汇储备丰富、语言基础扎实、思维能力敏捷。而这些能力正是听力、阅读、口试等考试中，不可或缺的重要技能。写作要是练好了，听、说、读、写，都会变得容易许多，因为写作能力的提高，能带动整体综合能力的全面提升。久而久之，你会发现你的语言能力进步了许多，逻辑思维会变得更加敏锐，文字驾驭能力也更娴熟了。可见写作是很锻炼人的，能有效地强化各方面的能力。擅长写作的人，听、说、读、写，都能轻松搞定，VCE中文不再困难！"
    )
  );

  paragraphs.push(new TextDisplay("subheading", "重视写作，高分不再是梦"));

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "作文是最容易得分，亦是最容易丢分的部分。一篇作文写得好不好，只需看一眼，就能知道。优秀的作文，往往会在用词、结构、内容、逻辑、语言等方面，做得很好，能让读者眼前一亮。而差的作文，则是有挑不完的毛病。作文，是笔试的重中之重，也是最能拉开分数差距的关键部分，大家一定要高度重视起来。下面我们来看一下两个片段，分别取自两篇标题均为《我的十八岁生日》的记叙文。"
    )
  );

  paragraphs.push(new TextDisplay("subheading", "该怎么练？"));

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "练好写作有多重要，相信大家心里已经有了答案。写作要是不过关，就一定要多学、多写、多练，万万不可偷懒，只有经过系统的训练和反复的练习，才能快速提升写作能力。具体该怎么练呢？我认为要用科学且适合自己的方法，才能事半功倍。下面我来给大家分享一些我平时会用到的方法和技巧，希望能给大家带来帮助和启发。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "第一，做得不好的地方，逐个提高。第二，写完重写。第三，研究自己的写作套路。经过不断的练习，你的写作能力会变得越来越娴熟，你还会发现其实写好作文并没有想象中的那么困难。"
    )
  );

  return paragraphs.map((textdisplay, index) => {
    switch (textdisplay.type) {
      case "plaintext":
        return <PlainText text={textdisplay.text} className="py-2" />;
      case "subheading":
        return <Subheading text={textdisplay.text} className="pt-12 pb-1" />;
      case "numberedlist":
        return <NumberedList text={textdisplay.text} className="pt-2" />;
      case "notesbox":
        return <NotesBox text={textdisplay.text} className="py-6" />;
      default:
        return null;
    }
  });
}

function ImagePromotion() {
  return (
    <div className="fixed left-0 bottom-0 w-[330px] ml-24 mb-10">
      <Image src={ResourcesPromotion} alt="Raw 50 + 99.95 Resources" />
    </div>
  );
}

function DummyContents() {
  return <div className="flex-none w-[285px] mr-5"></div>;
}

function SimplifiedTraditionalToggle() {
  return (
    <div className="relative">
      <div className="absolute scale-75">
        <label className="flex cursor-pointer gap-1.5 items-center text-lg text-[#90939A] pt-1 -translate-x-4">
          <p>简</p>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <p>繁</p>
        </label>
      </div>
    </div>
  );
}
