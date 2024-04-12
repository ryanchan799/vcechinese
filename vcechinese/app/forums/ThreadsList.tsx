import React from "react";
import { Divider } from "../_assets/Icons";

export default function ThreadsList() {
  return (
    <div>
      <div
        className="ml-[290px] w-[380px] border-l-[1px] border-r-[1px] border-gray-200 border-opacity-50 overflow-y-scroll scrollbar-thin"
        style={{ height: `calc(100vh - 74px)` }}
      >
        <div className="grow">
          <div className="h-[20px] bg-black bg-opacity-[2%] border-b-[1px] border-gray-200 border-opacity-60 font-semibold text-[9px] flex items-center px-4 tracking-[0.2px]">
            DEC 19
          </div>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div>
      <div className="flex flex-row text-gray-700 pl-4 py-[14px]">
        <div className="space-y-1.5">
          <p className="text-[13px]">A2 mark not shown</p>
          <p className="text-[9.5px]">
            <span className="text-[#EF4146] font-semibold">Announcements</span>
            <span className="px-2.5">Weilong CHEN</span>
            <span>5mth</span>
          </p>
        </div>
      </div>
      <Divider className="opacity-60" />
    </div>
  );
}

function VerticalLine() {
  return <div className="flex w-[1px] bg-gray-200 opacity-80"></div>;
}
