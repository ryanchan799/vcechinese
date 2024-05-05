"use client";
import React, { useEffect } from "react";
import { RESOURCES } from "../_assets/Constants";

export default function Redirect() {
  useEffect(() => {
    window.location.href = RESOURCES;
  }, []);

  return <div></div>;
}
