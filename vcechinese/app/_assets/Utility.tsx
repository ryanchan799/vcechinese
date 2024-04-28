import { Timestamp } from "firebase/firestore";

export function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function formatTimeDifference(timestamp: Timestamp) {
  const currentTimestamp = Date.now();
  const timestampMilliseconds = timestamp.toMillis();
  const timeDifference = currentTimestamp - timestampMilliseconds;

  if (timeDifference < 60 * 1000) {
    return "Now";
  } else if (timeDifference < 60 * 60 * 1000) {
    return `${Math.floor(timeDifference / (60 * 1000))} minutes ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    return timeDifference < 2 * 60 * 60 * 1000
      ? "1 hour ago"
      : `${Math.floor(timeDifference / (60 * 60 * 1000))} hours ago`;
  } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
    return timeDifference < 2 * 24 * 60 * 60 * 1000
      ? "1 day ago"
      : `${Math.floor(timeDifference / (24 * 60 * 60 * 1000))} days ago`;
  } else if (timeDifference < 4 * 7 * 24 * 60 * 60 * 1000) {
    return timeDifference < 2 * 7 * 24 * 60 * 60 * 1000
      ? "1 week ago"
      : `${Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000))} weeks ago`;
  } else if (timeDifference < 52 * 7 * 24 * 60 * 60 * 1000) {
    return timeDifference < 2 * 4 * 7 * 24 * 60 * 60 * 1000
      ? "1 month ago"
      : `${Math.floor(
          timeDifference / (4 * 7 * 24 * 60 * 60 * 1000)
        )} months ago`;
  } else {
    const date = new Date(timestampMilliseconds);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString("en-US", options);
  }
}
