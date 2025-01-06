import { toast } from "@/hooks/use-toast";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define the possible toast types
type ToastType = "success" | "error" | "info" | "warning";

// Define the props for the RenderToasts function
interface RenderToastsProps {
  type: ToastType;
  title: string;
  description?: string;
  variant?: string;
}

// Mapping from toast type to corresponding className
const toastClassMap: Record<ToastType, string> = {
  success: "toast",
  error: "error-toast",
  warning: "error-toast",
  info: "information-toast",
};

/**
 * Renders a toast notification based on the provided type.
 *
 * @param {RenderToastsProps} params - The parameters for the toast.
 * @returns {void}
 */
export function RenderToasts({
  type,
  title,
  description,
}: RenderToastsProps): void {
  const className = cn(toastClassMap[type]); // Fallback to a default class
  const variant =
    type === "error" || type === "warning" ? "destructive" : undefined;

  toast({
    title,
    description,
    className,
    variant,
  });
}

export const formatAmount = (amt?: number | string, type?: string) => {
  if (typeof amt === "string" && type === "specified") {
    return `₦${Number(amt).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  if (typeof amt === "number") {
    return amt;
  }
};

export function formatDate(input: Date | string): string {
  let date: Date;

  if (typeof input === "string") {
    date = new Date(input);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
    return `${date.getDate()}${getOrdinalSuffix(date.getDate())} ${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`;
  } else {
    date = input;
  }

  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

