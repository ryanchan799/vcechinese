import React from "react";
import NavigationBar from "../_components/NavigationBar";
import HeaderBar from "../_components/HeaderBar";
import { Metadata } from "next";
import { SearchIcon } from "../_assets/Icons";
import ProfilePicture from "./ProfilePicture";
import Sidebar from "./Sidebar";
import ThreadPage from "./ThreadPage";
import ThreadsList from "./ThreadsList";
export const metadata: Metadata = {
  title: "Forums",
};

export default function page() {
  return (
    <div className="scrollbar-none overflow-y-auto h-screen">
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar tab="Forums" />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-50">
            <HeaderBar
              heading="Forums"
              caption="欢迎大家交流探讨起来 迅速解决一切难题"
              rhs={<Rhs />}
              forumsThreadsList={<ThreadsList />}
            />
          </div>
          <Sidebar />
          <ThreadPage />
        </div>
      </div>
    </div>
  );
}

function Rhs() {
  return (
    <div className="flex flex-grow">
      <div className="grow"></div>
      <div className="flex gap-4">
        <div className="flex w-[300px] h-8 border-[1px] border-gray-200 rounded-full px-4 items-center translate-y-[0.5px]">
          <SearchIcon className="w-3 h-3 fill-gray-400 mr-2" />
          <input
            className="w-full text-[12px] font-light outline-none"
            type="search"
            placeholder="Search"
          />
        </div>
        <ProfilePicture color="#065f46" letter="R" />
      </div>
    </div>
  );
}
