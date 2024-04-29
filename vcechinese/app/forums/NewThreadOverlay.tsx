"use client";
import { FORUM_TOPIC, FORUMS_TOOLBAR_NEW_THREAD } from "../_assets/Constants";
import { XMarkIcon } from "@heroicons/react/20/solid";
import RichTextEditor from "./RichTextEditor";
import { useState } from "react";
import { ForumTopic, getTopicConfig } from "../_assets/Utility";

export default function NewThreadOverlay(props: {
  setOpen: (value: boolean) => void;
}) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen bg-black bg-opacity-45">
      <div className="flex flex-col bg-white max-h-[80%] justify-center rounded-lg overflow-auto">
        <Header setOpen={props.setOpen} />
        <NewThreadInfo
          title={title}
          topic={topic}
          setTitle={setTitle}
          setTopic={setTopic}
        />
      </div>
    </div>
  );
}

function Header(props: { setOpen: (value: boolean) => void }) {
  return (
    <div className="flex flex-grow flex-row items-center w-full border-b-[1px] px-4 pb-2 pt-2.5 space-x-2 text-[10px]">
      <span>New Thread</span>
      <span className="text-[9px] text-black text-opacity-60">
        The Ultimate Place to Supercharge Your VCE Chinese Studies
      </span>
      <div className="grow"></div>
      <button onClick={() => props.setOpen(false)}>
        <XMarkIcon className="h-4 w-4 opacity-70" aria-hidden="true" />
      </button>
    </div>
  );
}

function NewThreadInfo(props: {
  title: string;
  topic: string;
  setTitle: (arg0: string) => void;
  setTopic: (arg0: string) => void;
}) {
  return (
    <div
      className="flex flex-col px-14 py-7 gap-3.5"
      style={{ fontWeight: 320 }}
    >
      <input
        type="text"
        placeholder="Title"
        value={props.title}
        onChange={(event) => props.setTitle(event.target.value)}
        className="text-[22px] outline-none"
      />
      <span className="text-[9px] text-gray-500 translate-y-1.5">
        Add a topic tag to this thread
      </span>
      <div className="flex flex-row gap-[6.5px] pb-5">
        {Object.values(FORUM_TOPIC).map((topic, index) => {
          const forumTopic = getTopicConfig(topic, "w-[9px] h-[9px]");
          return forumTopic == null ? null : (
            <button
              key={index}
              className="px-3 rounded-full outline outline-[0.5px] opacity-50"
              onClick={() => props.setTopic(topic.toString())}
            >
              <Topic topic={forumTopic} className="text-[10.5px] pl-[4px]" />
            </button>
          );
        })}
      </div>
      <RichTextEditor
        toolbarId={FORUMS_TOOLBAR_NEW_THREAD}
        isNewThreadPost={true}
        title={props.title}
        topic={props.topic}
      />
    </div>
  );
}

function Topic(props: { topic: ForumTopic; className: string }) {
  return (
    <div className="flex flex-row items-center text-gray-700 fill-gray-700 opacity-80 py-[3.6px]">
      {props.topic.fillIcon}
      <div className={`tracking-[-0.15px] hover:underline ${props.className}`}>
        {props.topic.topic}
      </div>
    </div>
  );
}
