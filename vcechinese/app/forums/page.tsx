import { Metadata } from "next";
import { redirect } from "next/navigation";
import { PAGE } from "../_assets/Constants";

export const metadata: Metadata = {
  title: PAGE.FORUMS,
};

export default function page() {
  return redirect("/forums/DumDXzr6ZJlWFI3TvmKg");
}
