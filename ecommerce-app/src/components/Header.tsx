"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { CartHeaderLink } from "./CartHeaderLink";
import UserMenu from "./UserMenu";
import { MobileDrawer } from "./MobileDrawer";

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export function Header({ 
  title = "Premium Taste", 
  subtitle = "Direct to your Door 📍" 
}: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/60 bg-white/80 px-4 py-3 backdrop-blur-xl md:px-8">
        {/* Left Side: Back Button, Logo & Labels */}
        <div className="flex items-center gap-3 md:gap-4">
          {!isHome && (
            <button
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all active:scale-90"
              aria-label="Go Back"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          <Link href="/" className="flex items-center justify-center transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Asali Swad Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-xl object-cover shadow-md border border-slate-100" 
            />
          </Link>
          <div className="hidden flex-col md:flex">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
              {title}
            </span>
            <span className="text-sm font-bold text-slate-800">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Desktop Search (Optional - usually on homepage) */}
        {/* We can add a search prop if needed, but for now keeping it simple as per original designs */}

        {/* Right Side: Actions & Drawer Trigger */}
        <div className="flex items-center gap-2 md:gap-4">
          <UserMenu />
          <CartHeaderLink />
          
          {/* Hamburger Menu - Tablet & Phone only */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all active:scale-95 lg:hidden"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
}
