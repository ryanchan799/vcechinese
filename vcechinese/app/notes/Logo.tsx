import React from "react";

export default function Logo() {
  return (
    <div className="pr-[1px] text-black">
      <div className="flex items-center w-[285px] h-[75px] mr-5">
        <div className="inline-flex flex-col -space-y-[4px] -translate-y-[1px]">
          <p className="text-[24px] font-bold">Notes</p>
          <p className="text-[9px] font-light tracking-[3.5px]">
            帮你轻松搞定你最不擅长的一科
          </p>
        </div>
      </div>
    </div>
  );
}
