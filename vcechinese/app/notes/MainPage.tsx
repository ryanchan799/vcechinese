import React from "react";
import Contents from "./Contents";
import {
  DoubleContainer,
  NotesBox,
  NumberedList,
  PlainText,
  Subheading,
} from "./TextDisplay";
import { Lianhaoxiezuoyouduozhongyao } from "../_assets/Notes";
import AudioVisualiser from "./AudioWaveform";
import {
  HEADER_BAR_WIDTHS,
  NOTES_CONTENTS_WIDTH,
  PAGE,
} from "../_assets/Constants";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-row ${HEADER_BAR_WIDTHS.get(PAGE.NOTES)}`}>
        <Contents />
        <Document />
      </div>
    </div>
  );
}

function Document() {
  return (
    <div className="flex flex-row">
      <div
        className="flex-none mr-5"
        style={{ width: NOTES_CONTENTS_WIDTH }}
      ></div>
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
