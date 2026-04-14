import { Header } from "@/components/Header";

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
                  <p className="mt-2 text-slate-100/90">Mon – Sun: 8:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-600">Need support?</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">Send us a message and we’ll take care of the rest.</h2>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">Visit us</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">123 Market Street, Local City, India</p>
              </div>
            </div>

            <form action="#" method="post" className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-700">
                <span>Message</span>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help"
                  className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-green-500"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
    </div>
  );
}

