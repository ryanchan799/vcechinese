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
    <div className="fixed top-[125px] left-[115px] z-50 flex-none">
      <div className="flex flex-row items-center">
        <ChevronDownIcon className="w-1.5 h-1.5 ml-[1px] mr-2.5" />
        <p className="text-[10px] font-extrabold py-1.5">TOPICS</p>
      </div>
      {Array.from(categories).map(([category, color], index) => (
        <Category key={index} category={category} color={color} />
      ))}
    </div>
  );
}

function Category(props: { category: string; color: string }) {
  return (
    <div className="flex flex-row items-center gap-[8px] py-[3px]">
      <div
        className="w-[9px] h-[9px]"
        style={{
          backgroundColor: props.color,
        }}
      ></div>
      <button className="text-[11px] font-light text-gray-600 opacity-90 hover:underline">
        {props.category}
      </button>
    </div>
  );
}
