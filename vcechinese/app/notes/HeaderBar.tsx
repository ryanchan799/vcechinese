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
      <div className="flex flex-col text-[10px] py-6">
        <p className=" text-gray-400 font-light">第一章</p>
        <p>把作文写好的窍门妙招 ｜ 作文的五大文体与七大格式</p>
      </div>
      <div className="grow"></div>
      <Dropdown />
    </div>
  );
}

export default HeaderBar;
