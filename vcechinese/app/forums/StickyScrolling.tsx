"use client";
import React, { useEffect, useRef, useState } from "react";

export default function StickyScrolling() {
  return (
    <div
      className="w-full bg-red-200"
      style={{ height: window.innerHeight - 100 }}
    ></div>
  );
}
