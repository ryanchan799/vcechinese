import React from "react";

export default function TextLogo(props: { heading: string; caption: string }) {
  return (
    <div className="pr-[1px] text-black">
      <div className="flex items-center w-[285px] h-[75px] mr-5">
        <div className="inline-flex flex-col -space-y-[4px] -translate-y-[1px]">
          <p className="text-[24px] font-bold">{props.heading}</p>
          <p className="text-[9px] font-light tracking-[3.5px]">
            {props.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
