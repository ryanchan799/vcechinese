import React, { useEffect } from "react";
import { PAGE, TUTORING_CALENDAR } from "../_assets/Constants";
import HeaderBar from "../_components/HeaderBar";
import NavigationBar from "../_components/NavigationBar";

export const metadata = {
  title: "Tutoring",
};

export default function page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-[55px] z-50">
        <NavigationBar tab={PAGE.TUTORING} />
        <HeaderBar
          page={PAGE.TUTORING}
          caption="精心定制的课程让你快速进步"
          rhs={<Rhs />}
        />
      </div>
      <iframe
        id="calendar"
        src={TUTORING_CALENDAR}
        style={{ border: "none", width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
}

function Rhs() {
  return (
    <div className="relative flex flex-grow flex-row items-center">
      <div className="grow"></div>
      <div>
        <div className="flex flex-row items-end gap-2">
          <div className="flex flex-col items-end -space-y-0.5">
            <span className="text-[9px] text-gray-400">加我微信</span>
            <span className="text-[10px]">ryan03austrump</span>
          </div>
          <img src="/images/Wechat.jpg" alt="wechat" className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
}
