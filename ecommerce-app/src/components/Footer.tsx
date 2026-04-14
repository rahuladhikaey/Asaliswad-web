import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 text-xl font-bold text-white">
              <span className="relative h-12 w-12 overflow-hidden rounded-2xl bg-yellow-400">
                <Image src="/favicon.ico" alt="Asali Swad logo" fill className="object-cover" />
              </span>
              Asali Swad
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              A fresh and reliable grocery experience for your neighborhood. Fast delivery, secure payments, and an easy shopping flow tailored for everyday essentials.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-400 sm:text-sm">
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2">Fresh produce</span>
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2">Quick orders</span>
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2">Secure checkout</span>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">Quick Access</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li><Link href="/" className="transition hover:text-white">Store Home</Link></li>
              <li><Link href="/products" className="transition hover:text-white">All Products</Link></li>
              <li><Link href="/cart" className="transition hover:text-white">Your Cart</Link></li>
              <li><Link href="/checkout" className="transition hover:text-white">Checkout</Link></li>
              <li><Link href="/assistant" className="transition hover:text-white">AI Assistant</Link></li>
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">Customer Care</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li><Link href="/admin" className="transition hover:text-white">Admin Portal</Link></li>
              <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Contact & Support</Link></li>
              <li><Link href="/" className="transition hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">Stay in touch</h3>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Get the latest deals, product drops, and store updates delivered straight to your inbox.
            </p>
            <form action="#" className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-3xl bg-green-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-green-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Asali Swad. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <Link href="mailto:connect.asaliswad2026@gmail.com" className="transition hover:text-white">connect.asaliswad2026@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

