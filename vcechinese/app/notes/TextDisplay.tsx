import React from "react";
import { InfoIcon } from "../_assets/Icons";

export class TextDisplay {
  type: string;
  text: string;

  constructor(type: string, text: string) {
    this.type = type;
    this.text = text;
  }
}

export function PlainText(props: { text: string; className: string }) {
  return <p className={props.className}>&emsp;&emsp;{props.text}</p>;
}

export function Subheading(props: { text: string; className: string }) {
  return (
    <div className={props.className}>
      <p className="font-bold text-[18px]">{props.text}</p>
    </div>
  );
}

export function NumberedList(props: { text: string; className: string }) {
  const items = props.text.split("\n");

  function NumberTile(props: { number: number }) {
    return (
      <div className="flex items-center justify-center h-[20px] w-[20px] rounded-full text-[11px] text-gray-600 ml-10 mr-5 bg-gray-200 opacity-80">
        {props.number}
      </div>
    );
  }

  return (
    <div className={props.className}>
      <ul className="-space-y-[2px]">
        {items.map((text, index) => {
          return (
            <div key={index} className="flex flex-row items-center">
              <NumberTile number={index + 1} />
              <p>{text}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export function NotesBox(props: { text: string; className: string }) {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center">
        <div className="flex flex-row drop-shadow-[10px]">
          <div className="w-2 bg-gray-300 opacity-70"></div>
          <div className="flex flex-row items-center px-6 py-3 space-x-5 bg-gray-100 bg-opacity-50 text-gray-600 text-opacity-80">
            <InfoIcon />
            <p className="text-[16px]">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
