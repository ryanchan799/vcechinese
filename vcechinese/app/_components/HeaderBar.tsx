import React from "react";
import TextLogo from "./TextLogo";
import { Divider } from "../_assets/Icons";

export default function HeaderBar(props: {
  heading: string;
  caption: string;
  rhs: React.JSX.Element;
  forumsThreadsList?: React.JSX.Element;
}) {
  const widths = new Map([
    ["Notes", "w-[1050px]"],
    ["Forums", "w-[100%] pl-20 pr-11"],
  ]);

  return (
    <div className="flex flex-col items-center">
      <div className={`${widths.get(props.heading)} bg-white`}>
        <div className="flex flex-row items-center">
          <TextLogo heading={props.heading} caption={props.caption} />
          {props.rhs}
        </div>
      </div>
      <Divider />
      {props.forumsThreadsList}
    </div>
  );
}
