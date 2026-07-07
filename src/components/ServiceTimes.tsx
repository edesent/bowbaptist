"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

type Service = {
  title: string;
  time: string;
  day: string;
  desc: string;
  featured?: boolean;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Sunday School",
    time: "10:00 AM",
    day: "Sunday",
    desc: "Bible study classes for every age — children, youth, and adults.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 12c-4-3-9-3-13 0v22c4-3 9-3 13 0 4-3 9-3 13 0V12c-4-3-9-3-13 0z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 12v22" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Morning Worship",
    time: "11:00 AM",
    day: "Sunday",
    featured: true,
    desc: "Our main service — hymns, prayer, and Bible preaching from the King James Bible.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 6v8M24 8l8 8v24H16V16l8-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M21 6h6M24 24v8M20 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Evening Service",
    time: "6:00 PM",
    day: "Sunday",
    desc: "An evening gathering for worship, fellowship, and the preaching of the Word.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M30 8a14 14 0 1 0 10 23A16 16 0 0 1 30 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Prayer Meeting",
    time: "6:00 PM",
    day: "Wednesday",
    desc: "Midweek Bible study and prayer to encourage one another in the faith.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 40c-2-8-8-10-8-18a8 8 0 0 1 16 0c0 8-6 10-8 18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServiceTimes() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-navy-deep">
      {/* mountain backdrop */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-90"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="stGlow" cx="0.5" cy="0.2" r="0.6">
            <stop offset="0" stopColor="#caa15f" stopOpacity="0.22" />
            <stop offset="1" stopColor="#caa15f" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="600" fill="#14233f" />
        <rect width="1440" height="600" fill="url(#stGlow)" />
        <path d="M0,420 L220,360 L420,408 L640,348 L860,404 L1080,352 L1300,406 L1440,372 L1440,600 L0,600 Z" fill="#1f3354" opacity="0.7" />
        <path d="M0,500 L260,452 L520,500 L780,448 L1040,500 L1300,456 L1440,492 L1440,600 L0,600 Z" fill="#213a5e" />
      </svg>

      <div className="relative z-[1] max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-gold-pale mb-3">
            Gather With Us
          </span>
          <Peaks className="text-gold-light mb-5" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Service Times
          </h2>
          <p className="text-lg text-cream/70">
            We&rsquo;d love to see you and your family at any of our weekly gatherings.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 90}>
              <div
                className={`relative h-full rounded-2xl p-7 text-center transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  s.featured
                    ? "bg-gold/20 border border-gold-light/40"
                    : "bg-white/[.05] border border-white/10 hover:bg-white/[.08]"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brass text-white text-[0.62rem] font-bold tracking-[0.12em] uppercase px-4 py-1 rounded-full">
                    Main Service
                  </span>
                )}
                <div className={`flex justify-center mb-4 ${s.featured ? "text-gold-light" : "text-sky"}`}>
                  {s.icon}
                </div>
                <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-cream/50 mb-1">
                  {s.day}
                </p>
                <h3 className="font-serif text-lg font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-2xl font-bold text-gold-light mb-3">{s.time}</p>
                <p className="text-sm text-cream/60 leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <p className="text-center text-cream/50 text-sm mt-12">
          1102 Route 5, Springfield, VT 05156 ·{" "}
          <a href="tel:+18025464902" className="text-gold-pale hover:text-gold-light transition-colors">
            (802) 546-4902
          </a>
        </p>
      </div>
    </section>
  );
}
