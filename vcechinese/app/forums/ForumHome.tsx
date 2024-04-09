import React from "react";
import Sidebar, { DummySidebar } from "./Sidebar";
import ThreadsList from "./ThreadsList";
import ThreadPage from "./ThreadPage";
import StickyScrolling from "./StickyScrolling";

export default function ForumHome() {
  return (
    <div>
      <Sidebar />
      <div className="flex">
        <DummySidebar />
        {/* <div className="flex w-full">
          <ThreadsList />
          <ThreadPage />
        </div> */}
        <StickyScrolling />
      </div>
    </div>
  );
}
