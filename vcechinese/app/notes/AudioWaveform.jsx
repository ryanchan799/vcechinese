"use client";
import React, { useState, useEffect, useRef } from "react";
import Wavesurfer from "wavesurfer.js";
import { PauseIcon, PlayIcon } from "../_assets/Icons";

export default function AudioWaveform() {
  const waveform = useRef(null);
  const [audioDuration, setAudioDuration] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!waveform.current) {
      waveform.current = Wavesurfer.create({
        container: "#waveform",
        barHeight: 1.75,
        cursorWidth: 0,
        progressColor: "#FF5501",
        height: 100,
        interact: true,
      });
      waveform.current.load("recordings/sampleaudio.MP3");
      waveform.current.on("ready", () => {
        const duration = Math.round(waveform.current.getDuration());
        setAudioDuration(
          Math.floor(duration / 60) + ":" + Math.floor(duration % 60)
        );
      });
    }
  }, []);

  useEffect(() => {}, [isPlaying]);

  const playAudioByClickingOnIcon = () => {
    if (waveform.current.isPlaying()) {
      waveform.current.pause();
      setIsPlaying(false);
    } else {
      waveform.current.play();
      setIsPlaying(true);
    }
  };

  const playAudioByClickingOnWaveform = () => {
    if (!waveform.current.isPlaying()) {
      waveform.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-2 translate-y-2">
        <button onClick={playAudioByClickingOnIcon}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div>
          <p className="text-[11px] text-gray-400">第一章 ｜ 第一节</p>
          <p className="text-[11px] tracking-widest">作文 · 练好写作有多重要</p>
        </div>
      </div>
      <div className="relative w-[80%]">
        <div
          id="waveform"
          className="h-[50px] overflow-hidden"
          onClick={playAudioByClickingOnWaveform}
        />
        {!waveform.current ? null : (
          <div className="absolute bottom-0 -right-4 rounded-sm bg-black z-10 px-1 py-[1px] text-[8px] text-white">
            {audioDuration}
          </div>
        )}
      </div>
    </div>
  );
}
