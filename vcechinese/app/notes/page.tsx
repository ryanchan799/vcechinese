import React from "react";
import NotesLogo from "./NotesLogo";
import NavigationBar from "./NavigationBar";

const page = () => {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <NotesLogo />
    </div>
  );
};

export default page;
