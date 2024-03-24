import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex flex-row bg-[#202123] text-white text-[11px]">
      <EmptySpace />
      <Text text="Feedback" />
      <div className="flex-grow"></div>
      <div className="flex flex-row">
        <Text text="Notes" />
        <Text text="Forums" />
        <Text text="AskAI" />
        <Text text="Resources" />
        <Text text="Tutoring" />
        <EmptySpace />
      </div>
    </div>
  );
};

function Text(props: { text: string }) {
  return (
    <div>
      <Link href={`/${props.text.toLowerCase()}`}>
        <div className="px-3 pt-[3.5px] pb-[2px] hover:underline">
          {props.text}
        </div>
      </Link>
    </div>
  );
}

function EmptySpace() {
  return <div className="px-1"></div>;
}

export default NavigationBar;
