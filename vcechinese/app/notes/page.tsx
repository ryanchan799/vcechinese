import React from "react";
import NavigationBar from "./NavigationBar";
import MainPage from "./MainPage";
import HeaderBar from "./HeaderBar";

export default function page() {
  return (
    <div>
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-40">
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
