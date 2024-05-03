import React from "react";
import { LaptopIcon } from "../_assets/Icons";

export default function SmallDevices() {
  return (
    <div
      className="flex flex-col gap-2 w-screen h-screen items-center justify-center text-center"
      style={{ fontWeight: 330 }}
    >
      <span className="text-xs pt-28">
        The Ultimate Place to Supercharge Your VCE Chinese Studies
      </span>
      <span className="text-[10px] text-gray-500">
        Made by Ryan Chan — Raw 50 CSL + 99.95 ATAR
      </span>
      <div className="flex gap-2 pt-48 items-center">
        <LaptopIcon className="w-3 h-3" />
        <span className="text-[10px] text-gray-500">View on desktop</span>
      </div>
    </div>
  );
}
