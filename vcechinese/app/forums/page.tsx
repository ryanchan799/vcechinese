import React from "react";
import NavigationBar from "../_components/NavigationBar";
import HeaderBar from "../_components/HeaderBar";
import ForumHome from "./ForumHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forums",
};

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
              rhs={<div></div>}
            />
          </div>
          <div>
            <div>
              <ForumHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
