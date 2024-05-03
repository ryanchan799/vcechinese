"use client";
import { db } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { SearchIcon, SendIcon } from "../_assets/Icons";
import { COLORS } from "../_assets/Constants";

export default function Searchbar(props: { setAnswer: any; setLoading: any }) {
  const [text, setText] = useState("");

  async function askQuestionAndGetAnswer() {
    console.log("askQuestionAndGetAnswer", text);
    props.setLoading(true);
    const answer = await getAnswer(text);
    props.setAnswer(answer);
    props.setLoading(false);
  }

  const handleEnterPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      askQuestionAndGetAnswer();
    }
  };

  return (
    <div className="flex flex-none w-full h-10 border-[1px] border-gray-200 rounded-[11px] px-4 items-center translate-y-[0.5px]">
      <SearchIcon className="w-2.5 h-2.5 flex-none fill-gray-400 mr-2" />
      <input
        className="w-full text-[12px] font-light outline-none"
        type="text"
        placeholder="Start typing away..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        disabled={text === ""}
        style={{ color: text === "" ? "#9ca3af" : COLORS.BRIGHT_BLUE }}
        onClick={askQuestionAndGetAnswer}
      >
        <SendIcon className="w-2.5 h-2.5 flex-none ml-2" />
      </button>
    </div>
  );
}

async function getAnswer(text: string) {
  if (apiKey === "") {
    const snapshot = await getDoc(doc(db, "keys", "togetherai"));
    apiKey = snapshot.exists() ? snapshot.data().key : "";
  }

  console.log("getAnswer", text);

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "Qwen/Qwen1.5-14B-Chat",
      stop: ["<|im_end|>", "|im_start|"],
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stream: false,
    }),
  };

  const response = await fetch(
    "https://api.together.xyz/v1/chat/completions",
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  // const numTokens = response.usage.total_tokens;

  return response.choices[0].message.content;
}

var apiKey = "";
