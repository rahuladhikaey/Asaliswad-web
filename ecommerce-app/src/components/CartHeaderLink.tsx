"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartHeaderLink() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-500 relative">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span className="hidden md:inline">Cart</span>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white shadow-sm">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
