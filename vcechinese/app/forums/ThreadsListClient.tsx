"use client";
import React, { useEffect, useState } from "react";
import {
  FORUMS_LIST_HEADER_HEIGHT,
  SELECTED_TOPICS,
} from "../_assets/Constants";
import { SortUpDownIcon, EllipsisIcon, FireIcon } from "../_assets/Icons";
import { DocumentData } from "firebase/firestore";
import ThreadsRow from "./ThreadsRow";

export default function ThreadsListClient(props: { threads: DocumentData[] }) {
  const [reversed, setReversed] = useState(false);
  const [list, setList] = useState(props.threads);

  useEffect(() => {
    function handleTopicTagSelection() {
      const selectedTopics = JSON.parse(
        localStorage.getItem(SELECTED_TOPICS) ?? "[]"
      );
      const filteredThreads = list.filter((thread) =>
        selectedTopics.includes(thread.topic)
      );
      setList(selectedTopics.length === 0 ? props.threads : filteredThreads);
    }

    window.addEventListener("storage", handleTopicTagSelection);

    return () => {
      window.removeEventListener("storage", handleTopicTagSelection);
    };
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-40">
        <StickyBar reversed={reversed} setReversed={setReversed} />
      </div>
      <div>
        <div>
          {reversed ? (
            <ThreadsLists threads={list.slice().reverse()} />
          ) : (
            <ThreadsLists threads={list} />
          )}
        </div>
      </div>
    </div>
  );
}

function StickyBar(props: { reversed: boolean; setReversed: any }) {
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
          <button
            onClick={() => props.setReversed(!props.reversed)}
            title="Display in reversed order"
          >
            <SortUpDownIcon className="w-3 h-3" />
          </button>
          <button title="Sort by popular">
            <FireIcon className="w-3 h-3 translate-y-[1px]" />
          </button>
          <button title="Sort by popular">
            <EllipsisIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ThreadsLists(props: { threads: DocumentData[] }) {
  return (
    <>
      {props.threads.map((thread, index) => (
        <div key={index}>
          {[...Array(1)].map((_, index) => (
            <ThreadsRow key={index} thread={thread} />
          ))}
        </div>
      ))}
    </>
  );
}
