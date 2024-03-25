import React from "react";
import NotesLogo from "./NotesLogo";
import Dropdown from "./Dropdown";
import { Divider } from "../_assets/Icons";

const HeaderBar = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-row w-[71%] items-center">
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
    <div className="flex flex-row items-end gap-5">
      <Tab section={"作文"} isSelected={false} />
      <Tab section={"口语"} isSelected={true} />
      <Tab section={"阅读"} isSelected={false} />
      <Tab section={"刷题"} isSelected={false} />
    </div>
  );
}

function Tab(props: { section: string; isSelected: boolean }) {
  return (
    <div className="flex flex-col items-center text-[15px]">
      <p className={`pb-3 ${props.isSelected ? "font-bold" : "font-light"}`}>
        {props.section}
      </p>
      <div
        className={`flex h-[2.5px] w-14 translate-y-[0.5px] ${
          props.isSelected ? "bg-[#f23e50]" : ""
        }`}
      ></div>
    </div>
  );
}

export default HeaderBar;
