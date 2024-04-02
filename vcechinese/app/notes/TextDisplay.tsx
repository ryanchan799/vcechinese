import React from "react";

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
    <p className={`${props.className} font-bold text-[21px]`}>{props.text}</p>
  );
}

export function NumberedList(props: { text: string; className: string }) {
  const items = props.text.split("\n");

  function NumberTile(props: { number: number }) {
    return (
      <div className="flex items-center justify-center h-[19px] w-[19px] rounded-full text-[11px] text-[#6E6E7F] ml-10 mr-4 bg-[#ECECF1]">
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
