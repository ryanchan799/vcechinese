"use client";
import React from "react";
import { MoonFillIcon } from "../_assets/Icons";
import { PAGE, RESOURCES } from "../_assets/Constants";
import { openInNewTab } from "../_assets/Utility";

export default function NavigationBar(props: { tab: PAGE }) {
  return (
    <div className="flex flex-row text-[11px] py-0.5 translate-y-[7.5px]">
      <div className="grow"></div>
      <div className="flex flex-row pr-8 items-center">
        <MoonFillIcon className="h-2.5 w-2.5 mr-3.5 fill-black hover:fill-[#9437FF]" />
        {Object.values(PAGE).map((tab, index) =>
          tab == props.tab.toString() ? null : <Text key={index} text={tab} />
        )}
      </div>
    </div>
  );
}

export function Text(props: { text: string }) {
  return (
    <div className="px-2.5 py-[2px]">
      {props.text === PAGE.RESOURCES.toString() ? (
        <button onClick={() => openInNewTab(RESOURCES)}>
          <div className="hover:underline">{props.text}</div>
        </button>
      ) : (
        <a
          href={"/" + props.text.toLowerCase()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover:underline">{props.text}</div>
        </a>
      )}
    </div>
  );
}
