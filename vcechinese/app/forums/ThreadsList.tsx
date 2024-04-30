import React from "react";
import { EllipsisIcon, SortUpDownIcon } from "../_assets/Icons";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import {
  FORUMS_LIST_HEADER_HEIGHT,
  FORUMS_LIST_WIDTH,
  FORUMS_SIDEBAR_WIDTH,
} from "../_assets/Constants";
import { db } from "@/firebase";
import ThreadsRow from "./ThreadsRow";

export default async function ThreadsList() {
  const threads: DocumentData[] = await getDocs(
    query(
      collection(db, "threads"),
      orderBy("isPinned", "desc"),
      orderBy("date", "desc")
    )
  ).then((snapshot) =>
    snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  );

  return (
    <div>
      <div
        className="border-l-[1px] border-r-[1px] border-gray-200 border-opacity-50 overflow-y-scroll scrollbar-none"
        style={{
          height: `calc(100vh - 74px)`,
          width: FORUMS_LIST_WIDTH,
          marginLeft: FORUMS_SIDEBAR_WIDTH,
        }}
      >
        <div className="grow font-light">
          <div>
            <div>
              <div className="sticky top-0 z-40">
                <StickyBar />
              </div>
              <div>
                <div>
                  {threads.map((thread, index) => (
                    <div key={index}>
                      {[...Array(1)].map((_, index) => (
                        <ThreadsRow key={index} thread={thread} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyBar() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
  } as Intl.DateTimeFormatOptions;
  const date = now.toLocaleDateString("en-US", options);

  return (
    <div
      className="flex flex-row w-full items-center px-4 py-[9px] border-b-[1px] bg-white"
      style={{ height: `${FORUMS_LIST_HEADER_HEIGHT}px` }}
    >
      <div className="flex flex-grow items-center">
        <span className="text-[10px]">Threads</span>
        <span className="text-[9px] px-1.5 text-black text-opacity-70">
          {date}
        </span>
        <div className="grow"></div>
        <div className="flex gap-3 opacity-70">
          <SortUpDownIcon className="w-3 h-3" />
          <EllipsisIcon className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
