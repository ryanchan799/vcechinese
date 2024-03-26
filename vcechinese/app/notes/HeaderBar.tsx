import React from "react";
import NotesLogo from "./Logo";
import Dropdown from "./Dropdown";
import { Divider } from "../_assets/Icons";

const HeaderBar = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className={`flex flex-row w-[1050px] items-center`}>
        <NotesLogo />
        <Rhs />
      </div>
      <div className="w-screen">
        <Divider />
      </div>
    </div>
  );
};

function Rhs() {
  return (
    <div className="flex flex-grow flex-row items-center">
      <div className="flex h-[75px]">
        <Tabs />
      </div>
      <div className="grow"></div>
      <Dropdown />
    </div>
  );
}

function Tabs() {
  return (
    <div className="flex flex-row items-center gap-5">
      <Tab section={"作文"} isSelected={false} />
      <Tab section={"口语"} isSelected={true} />
      <Tab section={"阅读"} isSelected={false} />
      <Tab section={"题库"} isSelected={false} />
    </div>
  );
}

function Tab(props: { section: string; isSelected: boolean }) {
  return (
    <div className="pr-5 text-[15px] font-bold">
      <p
        className={
          props.isSelected ? "font-bold" : "font-light text-gray-500 opacity-75"
        }
      >
        {props.section}
      </p>
    </div>
  );
}

export default HeaderBar;
