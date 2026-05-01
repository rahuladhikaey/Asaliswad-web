"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingCart, User, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    // Detect if we are running inside the official Android App
    const isAndroidApp = navigator.userAgent.includes("AsaliSwadAndroid");
    setIsApp(isAndroidApp);
  }, []);

  // Hide BottomNav on Admin pages OR if not accessed via the App
  if (pathname?.startsWith("/admin") || !isApp) return null;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Search", href: "/products", icon: Search },
    { name: "Cart", href: "/cart", icon: ShoppingCart, badge: totalItems },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-slate-200/60 bg-white/80 px-4 backdrop-blur-xl lg:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative flex flex-col items-center justify-center gap-1 transition-all active:scale-90 ${isActive ? "text-emerald-600" : "text-slate-400"
              }`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${isActive ? "bg-emerald-50" : "bg-transparent"
              }`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            {item.badge ? (
              <span className="absolute -right-1 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white shadow-lg shadow-emerald-600/20">
                {item.badge}
              </span>
            ) : null}
            <span className="text-[10px] font-black uppercase tracking-widest">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
