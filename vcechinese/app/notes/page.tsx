import React from "react";
import NavigationBar from "../_components/NavigationBar";
import MainPage from "./MainPage";
import HeaderBar from "../_components/HeaderBar";
import Dropdown from "./Dropdown";

export default function page() {
  return (
    <div>
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar tab="Notes" />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-40">
            <HeaderBar
              heading="Notes"
              caption="帮你轻松搞定你最不擅长的一科"
              rhs={<Rhs />}
            />
          </div>
          <div>
            <div>
              <MainPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <Tab section={"作文"} isSelected={true} />
      <Tab section={"口语"} isSelected={false} />
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
