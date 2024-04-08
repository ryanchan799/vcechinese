import React from "react";
import NavigationBar from "../notes/NavigationBar";
import HeaderBar from "../notes/HeaderBar";
import MainPage from "../notes/MainPage";

export default function page() {
  return (
    <div>
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar tab="Forums" />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-40">
            <HeaderBar
              heading="Forums"
              caption="欢迎大家交流探讨起来 迅速解决一切难题"
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
