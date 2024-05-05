"use client";
import React, { useEffect, useState } from "react";
import Contents from "./Contents";
import {
  DoubleContainer,
  NotesBox,
  NumberedList,
  PlainText,
  Subheading,
} from "./TextDisplay";
import { Lianhaoxiezuoyouduozhongyao } from "../_assets/Notes";
import {
  HEADER_BAR_WIDTHS,
  NOTES_CONTENTS_WIDTH,
  PAGE,
} from "../_assets/Constants";
import AudioWaveform from "./AudioWaveform";
import { LockIcon } from "../_assets/Icons";

export default function MainPage() {
  const [selected, setSelected] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-row ${HEADER_BAR_WIDTHS.get(PAGE.NOTES)}`}>
        <Contents setSelected={setSelected} />
        <Document selected={selected} />
      </div>
    </div>
  );
}

function Document(props: { selected: boolean }) {
  return (
    <div className="flex flex-row">
      <DummyPadding />
      <div className={props.selected ? "" : "invisible"}>
        <Heading />
        <div className="text-[16.5px] font-light tracking-wider leading-[32px] py-12 mb-20">
          <ul>{RenderParagraphs()}</ul>
        </div>
      </div>
      <div
        className={`absolute text-[11px] flex-none ml-5 py-20 -z-50 ${
          props.selected ? "invisible" : ""
        }`}
        style={{ paddingLeft: NOTES_CONTENTS_WIDTH }}
      >
        <div className="flex flex-row gap-1 items-center pb-1">
          <LockIcon className="w-2.5 h-2.5" />
          <span>This page is under construction!</span>
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
      <AudioWaveform />
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

function DummyPadding() {
  return (
    <div
      className="flex-none mr-5"
      style={{ width: NOTES_CONTENTS_WIDTH }}
    ></div>
  );
}
