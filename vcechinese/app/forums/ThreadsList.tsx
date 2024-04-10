import React from "react";
import { Divider } from "../_assets/Icons";

export default function ThreadsList() {
  return (
    <div className="w-full justify-start">
      <div
        className="w-[380px] ml-[260px] border-l-[1px] border-gray-100 overflow-y-scroll"
        style={{
          height: `calc(100vh - 74px)`,
        }}
      >
        <div className="grow pl-3">
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
      <div className="flex flex-row text-gray-700 pl-2 py-3.5">
        <div className="space-y-1">
          <p className="text-[12px]">A2 mark not shown</p>
          <p className="text-[9px]">
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
