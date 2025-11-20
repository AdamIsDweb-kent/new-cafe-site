import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate min-h-[70vh] bg-slate-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/cafe-st-pierre-hero.jpg"
          alt="Cafe St Pierre exterior on St Peter's Street"
          className="h-full w-full object-cover"
        />
        {/* navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-4 py-16">
        <div className="max-w-xl space-y-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/80">
            Café &amp; Bistro Français
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Cafe St&nbsp;Pierre
          </h1>

          <p className="text-base text-slate-100/90 sm:text-lg">
            Highstreet haven for French pastries, rustic café dishes and
            delicious coffee – right in the heart of Canterbury.
          </p>

          <p className="text-sm text-slate-200/80">
            41 St Peter&apos;s St, just off the high street – perfect for breakfast,
            lunch or an evening treat.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Explore Our Menu
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Find Us in Canterbury
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
