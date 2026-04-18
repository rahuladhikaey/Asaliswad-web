"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { AddToCartButton } from "@/components/AddToCartButton";
import { BuyNowButton } from "@/components/BuyNowButton";
import { ShoppingCart, Zap, Star, ShieldCheck, Truck, RefreshCcw, Tag, ChevronRight } from "lucide-react";

export default function ProductDetailTemplate({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image_url);
  const images = product.images || [product.image_url];

  const hasDiscount = product.mrp && product.mrp > product.price;
  const discountPercent = hasDiscount ? Math.round(((product.mrp! - product.price) / product.mrp!) * 100) : 0;


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">

          {/* LEFT COLUMN: Gallery & Buttons */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:h-[500px] pb-2 md:w-20 shrink-0">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`group relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all md:w-full ${selectedImage === img ? "border-[#2874f0]" : "border-slate-100 hover:border-slate-300"
                          }`}
                      >
                        <img src={img} alt={`${product.name} ${idx}`} className="h-full w-full object-contain p-1" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Main Image */}
                <div className="relative flex-1 aspect-[1/1.2] overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 group">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Heart Icon (Wishlist) */}
                  <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-slate-400 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons (Flipkart Style) - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4 mt-4">
                <AddToCartButton 
                  product={product} 
                  className="flex h-14 items-center justify-center gap-2 rounded-lg bg-[#388e3c] text-sm font-black uppercase tracking-widest text-white shadow-lg transition-transform active:scale-95"
                />
                <div className="w-full">
                   <BuyNowButton 
                     product={product} 
                     className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#2e7d32] text-sm font-black uppercase tracking-widest text-white shadow-lg transition-transform active:scale-95"
                   />
                </div>
              </div>


            </div>
          </div>

          {/* RIGHT COLUMN: Product Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Home</span> <ChevronRight size={12} />
              <span>{product.category_name || "Products"}</span> <ChevronRight size={12} />
              <span className="text-slate-900 truncate text-[10px] sm:text-xs">{product.name}</span>
            </nav>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-slate-900 md:text-3xl leading-tight">
                {product.name}
              </h1>
            </div>


            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-900">₹{product.price}</span>
                {hasDiscount && (
                  <>
                    <span className="text-lg font-bold text-slate-400 line-through">₹{product.mrp}</span>
                    <span className="text-lg font-black text-[#388e3c]">{discountPercent}% off</span>
                  </>
                )}
              </div>
              <p className="text-xs font-bold text-[#388e3c]">Special Price including all taxes</p>
            </div>


            {/* Available Offers */}
            {product.offers && product.offers.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-base font-black text-slate-900">Available Offers</h3>
                <div className="space-y-3">
                  {product.offers.map((offer, i) => (
                    <div key={i} className="flex gap-3 text-sm font-medium text-slate-600">
                      <Tag className="shrink-0 text-[#388e3c] mt-0.5" size={16} />
                      <span>{offer} <span className="text-[#2874f0] font-black cursor-pointer ml-1 text-xs">T&C</span></span>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Description & Highlights */}
            <div className="grid gap-8 md:grid-cols-2 pt-4 border-t border-slate-100">

              <div className="space-y-4">
                <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-2">Product Description</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-600">{product.description}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-2">Highlights</h3>
                <ul className="space-y-2 list-disc list-inside text-sm font-medium text-slate-600">
                  <li>Original & Pure Quality</li>
                  <li>Directly from Sources</li>
                  <li>Premium Packaging</li>
                  <li>Best for Daily Use</li>
                </ul>
              </div>
            </div>

            {/* Seller Info */}
            <div className="p-6 rounded-2xl bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border border-slate-200">
                  <ShieldCheck className="text-[#2874f0]" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Asali Swad Store</h4>
                  <p className="text-xs font-bold text-slate-400">24Hr. Return Policy</p>
                </div>
              </div>
              <button className="text-[#2874f0] text-sm font-black hover:underline">View Retailer</button>
            </div>




            {/* Features (Bottom Icons) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12">
              <div className="flex flex-col items-center text-center p-4">
                <Truck className="mb-4 text-[#2874f0]" size={32} />
                <span className="text-xs font-black text-slate-900 uppercase">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <ShieldCheck className="mb-4 text-[#2874f0]" size={32} />
                <span className="text-xs font-black text-slate-900 uppercase">Secure Pay</span>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <RefreshCcw className="mb-4 text-[#2874f0]" size={32} />
                <span className="text-xs font-black text-slate-900 uppercase">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Tag className="mb-4 text-[#2874f0]" size={32} />
                <span className="text-xs font-black text-slate-900 uppercase">Original Item</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR FOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] flex h-16 w-full items-center bg-white border-t border-slate-100 lg:hidden shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
        <div className="grid grid-cols-2 h-full w-full">
          <AddToCartButton 
            product={product} 
            className="flex items-center justify-center bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest border-r border-slate-100 hover:bg-slate-50 transition-colors"
          />
          <BuyNowButton 
            product={product} 
            className="flex items-center justify-center bg-[#388e3c] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#2e7d32] transition-colors"
          />
        </div>
      </div>
      
      {/* Padding for bottom bar on mobile */}
      <div className="h-20 lg:hidden" />
    </div>

  );
}
