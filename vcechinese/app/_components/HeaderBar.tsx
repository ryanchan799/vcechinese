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
    ["Forums", "w-[1350px]"],
  ]);

  const ThreadsList = () => props.forumsThreadsList;

  return (
    <div className="flex flex-col w-full items-center overflow-visible">
      <div className={widths.get(props.heading)}>
        <div className="w-full h-[75.5px]">
          <div>
            <div className="flex flex-row items-center bg-white">
              <TextLogo heading={props.heading} caption={props.caption} />
              {props.rhs}
            </div>
          </div>
          <ThreadsList />
        </div>
      </div>
      <Divider />
    </div>
  );
}
