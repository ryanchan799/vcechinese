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
    const minutes = Math.floor(timeDifference / (60 * 1000));
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (timeDifference < 4 * 7 * 24 * 60 * 60 * 1000) {
    const weeks = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (timeDifference < 52 * 7 * 24 * 60 * 60 * 1000) {
    const months = Math.floor(timeDifference / (4 * 7 * 24 * 60 * 60 * 1000));
    return months === 1 ? "1 month ago" : `${months} months ago`;
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
