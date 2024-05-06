import React from "react";
import { FORUMS_TOOLBAR_NEW_REPLY } from "../_assets/Constants";
import { ThreadsIcon } from "../_assets/Icons";
import RichTextEditor from "./RichTextEditor";

export default function ReplyBox(props: { threadId: string }) {
  return (
    <div className="pb-20">
      <div id="reply-box" className="flex gap-2 pl-1.5 pb-4">
        <ThreadsIcon className="w-4 h-4 fill-gray-400 opacity-85 translate-y-[4px]" />
        <span className="text-md">Write a reply</span>
      </div>
      <RichTextEditor
        toolbarId={FORUMS_TOOLBAR_NEW_REPLY}
        isNewThreadPost={false}
        threadId={props.threadId}
      />
    </div>
  );
}
