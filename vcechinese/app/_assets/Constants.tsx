export const TITLE =
  "The Ultimate Place to Supercharge Your VCE Chinese Studies";

export const FORUMS_WELCOME_PAGE = "DumDXzr6ZJlWFI3TvmKg";

export const RESOURCES =
  "https://drive.google.com/drive/folders/1gUQ2-i1bnY1qDwV_RaCRDekDeguVN6it?usp=sharing";

export const TUTORING_CALENDAR =
  "https://outlook.live.com/calendar/0/published/d9698b3c-70dd-4b44-9a4c-9d290fff5e4c/fc7b6520-a322-493c-afa4-e1f0b312f2f6/cid-98F83AAE47FC70E4/calendar.html/";

export enum PAGE {
  NOTES = "Notes",
  FORUMS = "Forums",
  ASKAI = "AskAI",
  RESOURCES = "Resources",
  TUTORING = "Tutoring",
}

export enum COLORS {
  BRIGHT_BLUE = "#0066FF",
  BRIGHT_PURPLE = "#9437FF",
  BRIGHT_YELLOW = "#FFEE7A",
}

export const HEADER_LOGO_WIDTH = "285px";
export const HEADER_BAR_HEIGHT = "75px";
export const HEADER_BAR_WIDTHS = new Map([
  [PAGE.NOTES, "w-[1050px]"],
  [PAGE.FORUMS, "w-full pl-[80px] pr-[42px]"],
  [PAGE.TUTORING, "w-full pl-[80px] pr-[42px]"],
]);

export const NOTES_CONTENTS_WIDTH = "285px";

export const FORUMS_SIDEBAR_WIDTH = "175px";
export const FORUMS_SIDEBAR_PADDING = "ml-[80px] pl-[10px]";
export const FORUMS_LIST_WIDTH = "375px";
export const FORUMS_LIST_HEADER_HEIGHT = 37;
export const FORUMS_CONVERSATION_WIDTH = "w-[640px]";
export const FORUMS_TOOLBAR_NEW_REPLY = "new-reply-toolbar";
export const FORUMS_TOOLBAR_NEW_THREAD = "new-thread-toolbar";

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

export const SELECTED_TOPICS = "selectedTopics";
