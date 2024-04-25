import Image from "next/image";
import React from "react";

export default function ProfilePicture(props: {
  url: string | null;
  size: number;
}) {
  const url = props.url == null ? "" : props.url;
  return (
    <Image
      src={url}
      alt="Profile Picture"
      width={props.size}
      height={props.size}
      className="rounded-full overflow-hidden"
    />
  );
}

export function ProfilePictureTiny(props: { url: string | null }) {
  return <ProfilePicture url={props.url} size={10} />;
}

export function ProfilePictureSmall(props: { url: string | null }) {
  return <ProfilePicture url={props.url} size={16} />;
}

export function ProfilePictureBig(props: { url: string | null }) {
  return <ProfilePicture url={props.url} size={32} />;
}

export function ProfilePictureBigger(props: { url: string | null }) {
  return <ProfilePicture url={props.url} size={38} />;
}
