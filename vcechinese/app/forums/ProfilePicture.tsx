import React from "react";

export default function ProfilePicture(props: {
  color: string;
  letter: string;
}) {
  return (
    <div
      className="flex-none w-8 h-8 text-white flex items-center justify-center rounded-full"
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.letter}
    </div>
  );
}
