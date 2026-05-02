"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface PlatformContextType {
  isApp: boolean;   // true = Android WebView app
  isWeb: boolean;   // true = regular browser
  mounted: boolean; // true = hydration done, safe to render platform-specific UI
}

const PlatformContext = createContext<PlatformContextType>({
  isApp: false,
  isWeb: true,
  mounted: false,
});

/**
 * Wrap your root layout with this provider.
 * Detects the platform once and shares it via context.
 */
export function PlatformProvider({ children }: { children: React.ReactNode }) {
  const [isApp, setIsApp] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    setIsApp(ua.includes("AsaliSwadAndroid"));
    setMounted(true);
  }, []);

  return (
    <PlatformContext.Provider value={{ isApp, isWeb: !isApp, mounted }}>
      {children}
    </PlatformContext.Provider>
  );
}

/** Use this hook anywhere to get the current platform. */
export function usePlatform() {
  return useContext(PlatformContext);
}
