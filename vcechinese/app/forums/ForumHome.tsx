import React from "react";
import Sidebar, { DummySidebar } from "./Sidebar";
import ThreadsList from "./ThreadsList";
import ThreadPage from "./ThreadPage";

export default function ForumHome() {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-row">
        <DummySidebar />
        <ThreadsList />
        <ThreadPage />
      </div>
    </div>
  );
}
