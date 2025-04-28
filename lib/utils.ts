import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DateFormat(date: string): string {
  try {
    const parsedDate = new Date(date);

    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date");
    }

    return new Intl.DateTimeFormat("en-PK", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(parsedDate);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date"; // or return a default date, or empty string
  }
}

export function CurrencyFormat(amount: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(amount);
}
