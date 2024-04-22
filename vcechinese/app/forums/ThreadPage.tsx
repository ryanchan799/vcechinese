import React from "react";
import { getTopicConfig } from "./Sidebar";
import { FORUM_TOPIC } from "../_assets/Constants";
import {
  FORUMS_LIST_WIDTH,
  FORUMS_SIDEBAR_PADDING,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import { RichTextEditor } from "./RichTextEditor";

export default function ThreadPage() {
  const config = getTopicConfig(FORUM_TOPIC.ANNOUNCEMENTS, "w-[18px] h-[18px]");
  const icon = config == null ? null : config.outlineIcon;

  return (
    <div className="flex py-[50px] font-light">
      <DummyPadding />
      <div className="flex flex-grow justify-center">
        <RichTextEditor className="h-[200px]" />
        {/* <div className="w-[650px]">
          <div className="pb-8">
            <div className="flex flex-row items-center gap-3.5 pb-1.5">
              {icon}
              <p className="text-[23px] tracking-[0.8px]">
                Welcome to VCE Chinese Forums!
              </p>
            </div>
            <Tags tags={["writing", "作文", "essays", "vce-chinese"]} />
          </div>
          <div className="flex flex-row items-center gap-2">
            <ProfilePictureBigger color="#FFAC00" letter="A" />
            <div>
              <p className="text-[12.5px] text-[#D87252]">Antonio192</p>
              <p className="text-[9px]">
                <span className="text-gray-400">5 months ago in </span>
                <span className="text-[#EF4146] font-bold">Announcements</span>
              </p>
            </div>
          </div>
          <div className="text-[12.5px] ml-[50px] py-3 space-y-3.5">
            <p>
              Hi all, apologies for the delay. After much back and forth with
              the Grok team, the marks for the Haskell portion of Assignment 2
              are now available on Grok. Please let us know if there are any
              problems.
            </p>
            <p>
              EDIT: For some reason (Grok bug?), you will need to click "Load"
              in the list of your submissions at the bottom of the page to see
              your scorecard. EDIT: For some reason (Grok bug?), you will need
              to click "Load" in the list of your submissions at the bottom of
              the page to see your scorecard.
            </p>
            <p>
              VCE中文大致可划分为三大板块：SACs、口试、笔试。且不说六次SAC考试中就有两个直接考你作文，在年底最关键的口试和笔试中，写作更是占据了至关重要的位置。口试本质上是什么？它本质上是写作与口语相结合的产物。
            </p>
          </div>
        </div> */}
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
