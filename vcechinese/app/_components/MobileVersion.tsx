import React from "react";
import { LaptopIcon } from "../_assets/Icons";

export default function MobileVersion() {
  return (
    <div className="fixed visible md:invisible flex flex-col w-full h-screen justify-center items-center gap-20 -z-50">
      <div className="flex flex-row items-center gap-1.5">
        <LaptopIcon className="w-2.5 h-2.5" />
        <span className="text-[10px] font-light">
          Use desktop version for the most optimal experience.
        </span>
      </div>

      <div className="flex flex-row items-end gap-2">
        <img src="/images/Wechat.jpg" alt="wechat" className="w-14 h-14" />
        <div className="flex flex-col items-start -space-y-0.5">
          <span className="text-[9px] text-gray-400">加我微信</span>
          <span className="text-[10px]">ryan03austrump</span>
        </div>
      </div>
    </div>
  );
}
