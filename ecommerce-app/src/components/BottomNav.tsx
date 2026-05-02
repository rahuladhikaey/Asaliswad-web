"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { usePlatform } from "@/context/PlatformContext";

/**
 * BottomNav — Android app only.
 * Visibility is controlled by AppLayoutWrapper; this component
 * does a secondary guard to prevent rendering on admin pages.
 */
export function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { isApp, mounted } = usePlatform();

  // Guard: never show on browser, admin, or before hydration
  if (!mounted || !isApp || pathname?.startsWith("/admin")) return null;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Search", href: "/products", icon: Search },
    { name: "Cart", href: "/cart", icon: ShoppingCart, badge: totalItems },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <nav
      style={{ WebkitBackdropFilter: "blur(20px)" } as React.CSSProperties}
      className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-slate-200/60 bg-white/90 px-4 backdrop-blur-xl"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative flex flex-col items-center justify-center gap-0.5 transition-all active:scale-90 ${
              isActive ? "text-emerald-600" : "text-slate-400"
            }`}
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
                isActive ? "bg-emerald-50" : "bg-transparent"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </div>

            {/* Cart badge */}
            {item.badge ? (
              <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white shadow-lg shadow-emerald-600/20">
                {item.badge}
              </span>
            ) : null}

            <span className="text-[9px] font-black uppercase tracking-widest">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
