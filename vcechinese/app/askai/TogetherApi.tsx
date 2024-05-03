import { db } from "@/firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import React from "react";

export default async function TogetherApi() {
  const apiKey: DocumentData = await getDoc(doc(db, "keys", "togetherai"));

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        // "Bearer 157e5c1ce87cdd8f0122b96c3250f35a762856ebbdab15778db378ad6609e81c",
    },
    body: JSON.stringify({
      model: "Qwen/Qwen1.5-14B-Chat",
      stop: ["<|im_end|>", "|im_start|"],
      messages: [
        {
          role: "user",
          content: "写一篇关于《谦虚的利与弊》的评估文 1000字",
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

  const numTokens = response.usage.total_tokens;
  const answer = response.choices[0].message.content;

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-[800px] m-6">
        <div className="py-3 text-xs text-gray-400">{numTokens} tokens</div>
        <div>{answer}</div>
      </div>
    </div>
  );
}
