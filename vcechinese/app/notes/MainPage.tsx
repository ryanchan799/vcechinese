import React from "react";
import { zhimangxing } from "../_assets/Fonts";
import Contents from "./Contents";
import Image from "next/image";
import ResourcesPromotion from "../../public/ResourcesPromotion.png";
import {
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
          <h1>写作</h1>
          <h1>千万别踩的坑</h1>
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
      "写作：决定成败的关键 \n重视写作，高分不再是梦 \n该怎么练？ \n故事的情感 "
    )
  );

  paragraphs.push(new TextDisplay("subheading", "写作：决定成败的关键"));

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "VCE中文大致可划分为三大板块：SACs、口试、笔试。且不说六次SAC考试中就有两个直接考你作文，在年底最关键的口试和笔试中，写作更是占据了至关重要的位置。口试本质上是什么？它本质上是写作与口语相结合的产物。让我来给大家分析一下。口试要想考得好，离不开充分的准备，有可能会被问到的问题，我们都要提前一一写好答案，以确保在实战时能做到临危不惧、对答如流。而且不但要写，还要写得好，写得精彩。写到最后，字数过万也是很正常的。要是写作不过关，口试真的能考好吗？只能说很难。尤其是重点研究，写起来更难。在口试中被问到的问题无非就两种：要么是准备过的，要么是没有准备过的。而面对没准备过的问题时，需要灵活应变，短时间内要在脑子里构建成一个大致的框架，明确要表达的内容，并快速地组织语言、梳理信息、给出回答。这不就是写作吗？可见口试要想考得好，写作要好，口语要好，缺一不可。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "笔试更不用说了，写作绝对是重头戏。光是笔试中的两篇作文就占据了卷子将近一半的分数，其重要性不容小觑。写作要是不过关，扣分是必然的。内容不充分、用词不得当、语言不流畅、结构不合理、逻辑不清晰、作文不扣题，都是扣分的理由，亦是你做得不够好的地方。笔试中的两篇作文占据了将近一半的分数，要是写不出好的作文，少则扣十分，多则扣二十，甚至更多，代价相当沉重！在时间紧促的笔试中，应争分夺秒，然而写作要是不过关，就注定要花更久才能写完一篇作文，何况有两篇，留给听力和阅读的时间自然就少了许多，稍有不慎，时间就会不够用。这是我们最不愿意看到的，但却频频发生。反之，一旦练好了写作，不但能在更短的时间内快速写完作文，而且还写得好，写得精彩，从内容、语言、结构、逻辑等方面来看，都是高水准的。作文，是笔试的重中之重，毋庸置疑。"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "plaintext",
      "写作，是对综合能力的全方位考核。一篇好的作文，要做到用词精确、结构合理、内容充分、逻辑清晰、语言流畅。擅长写作的人，往往综合能力都很强，且词汇储备丰富、语言基础扎实、思维能力敏捷。而这些能力并不只限于写作，它们更是听力、阅读、口试等考试中，不可或缺的重要技能。写作要是练好了，听、说、读、写，都会变得容易许多，因为写作能力的提高，能带动整体综合能力的全面提升。久而久之，你的词汇储备会变得更加丰富，从前不熟悉的词汇也能轻松读懂并运用；你的逻辑思维也会变得更加敏锐，能迅速构建出清晰的思维框架，全面而透彻地剖析问题；你的文字驾驭能力更是会变得更强，能做到用词精准、表达清晰、文笔流畅。可见写作是很锻炼人的，且这种锻炼是多方面的。写作一旦练成，听、说、读、写，都能轻松搞定，VCE中文不再困难！"
    )
  );

  paragraphs.push(
    new TextDisplay(
      "note",
      "在VCE中文里，写作的身影可谓是无处不在。写作，是决定成败的关键。不但有两次SAC考试考作文，而且笔试中的两篇作文还占据了卷子将近一半的分数，就连口试也处处是写作的身影。写作要是练好了，便可轻松搞定VCE中文。"
    )
  );

  return paragraphs.map((textdisplay, index) => {
    switch (textdisplay.type) {
      case "plaintext":
        return <PlainText text={textdisplay.text} className="py-2.5" />;
      case "subheading":
        return <Subheading text={textdisplay.text} className="pt-9 pb-2" />;
      case "numberedlist":
        return <NumberedList text={textdisplay.text} className="py-2" />;
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
  return <div className="flex-none w-[270px] mr-5"></div>;
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
