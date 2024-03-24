import React from "react";
import NotesLogo from "./NotesLogo";
import NavigationBar from "./NavigationBar";
import Contents from "./Contents";
import MainPage from "./MainPage";

const page = () => {
  return (
    <div>
      <div>
        <div className="sticky top-0">
          <NavigationBar />
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div>
            <Lhs />
          </div>
          <div className="w-screen">
            <div className="sticky top-0">
              <HeaderBar />
            </div>
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  );
};

function Lhs() {
  return (
    <div className="sticky top-0 w-[345px] h-screen overflow-auto pb-16 pt-4 pl-14 bg-white drop-shadow-lg z-10">
      <NotesLogo />
      <Contents />
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="h-[50.5px] bg-white">
      <div className="flex flex-row">
        <div className="flex flex-col text-[10px] pt-2.5">
          <p className=" text-gray-400 font-light px-6">第一章</p>
          <p className="px-6">
            把作文写好的窍门妙招 ｜ 作文的五大文体与七大格式
          </p>
        </div>
        <div className="flex flex-grow"></div>
        <SimplifiedTraditionalToggle />
      </div>

      <div className="h-[0.5px] bg-gray-300 mt-2.5 "></div>
    </div>
  );
}

function SimplifiedTraditionalToggle() {
  return (
    <label className="flex cursor-pointer gap-1.5 scale-75 items-center text-lg pt-2.5 pr-4">
      <p>简</p>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      />
      <p>繁</p>
    </label>
  );
}

export default page;
