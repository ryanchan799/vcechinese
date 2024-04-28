import React from "react";
import { getTopicConfig } from "./Sidebar";
import { FORUM_TOPIC, FORUMS_LIST_HEADER_HEIGHT } from "../_assets/Constants";
import {
  FORUMS_LIST_WIDTH,
  FORUMS_SIDEBAR_PADDING,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import RichTextEditor, { formats, modules, TextEditor } from "./RichTextEditor";
import Login from "./authentication/Login";
import {
  LeftBarIcon,
  MegaphoneFillIcon,
  MegaphoneIcon,
} from "../_assets/Icons";
import { db } from "@/firebase";
import { getDoc, doc, DocumentData } from "firebase/firestore";

export default async function ThreadPage() {
  const thread: DocumentData | null = await getThread("BWhRezUfI6hVyrzaqYji");
  const config = getTopicConfig(FORUM_TOPIC.ANNOUNCEMENTS, "w-[18px] h-[18px]");
  const icon = config == null ? null : config.outlineIcon;

  return (
    <div className="flex" style={{ fontWeight: 320 }}>
      <DummyPadding />
      <div className="flex flex-col flex-grow">
        <div>
          {thread == null ? null : (
            <div>
              <div className="sticky top-[75.5px] z-30">
                <StickyBar />
              </div>
              <div>
                <div>
                  <div className="flex flex-col w-full items-center">
                    <div className="w-[630px]">
                      <h1
                        className="text-[22px] pt-9 pb-7"
                        style={{ letterSpacing: "0.05px" }}
                      >
                        {thread.title}
                      </h1>
                      {/* ThreadPostDetails */}
                      <div className="flex flex-row items-center">
                        <div className="flex w-9 h-9 bg-[#E6E8EB] rounded-full justify-center items-center">
                          <MegaphoneIcon className="w-3.5 h-3.5 opacity-70" />
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
                              5 months ago in
                            </span>
                            <div className="flex flex-row items-center gap-[3px] px-1 fill-[#EF4146] text-[#EF4146]">
                              <MegaphoneFillIcon className="w-[8px] h-[8px]" />
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
                      {/* ThreadPostDetails */}
                      <TextEditor
                        modules={modules}
                        formats={formats}
                        readOnly={true}
                        className="ml-[30px] py-1 w-[600px]"
                        value={JSON.parse(thread.value)}
                      />
                    </div>
                    <RichTextEditor />
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

function StickyBar() {
  return (
    <div
      className="flex flex-row w-full items-center px-3 py-[9px] border-b-[1px] bg-white gap-2.5"
      style={{
        height: `${FORUMS_LIST_HEADER_HEIGHT - 0.5}px`,
      }}
    >
      <div className="flex border-[1px] rounded-[4px] w-[25px] h-[25px] justify-center items-center">
        <LeftBarIcon className="w-[13.5px] h-[13.5px] translate-x-[0.8px]" />
      </div>
      <div className="text-[10px] space-x-2">
        <span>Announcements</span>
        <span className="text-[9px] text-black text-opacity-70">
          Welcome to VCE Chinese Forums!
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
