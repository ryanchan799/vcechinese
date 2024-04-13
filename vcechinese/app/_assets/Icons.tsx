import React from "react";

export function MoonFillIcon(props: { className: string }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 29 29"
      className={props.className}
    >
      <g>
        <rect height="29.0771" opacity="0" width="28.9014" x="0" y="0" />
        <path d="M22.6611 19.6289C14.7363 19.6289 9.66797 14.6631 9.66797 6.72363C9.66797 5.08301 10.0635 2.73926 10.5908 1.52344C10.7227 1.18652 10.752 0.981445 10.752 0.834961C10.752 0.439453 10.459 0 9.8877 0C9.72656 0 9.375 0.0439453 9.05273 0.161133C3.63281 2.3291 0 8.15918 0 14.2969C0 22.9102 6.5625 29.0625 15.1465 29.0625C21.46 29.0625 26.9238 25.2393 28.7402 20.4639C28.8721 20.127 28.9014 19.7754 28.9014 19.6436C28.9014 19.1016 28.4473 18.7354 28.0371 18.7354C27.8467 18.7354 27.6855 18.7793 27.4072 18.8672C26.2793 19.2334 24.4629 19.6289 22.6611 19.6289Z" />
      </g>
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
    </svg>
  );
}

export function PenIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <div className="bg-zinc-900 hover:scale-105">
      <svg
        width="18px"
        height="29px"
        viewBox="0 0 18 29"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white w-9 h-9 py-[9px]"
      >
        <title>Play</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
          className="translate-x-[1.5px]"
        >
          <g id="buttons" transform="translate(-1665.000000, -818.000000)">
            <path d="M1665,847 L1669.15385,832.5 L1665,818 L1683,832.5 L1665,847 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function PauseIcon() {
  return (
    <div className="bg-zinc-900 hover:scale-105">
      <svg
        width="18px"
        height="29px"
        viewBox="0 0 18 29"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white w-9 h-9 py-[10px]"
      >
        <title>Pause</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="buttons" transform="translate(-1741.000000, -818.000000)">
            <path d="M1752,818 L1752,845 L1759,845 L1759,818 L1752,818 Z M1741,818 L1741,845 L1748,845 L1748,818 L1741,818 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function SearchIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}

export function ChevronDownIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
}

export function ThreadsIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
    </svg>
  );
}

export function MessageFillIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
    </svg>
  );
}

export function HeartIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
    </svg>
  );
}

export function HeartFillIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </svg>
  );
}

export function EyeFillIcon(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={props.className}
    >
      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
    </svg>
  );
}

export function Divider(props: { className?: string }) {
  return (
    <div className={`w-full h-[0.5px] bg-gray-300 ${props.className}`}></div>
  );
}

export function VerticalLine() {
  return <div className="flex-none w-[1px] bg-gray-200"></div>;
}
