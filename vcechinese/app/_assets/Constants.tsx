export enum PAGE {
  NOTES = "Notes",
  FORUMS = "Forums",
  ASKAI = "AskAI",
  RESOURCES = "Resources",
  TUTORING = "Tutoring",
}

export enum COLORS {
  BRIGHT_BLUE = "#0066FF",
  DULL_BLUE = "#1B76CF",
}

export const HEADER_LOGO_WIDTH = "285px";
export const HEADER_BAR_HEIGHT = "75px";
export const HEADER_BAR_WIDTHS = new Map([
  [PAGE.NOTES, "w-[1050px]"],
  [PAGE.FORUMS, "w-full pl-[80px] pr-[42px]"],
]);

export const NOTES_CONTENTS_WIDTH = "285px";

export const FORUMS_SIDEBAR_WIDTH = "180px";
export const FORUMS_SIDEBAR_PADDING = "ml-[80px] pl-[10px]";
export const FORUMS_LIST_WIDTH = "390px";

export enum FORUM_TOPIC {
  ANNOUNCEMENTS = "Announcements",
  GENERAL = "General",
  ESSAYS = "Essays",
  ORAL = "Oral",
  SACS = "SACs",
  EXAMS = "Exams",
  GRADES = "Grades",
  SOCIAL = "Social",
}
