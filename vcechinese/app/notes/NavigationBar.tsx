import Link from "next/link";
import React from "react";
import { MoonFillIcon } from "../_assets/Icons";

const NavigationBar = () => {
  return (
    <div className="w-screen flex flex-row text-[11px] py-0.5 translate-y-2">
      <div className="grow"></div>
      <div className="flex flex-row items-center">
        <div className="h-2.5 px-2.5 fill-black hover:fill-[#9437FF]">
          <MoonFillIcon />
        </div>
        <div className="flex flex-row pr-8">
          <Text text="Forums" />
          <Text text="AskAI" />
          <Text text="Resources" />
          <Text text="Tutoring" />
        </div>
      </div>
    </div>
  );
};

function Text(props: { text: string }) {
  return (
    <div>
      <Link href={`/${props.text.toLowerCase()}`}>
        <div className="px-2.5 py-[2px] hover:underline">{props.text}</div>
      </Link>
    </div>
  );
}

export default NavigationBar;
