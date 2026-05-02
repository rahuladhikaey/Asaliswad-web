"use client";

import { usePlatform } from "@/context/PlatformContext";

/**
 * AppShell — wraps content that should only render inside the Android app.
 * On the website (browser), this renders nothing.
 *
 * Usage: wrap any component/section that is APP-ONLY.
 *
 * <AppShell>
 *   <MyAppOnlyComponent />
 * </AppShell>
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { isApp, mounted } = usePlatform();
  if (!mounted || !isApp) return null;
  return <>{children}</>;
}

/**
 * WebShell — wraps content that should only render in the web browser.
 * On the Android app (WebView), this renders nothing.
 *
 * Usage: wrap any component/section that is WEB-ONLY.
 *
 * <WebShell>
 *   <MyWebOnlyComponent />
 * </WebShell>
 */
export function WebShell({ children }: { children: React.ReactNode }) {
  const { isWeb, mounted } = usePlatform();
  if (!mounted || !isWeb) return null;
  return <>{children}</>;
}

/**
 * PlatformSwitch — renders different content based on platform.
 * This is the most explicit way to have different UI per platform.
 *
 * Usage:
 * <PlatformSwitch
 *   app={<AppVersionOfComponent />}
 *   web={<WebVersionOfComponent />}
 * />
 */
export function PlatformSwitch({
  app,
  web,
}: {
  app: React.ReactNode;
  web: React.ReactNode;
}) {
  const { isApp, mounted } = usePlatform();
  if (!mounted) return null;
  return <>{isApp ? app : web}</>;
}
