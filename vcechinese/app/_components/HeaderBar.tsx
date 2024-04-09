import React from "react";
import TextLogo from "./TextLogo";
import { Divider } from "../_assets/Icons";

export default function HeaderBar(props: {
  heading: string;
  caption: string;
  rhs: React.JSX.Element;
}) {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className={`flex flex-row w-[1050px] items-center`}>
        <TextLogo heading={props.heading} caption={props.caption} />
        {props.rhs}
      </div>
      <Divider />
    </div>
  );
}
