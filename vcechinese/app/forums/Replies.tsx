"use client";
import { DocumentData } from "firebase/firestore";
import { FORUMS_CONVERSATION_WIDTH } from "../_assets/Constants";
import { ThreadsIcon } from "../_assets/Icons";
import { formatTimeDifference } from "../_assets/Utility";
import { TextEditor, toolbarFormats } from "./RichTextEditor";
import { AdminTag } from "./ThreadsRow";
import { noToolbarModules } from "./ThreadPage";

export default function Replies(props: { thread: DocumentData }) {
  return (
    <div className={`${FORUMS_CONVERSATION_WIDTH} pl-12`}>
      {props.thread.replies.map((reply: DocumentData, index: number) => {
        return (
          <div key={index} className="flex flex-row items-start">
            <div className="flex flex-none w-8 h-8 bg-[#E6E8EB] rounded-full justify-center items-center">
              <ThreadsIcon className="w-3 h-3 opacity-70" />
            </div>
            <div className="flex flex-col pl-[8px] pt-[2px] items-start">
              <div className="flex flex-row items-center gap-1.5">
                <span className="text-[10px]" style={{ fontWeight: "550" }}>
                  {reply.poster}
                </span>
                <span className="text-black text-opacity-50 text-[9.5px]">
                  {formatTimeDifference(reply.date)}
                </span>
                {reply.admin ? <AdminTag /> : null}
              </div>
              <TextEditor
                modules={noToolbarModules}
                formats={toolbarFormats}
                readOnly={true}
                className={`-translate-x-[15px] -translate-y-[10px]`}
                value={JSON.parse(reply.value)}
              />
              <button
                className="text-[10px] -translate-y-[30px] text-gray-400"
                onClick={() => {
                  let divElement = document.getElementById("reply-box");
                  if (divElement) {
                    divElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Reply
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
