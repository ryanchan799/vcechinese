import React from "react";
import Contents from "./Contents";
import Image from "next/image";
import ResourcesPromotion from "../../public/images/ResourcesPromotion.png";
import {
  DoubleContainer,
  NotesBox,
  NumberedList,
  PlainText,
  Subheading,
} from "./TextDisplay";
import { Lianhaoxiezuoyouduozhongyao } from "../_assets/Notes";
import AudioVisualiser from "./AudioWaveform";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-[1050px]">
        <Contents />
        <Document />
      </div>
    </div>
  );
}

function Document() {
  return (
    <div className="flex flex-row">
      <DummyContents />
      <div>
        <Heading />
        <div className="text-[16.5px] font-light tracking-wider leading-[32px] py-12 mb-28">
          <ul>{RenderParagraphs()}</ul>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div>
      <div>
        <div className="text-[68px] font-bold font-serif -space-y-7 pt-14 pb-5">
          <h1>练好</h1>
          <h1>写作有多重要</h1>
        </div>
      </div>
      <AudioVisualiser />
    </div>
  );
}

function RenderParagraphs() {
  return Lianhaoxiezuoyouduozhongyao.map((textdisplay, index) => {
    switch (textdisplay.type) {
      case "plaintext":
        return (
          <PlainText key={index} text={textdisplay.text} className="py-2" />
        );
      case "subheading":
        return (
          <Subheading
            key={index}
            text={textdisplay.text}
            className="pt-12 pb-1"
          />
        );
      case "numberedlist":
        return (
          <NumberedList key={index} text={textdisplay.text} className="pt-2" />
        );
      case "notesbox":
        return (
          <NotesBox key={index} text={textdisplay.text} className="py-6" />
        );
      case "doublecontainer":
        return (
          <DoubleContainer
            key={index}
            text={textdisplay.text}
            className="pt-14 pb-12"
          />
        );
      default:
        return null;
    }
  });
}

function DummyContents() {
  return <div className="flex-none w-[285px] mr-5"></div>;
}
