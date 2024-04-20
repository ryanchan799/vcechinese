import React from "react";

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
    <div className="text-[7px] border-black border-[0.1px] border-opacity-25 text-black text-opacity-40 rounded-sm px-[4px] py-[1px]">
      {props.description}
    </div>
  );
}
