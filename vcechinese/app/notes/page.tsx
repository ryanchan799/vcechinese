import React from "react";
import NavigationBar from "../_components/NavigationBar";
import MainPage from "./MainPage";
import HeaderBar from "../_components/HeaderBar";
import { HEADER_BAR_HEIGHT, PAGE } from "../_assets/Constants";

export const metadata = {
  title: "Notes",
};

export default function page() {
  return (
    <div>
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar tab={PAGE.NOTES} />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-40">
            <HeaderBar
              page={PAGE.NOTES}
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
      <div className="flex" style={{ height: HEADER_BAR_HEIGHT }}>
        <Tabs />
      </div>
      <div className="grow"></div>
      {/* <Dropdown /> */}
    </div>
  );
}

function Tabs() {
  const tabs = ["作文", "口语"];

  function Tab(props: { section: string; isSelected: boolean }) {
    return (
      <button className="pr-5 text-[15px] font-bold">
        <p
          className={
            props.isSelected
              ? "font-bold"
              : "font-light text-gray-500 opacity-75"
          }
        >
          {props.section}
        </p>
      </button>
    );
  }

  return (
    <div className="flex flex-row items-center gap-5">
      {tabs.map((tab, index) => (
        <Tab key={index} section={tab} isSelected={tab == "作文"} />
      ))}
    </div>
  );
}
