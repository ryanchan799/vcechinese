import React from "react";
import TextLogo from "./TextLogo";
import { Divider } from "../_assets/Icons";

export default function HeaderBar(props: {
  heading: string;
  caption: string;
  rhs: React.JSX.Element;
}) {
  const widths = new Map([
    ["Notes", "w-[1050px]"],
    ["Forums", "w-[100%] pl-28 pr-11"],
  ]);

  return (
    <div className="flex flex-col items-center bg-white">
      <div className={widths.get(props.heading)}>
        <div className="flex flex-row items-center">
          <TextLogo heading={props.heading} caption={props.caption} />
          {props.rhs}
        </div>
      </div>
      <Divider />
    </div>
  );
}
