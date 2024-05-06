import { redirect } from "next/navigation";
import { FORUMS_WELCOME_PAGE } from "../_assets/Constants";

export default function page() {
  return redirect("/forums/" + FORUMS_WELCOME_PAGE);
}
