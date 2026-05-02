"use client";

import { usePlatform } from "@/context/PlatformContext";
import { Header } from "@/components/Header";

interface AppLayoutWrapperProps {
  children: React.ReactNode;
  footer: React.ReactNode;
  bottomNav: React.ReactNode;
}

/**
 * AppLayoutWrapper — The core platform separation component.
 *
 * ┌─────────────────────────────────────────────────────┐
 * │  WEBSITE (Browser)          APP (Android WebView)   │
 * │  ─────────────────          ──────────────────────  │
 * │  ✅ Header/Navbar           ❌ No Header             │
 * │  ✅ Footer                  ❌ No Footer             │
 * │  ❌ No BottomNav            ✅ BottomNav             │
 * │  Normal padding             pb-20 (for BottomNav)   │
 * └─────────────────────────────────────────────────────┘
 *
 * Any UI changes in this file ONLY affect layout framing.
 * Page content (children) is the same for both platforms —
 * use <AppShell>, <WebShell>, or <PlatformSwitch> inside pages
 * to further differentiate per-page UI.
 */
export function AppLayoutWrapper({
  children,
  footer,
  bottomNav,
}: AppLayoutWrapperProps) {
  const { isApp, mounted } = usePlatform();

  // Before hydration: render neutral layout (no header/footer flash)
  if (!mounted) {
    return (
      <main className="min-h-screen">
        {children}
      </main>
    );
  }

  // ── ANDROID APP LAYOUT ──────────────────────────────────────────
  if (isApp) {
    return (
      <>
        {/* No header, no footer — pure content + bottom nav space */}
        <main className="min-h-screen pb-20">
          {children}
        </main>
        {/* Bottom navigation bar — app only */}
        {bottomNav}
      </>
    );
  }

  // ── WEB BROWSER LAYOUT ──────────────────────────────────────────
  return (
    <>
      {/* Top navigation header — web only */}
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      {/* Footer — web only */}
      {footer}
    </>
  );
}
