import React from "react";

export default function ProfilePicture(props: {
  color: string;
  letter: string;
  className: string;
}) {
  return (
    <div
      className={`flex-none text-white flex items-center justify-center rounded-full font-extralight ${props.className}`}
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.letter}
    </div>
  );
}

export function ProfilePictureTiny(props: { color: string; letter: string }) {
  return (
    <ProfilePicture
      color={props.color}
      letter={props.letter}
      className="w-[12.5px] h-[12.5px] text-[6px] "
    />
  );
}

export function ProfilePictureSmall(props: { color: string; letter: string }) {
  return (
    <ProfilePicture
      color={props.color}
      letter={props.letter}
      className="w-[12.5px] h-[12.5px] text-[6px] "
    />
  );
}

export function ProfilePictureBig(props: { color: string; letter: string }) {
  return (
    <ProfilePicture
      color={props.color}
      letter={props.letter}
      className="w-8 h-8"
    />
  );
}

export function ProfilePictureBigger(props: { color: string; letter: string }) {
  return (
    <ProfilePicture
      color={props.color}
      letter={props.letter}
      className="w-[40px] h-[40px] text-[21px]"
    />
  );
}
