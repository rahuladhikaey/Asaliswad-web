"use client";

import { useState, useEffect } from "react";

/**
 * Single source of truth for detecting if running inside the
 * Asali Swad Android WebView app vs a regular web browser.
 *
 * Detection: checks for "AsaliSwadAndroid" in the User-Agent string,
 * which is injected by the WebView app's custom user agent.
 *
 * Returns `false` during SSR / before hydration to prevent flicker.
 */
export function useIsApp(): boolean {
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    setIsApp(ua.includes("AsaliSwadAndroid"));
  }, []);

  return isApp;
}
