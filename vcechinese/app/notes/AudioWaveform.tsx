"use client";
import React, { useState, useEffect, useRef } from "react";
import Wavesurfer from "wavesurfer.js";
import { PauseIcon, PlayIcon } from "../_assets/Icons";

export default function AudioWaveform() {
  const waveform: React.MutableRefObject<Wavesurfer | null> = useRef(null);
  const [audioDuration, setAudioDuration] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!waveform.current) {
      waveform.current = Wavesurfer.create({
        container: "#waveform",
        barHeight: 0.65,
        barWidth: 2,
        cursorWidth: 0,
        progressColor: "#111111",
        height: 80,
        interact: true,
        dragToSeek: true,
      });
      waveform.current.load("recordings/audio1.MP3");
      waveform.current.on("ready", () => {
        const duration = Math.round(waveform.current!.getDuration());
        setAudioDuration(
          Math.floor(duration / 60) + ":" + Math.floor(duration % 60)
        );
      });
    }
  }, []);

  useEffect(() => {}, [isPlaying]);

  const playAudioByClickingOnIcon = () => {
    if (waveform.current!.isPlaying()) {
      waveform.current!.pause();
      setIsPlaying(false);
    } else {
      waveform.current!.play();
      setIsPlaying(true);
    }
  };

  const playAudioByClickingOnWaveform = () => {
    if (!waveform.current!.isPlaying()) {
      waveform.current!.play();
      setIsPlaying(true);
    }
  };

  if (waveform.current && isPlaying) {
    waveform.current!.getMediaElement().addEventListener("ended", function () {
      setIsPlaying(false);
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center gap-4 translate-y-1">
        <button onClick={playAudioByClickingOnIcon}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div className="flex flex-col text-[9.5px] -space-y-[0.5px]">
          <p className="text-gray-400">第一章 ｜ 第一节</p>
          <p className="tracking-widest">作文 · 练好写作有多重要</p>
        </div>
      </div>
      <div className="relative w-[80%]">
        <div
          id="waveform"
          className="h-[40px] overflow-hidden"
          onMouseDown={playAudioByClickingOnWaveform}
        />
        {!waveform.current ? null : (
          <div className="absolute bottom-0 -right-4 rounded-sm bg-black z-10 px-[3px] text-[8px] text-white">
            {audioDuration}
          </div>
        )}
      </div>
    </div>
  );
}
