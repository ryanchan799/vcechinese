"use client";
import React from "react";
import { PAGE, RESOURCES } from "../_assets/Constants";
import { openInNewTab } from "../_assets/Utility";
import TextLogo from "../_components/TextLogo";
import { MoonFillIcon } from "../_assets/Icons";

export default function Lhs() {
  return (
    <div className="flex flex-col flex-grow w-[200px] h-full pt-10 border-r-[0.5px] border-gray-300 border-opacity-80">
      {/* Logo */}
      <div className="relative">
        <TextLogo heading={"Ask"} caption={"为你专属打造的学习利器"} />
        <span className="absolute top-[21px] left-[45px] text-gray-800 text-[9px] scale-x-[108%]">
          AI
        </span>
      </div>

      {/* Links */}
      <div className="flex flex-col py-8 text-[12.5px] -space-y-[2px] items-start">
        {Object.values(PAGE).map((tab, index) =>
          tab === PAGE.ASKAI ? null : tab === PAGE.RESOURCES ? (
            <button key={index} onClick={() => openInNewTab(RESOURCES)}>
              <div className="hover:underline">{tab}</div>
            </button>
          ) : (
            <a
              href={"/" + tab.toLowerCase()}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="hover:underline">{tab}</div>
            </a>
          )
        )}
      </div>
      <div className="grow"></div>
      <div className="flex flex-row items-end gap-2 mb-14">
        <img src="/images/Wechat.jpg" alt="wechat" className="w-14 h-14" />
        <div className="flex flex-col items-start -space-y-0.5">
          <span className="text-[9px] text-gray-400">加我微信</span>
          <span className="text-[10px]">ryan03austrump</span>
        </div>
      </div>
      {/* <MoonFillIcon className="h-3 w-3 mb-14 fill-black hover:fill-[#9437FF]" /> */}
    </div>
  );
}
