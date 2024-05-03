"use client";
import React, { useEffect } from "react";
import { RESOURCES } from "../_assets/Constants";

export default function page() {
  useEffect(() => {
    window.location.href = RESOURCES;
  }, []);

  return <div></div>;
}
