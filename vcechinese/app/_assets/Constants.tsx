export enum PAGE {
  NOTES = "Notes",
  FORUMS = "Forums",
  ASKAI = "AskAI",
  RESOURCES = "Resources",
  TUTORING = "Tutoring",
}

export enum COLORS {
  BRIGHT_BLUE = "#0066FF",
}

export const HEADER_LOGO_WIDTH = "285px";
export const HEADER_BAR_HEIGHT = "75px";
export const HEADER_BAR_WIDTHS = new Map([
  [PAGE.NOTES, "w-[1050px]"],
  [PAGE.FORUMS, "w-full pl-[80px] pr-[42px]"],
]);

export const NOTES_CONTENTS_WIDTH = "285px";

export const FORUMS_SIDEBAR_WIDTH = "160px";
