import React from "react";
import { MoonFillIcon } from "../_assets/Icons";

export default function NavigationBar(props: { tab: string }) {
  return (
    <div className="flex flex-row text-[11px] py-0.5 translate-y-2">
      <div className="grow"></div>
      <div className="flex flex-row pr-8 items-center">
        <MoonFillIcon className="h-2.5 w-2.5 mr-3.5 fill-black hover:fill-[#9437FF]" />
        {tabs.map((tab, index) =>
          tab == props.tab ? null : <Text key={index} text={tab} />
        )}
      </div>
    </div>
  );
}

export const tabs = ["Notes", "Forums", "AskAI", "Resources", "Tutoring"];

function Text(props: { text: string }) {
  return (
    <div className="px-2.5 py-[2px]">
      <a href={props.text.toLowerCase()}>
        <div className="hover:underline">{props.text}</div>
      </a>
    </div>
  );
}
