import React from "react";
import { HEADER_BAR_HEIGHT, HEADER_LOGO_WIDTH } from "../_assets/Constants";

export default function TextLogo(props: { heading: string; caption: string }) {
  return (
    <div className="pr-[1px] text-black">
      <div
        className="flex items-center mr-5"
        style={{ width: HEADER_LOGO_WIDTH, height: HEADER_BAR_HEIGHT }}
      >
        <div className="flex flex-col -space-y-[3px]">
          <span className="text-[22px] font-bold">{props.heading}</span>
          <span className="text-[9px] font-light tracking-[3.5px]">
            {props.caption}
          </span>
          <span
            className="text-[7px] font-light pt-[4px] tracking-[0.1px]"
            style={{ transform: "scaleX(1.07)", transformOrigin: "left" }}
          >
            MADE BY RYAN CHAN
          </span>
        </div>
      </div>
    </div>
  );
}
