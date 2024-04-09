import React from "react";
import { ChevronDownIcon } from "../_assets/Icons";

export default function Sidebar() {
  const categories = new Map([
    ["Announements", "#EF4146"],
    ["General", "#F4AB36"],
    ["Essays", "#18C27D"],
    ["Oral", "#5436DA"],
    ["SACs", "#19C2FF"],
    ["Exams", "#F4AB36"],
    ["Grades", "#EF4146"],
    ["Social", "#18C27D"],
  ]);

  return (
    <div className={`fixed flex-none pl-36 py-8 ${sidebarWidth}`}>
      <div className="flex flex-row items-center">
        <ChevronDownIcon className="w-2 h-2 mr-2.5" />
        <p className="text-[11px] font-extrabold tracking-wider py-2">
          CATEGORIES
        </p>
      </div>
      {Array.from(categories).map(([category, color], index) => (
        <Category key={index} category={category} color={color} />
      ))}
    </div>
  );
}

function Category(props: { category: string; color: string }) {
  return (
    <div className="flex flex-row items-center gap-2 px-2.5 py-[3.5px]">
      <div
        className="w-[8px] h-[8px]"
        style={{
          backgroundColor: props.color,
        }}
      ></div>
      <p className="text-[12px] text-gray-600 hover:underline">
        {props.category}
      </p>
    </div>
  );
}

const sidebarWidth = "w-[330px]";

export function DummySidebar() {
  return <div className={sidebarWidth}></div>;
}
