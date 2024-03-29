import React from "react";
import NavigationBar from "./NavigationBar";
import MainPage from "./MainPage";
import HeaderBar from "./HeaderBar";

export default function page() {
  return (
    <div>
      <div>
        <div>
          <div className="sticky top-0 z-20">
            <NavigationBar />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-10">
            <HeaderBar />
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
