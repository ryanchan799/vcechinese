import React from "react";
import {
  FORUMS_CONVERSATION_WIDTH,
  FORUMS_LIST_HEADER_HEIGHT,
  FORUMS_TOOLBAR_NEW_REPLY,
} from "../_assets/Constants";
import {
  FORUMS_LIST_WIDTH,
  FORUMS_SIDEBAR_PADDING,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import Login from "./authentication/Login";
import { db } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";
import { formatTimeDifference, getTopicConfig } from "../_assets/Utility";
import RichTextEditor, { TextEditor, toolbarFormats } from "./RichTextEditor";

export default async function ThreadPage(props: { threadId: string }) {
  const thread = await getThread(props.threadId);

  const topicIcon = getTopicConfig(
    thread == null ? "" : thread.topic,
    "w-[8px] h-[8px] -translate-y-[0.5px]"
  );

  return (
    <div className="flex" style={{ fontWeight: 320 }}>
      <DummyPadding />
      <div className="flex flex-col flex-grow">
        <div>
          {thread == null ? null : (
            <div>
              <title>{"Forums - " + thread.title}</title>
              <div className="sticky top-[75.5px] z-30">
                <StickyBar topic={thread.topic} title={thread.title} />
              </div>
              <div>
                <div>
                  <div className="flex flex-col w-full items-center">
                    <div className={FORUMS_CONVERSATION_WIDTH}>
                      <h1 className="text-[22px] pt-9 pb-7 truncate">
                        {thread.title}
                      </h1>
                      {/* ThreadPostDetails */}
                      <div className="flex flex-row items-center">
                        <div className="flex w-9 h-9 bg-[#E6E8EB] rounded-full justify-center items-center">
                          {
                            getTopicConfig(
                              thread.topic,
                              "w-3.5 h-3.5 opacity-70"
                            ).outlineIcon
                          }
                        </div>
                        <div className="-space-y-[1.8px] pl-[8px]">
                          <span
                            className="text-[12px]"
                            style={{ fontWeight: "550" }}
                          >
                            {thread.poster}
                          </span>
                          <div className="flex flex-row items-center">
                            <span className="text-black text-opacity-50 text-[9.5px]">
                              {formatTimeDifference(thread.date)} in
                            </span>
                            <div
                              className="flex flex-row items-center gap-[2px] px-1"
                              style={{
                                color: topicIcon.color,
                                fill: topicIcon.color,
                              }}
                            >
                              {topicIcon.fillIcon}
                              <span
                                className="tracking-[0.1px] text-[9.5px]"
                                style={{ fontWeight: 500 }}
                              >
                                {thread.topic}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ThreadConversations */}
                      <TextEditor
                        modules={noToolbarModules}
                        formats={toolbarFormats}
                        readOnly={true}
                        className={`pl-[30px] py-1 ${FORUMS_CONVERSATION_WIDTH}`}
                        value={JSON.parse(thread.value)}
                      />
                    </div>
                    <RichTextEditor
                      toolbarId={FORUMS_TOOLBAR_NEW_REPLY}
                      isNewThreadPost={false}
                    />
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

async function getThread(id: string) {
  const snap = await getDoc(doc(db, "threads", id));
  if (snap.exists()) {
    console.log("Document data:", snap.data());
    return snap.data();
  } else {
    console.log("No such document");
  }
  return null;
}

function StickyBar(props: { title: string; topic: string }) {
  return (
    <div
      className="flex flex-row w-full items-center px-4 py-[9px] border-b-[1px] bg-white gap-2.5"
      style={{
        height: `${FORUMS_LIST_HEADER_HEIGHT - 0.5}px`,
      }}
    >
      {/* <div className="flex border-[1px] rounded-[4px] w-[25px] h-[25px] justify-center items-center">
        <LeftBarIcon className="w-[13.5px] h-[13.5px] translate-x-[0.8px]" />
      </div> */}
      <div className="text-[10px] space-x-2">
        <span>{props.topic}</span>
        <span className="text-[9px] text-black text-opacity-70">
          {props.title}
        </span>
      </div>
    </div>
  );
}

function DummyPadding() {
  return (
    <>
      <div
        className={`flex-none ${FORUMS_SIDEBAR_PADDING}`}
        style={{ width: FORUMS_SIDEBAR_WIDTH }}
      ></div>
      <div className="flex-none" style={{ width: FORUMS_LIST_WIDTH }}></div>
    </>
  );
}

const noToolbarModules = {
  toolbar: {
    container: "#" + FORUMS_TOOLBAR_NEW_REPLY,
  },
};
