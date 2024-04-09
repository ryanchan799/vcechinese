import React from "react";

export default async function TogetherApi() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "Bearer " + process.env.TOGETHER_AI_TOKEN,
    },
    body: JSON.stringify({
      model: "Qwen/Qwen1.5-14B-Chat",
      stop: ["<|im_end|>", "|im_start|"],
      messages: [{ role: "user", content: "韩信是谁？至少200字" }],
      max_tokens: 350,
      temperature: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stream: false,
    }),
  };

  //   const response = await fetch(
  //     "https://api.together.xyz/v1/chat/completions",
  //     options
  //   )
  //     .then((res) => res.json())
  //     .catch((err) => console.error(err));

  //   const numTokens = response.usage.total_tokens;
  //   const answer = response.choices[0].message.content;

  const numTokens = 240;
  const answer =
    "林徽因（1904年3月10日-1955年4月1日）是中国近现代著名的建筑学家、诗人、作家和翻译家，出生于浙江杭州一个书香门第。她是中国现代文学史上的重要人物，与徐志摩、梁思成等人有着深厚的情感纠葛，被誉为“中国现代女性的典范”。\n\n林徽因在文学领域有着卓越的成就，她的诗歌清新脱俗，情感深沉，代表作有《你是人间的四月天》等，这些作品深受读者喜爱。在建筑学上，她与丈夫梁思成共同参与了中国许多重要建筑的修复和设计工作，如北京的天安门广场、人民英雄纪念碑等，对中国的建筑事业做出了重要贡献。她还是一位翻译家，翻译了多部英国文学作品，如英国诗人雪莱的《西风颂》等。\n\n林徽因的一生充满了才情与坎坷，她的作品和人格魅力至今仍被人们所敬仰。";

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-[800px] m-6">
        <div className="py-3 text-xs text-gray-400">{numTokens} tokens</div>
        <div>{answer}</div>
      </div>
    </div>
  );
}
