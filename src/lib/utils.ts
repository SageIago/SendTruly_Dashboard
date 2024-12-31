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
