import React from "react";
import { ProfilePictureBigger } from "./ProfilePicture";
import { HeartIcon } from "../_assets/Icons";

export default function ThreadPage() {
  return (
    <div className="w-full pl-[630px]">
      <div className="flex justify-center">
        <div className="w-[75%] py-10 -translate-x-2">
          <p className="text-[22px] pb-4 font-light">
            Partial marks for flipped logic for A2 Q3B
          </p>
          <div className="flex flex-row items-center gap-2">
            <ProfilePictureBigger color="#344ABB" letter="A" />
            <div>
              <p className="text-[12.5px] text-[#D87252]">Antonio192</p>
              <p className="text-[9px]">
                <span className="text-gray-400">5 months ago in </span>
                <span className="text-[#EF4146] font-bold">Announcements</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row py-5 gap-2 font-light">
            <div className="flex flex-col flex-none w-[38px] items-center text-gray-500">
              <HeartIcon className="flex-none w-[22px] h-[22px] translate-y-1 opacity-50" />
              <p className="text-[12px] translate-y-2">3</p>
            </div>
            <div className="text-[12px] space-y-4">
              <p>
                Hi all, apologies for the delay. After much back and forth with
                the Grok team, the marks for the Haskell portion of Assignment 2
                are now available on Grok. Please let us know if there are any
                problems.
              </p>
              <p>
                EDIT: For some reason (Grok bug?), you will need to click "Load"
                in the list of your submissions at the bottom of the page to see
                your scorecard.
              </p>
              <p>
                VCE中文大致可划分为三大板块：SACs、口试、笔试。且不说六次SAC考试中就有两个直接考你作文，在年底最关键的口试和笔试中，写作更是占据了至关重要的位置。口试本质上是什么？它本质上是写作与口语相结合的产物。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
