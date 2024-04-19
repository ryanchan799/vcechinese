import React from "react";
import { COLORS } from "../_assets/Constants";
import { hexToRgba } from "../_assets/UtilityFunctions";

export default function Tags(props: { tags: string[] }) {
  return (
    <div className="flex flex-row gap-1">
      {props.tags.map((tag, index) => (
        <Tag key={index} description={tag} />
      ))}
    </div>
  );
}

function Tag(props: { description: string }) {
  return (
    <div
      className="text-[9px] font-normal rounded-sm px-[4px] py-[1px]"
      style={{
        color: COLORS.DULL_BLUE,
        backgroundColor: hexToRgba(COLORS.DULL_BLUE, 0.07),
      }}
    >
      {props.description}
    </div>
  );
}
