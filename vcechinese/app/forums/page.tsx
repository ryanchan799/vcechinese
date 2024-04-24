import React from "react";
import NavigationBar from "../_components/NavigationBar";
import HeaderBar from "../_components/HeaderBar";
import { Metadata } from "next";
import Sidebar from "./Sidebar";
import ThreadPage from "./ThreadPage";
import { PAGE } from "../_assets/Constants";
import ThreadsList from "./ThreadsList";
import { UserAuthContextProvider } from "./authentication/UserAuthContext.js";
import { Rhs } from "./HeaderRhs";

export const metadata: Metadata = {
  title: PAGE.FORUMS,
};

export default function page() {
  return (
    <UserAuthContextProvider>
      <Forums />
    </UserAuthContextProvider>
  );
}

function Forums() {
  return (
    <div className="scrollbar-none overflow-y-auto h-screen">
      <div>
        <div>
          <div className="sticky top-0 z-50">
            <NavigationBar tab={PAGE.FORUMS} />
          </div>
        </div>
        <div>
          <div className="sticky top-0 z-40">
            <HeaderBar
              page={PAGE.FORUMS}
              caption="欢迎大家交流探讨起来 迅速解决一切难题"
              rhs={<Rhs />}
              threads={<ThreadsList />}
            />
          </div>
          <ThreadPage />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
