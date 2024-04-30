import React from "react";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { FORUMS_LIST_WIDTH, FORUMS_SIDEBAR_WIDTH } from "../_assets/Constants";
import { db } from "@/firebase";
import ThreadsListClient from "./ThreadsListClient";

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
            <ThreadsListClient threads={threads} />
          </div>
        </div>
      </div>
    </div>
  );
}
