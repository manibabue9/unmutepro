"use client";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: EventParameters) => void;
  }
}

export function trackConversion(eventName: string, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, parameters);
}

