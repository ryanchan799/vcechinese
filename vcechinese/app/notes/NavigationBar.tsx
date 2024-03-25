import Link from "next/link";
import React from "react";
import { MoonFillIcon } from "../_assets/Icons";

const NavigationBar = () => {
  return (
    <div className="w-screen flex flex-row bg-[#202123] text-white text-[11px]">
      <EmptySpace />
      <Text text="Feedback" />
      <div className="grow"></div>
      <div className="flex flex-row items-center">
        <div className="h-2.5 px-2.5 fill-[#9437FF]">
          <MoonFillIcon />
        </div>
        <div className="flex flex-row">
          <Text text="Notes" />
          <Text text="Forums" />
          <Text text="AskAI" />
          <Text text="Resources" />
          <Text text="Tutoring" />
        </div>
        <EmptySpace />
      </div>
    </div>
  );
};

function Text(props: { text: string }) {
  return (
    <div>
      <Link href={`/${props.text.toLowerCase()}`}>
        <div className="px-2.5 pt-[3.5px] pb-[2px] hover:underline">
          {props.text}
        </div>
      </Link>
    </div>
  );
}

function EmptySpace() {
  return <div className="px-2"></div>;
}

export default NavigationBar;
