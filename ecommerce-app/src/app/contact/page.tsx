import { Header } from "@/components/Header";
import Image from "next/image";
import qrImage from "./QR.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header title="Contact Us" subtitle="Get in Touch" />
      <main className="px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <section className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-600">Get in touch</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  We’re here to help with orders, feedback, or wholesale inquiries.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Reach out to our friendly support team and we will respond as soon as possible via email.
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-green-600 p-8 text-white shadow-lg sm:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-100/90">Contact details</p>
                <div className="mt-8 space-y-6 text-sm leading-7">
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:connect.asaliswad2026@gmail.com" className="mt-2 inline-block text-slate-100/90 transition hover:text-white">
                      connect.asaliswad2026@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="mt-2 text-slate-100/90">Mon – Sun: 9:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-600">Social Media</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">Reach out to us, or visit our store.</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">Our product available Visit us</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">123 Market Street, Local City, India</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">Instagram</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Scan or click to connect and see our latest updates!</p>
                  </div>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 block p-2 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-105"
                  >
                    <Image
                      src={qrImage}
                      alt="Instagram QR Code"
                      width={80}
                      height={80}
                      className="rounded-xl object-contain object-center"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

