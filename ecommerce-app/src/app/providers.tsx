"use client";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { PlatformProvider } from "@/context/PlatformContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PlatformProvider>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>{children}</CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </PlatformProvider>
  );
}
