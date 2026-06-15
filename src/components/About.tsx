"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-gold mb-3">
            Get to Know Us
          </span>
          <Peaks className="text-gold-light mb-5" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-4">
            A gospel witness in the Vermont hills
          </h2>
          <p className="text-lg text-text-light">
            For nearly two centuries, the people of Bow Baptist Church have gathered to
            worship Christ and proclaim His Word in Weathersfield Bow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Story */}
          <AnimateOnScroll delay={0}>
            <a
              href="/history"
              className="group block h-full bg-cream rounded-2xl overflow-hidden shadow-sm ring-1 ring-navy-deep/[.06] hover:-translate-y-1.5 hover:shadow-lg transition-all"
            >
              <div className="h-44 overflow-hidden">
                <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
                  <rect width="400" height="220" fill="#1f3354" />
                  <path d="M0,150 L90,118 L180,148 L280,112 L360,144 L400,124 L400,220 L0,220 Z" fill="#34507d" />
                  <path d="M0,186 L120,160 L260,188 L400,162 L400,220 L0,220 Z" fill="#5b78a8" opacity="0.6" />
                  <g transform="translate(178 120)" fill="#f3ece0">
                    <polygon points="0,30 22,12 44,30" />
                    <rect x="5" y="30" width="34" height="26" />
                    <rect x="16" y="-6" width="12" height="20" />
                    <polygon points="13,-6 22,-22 31,-6" />
                    <rect x="20.5" y="-32" width="3" height="12" />
                    <rect x="16" y="-29" width="12" height="3" />
                  </g>
                </svg>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2.5">Our Story</h3>
                <p className="text-[0.95rem] text-text-light leading-relaxed mb-4">
                  Founded in 1837, our little church has weathered nearly two centuries —
                  from a hand-hewn stone meetinghouse to the faithful family we are today.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brass group-hover:gap-2 transition-all">
                  Read our history <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </AnimateOnScroll>

          {/* What We Believe */}
          <AnimateOnScroll delay={120}>
            <a
              href="/beliefs"
              className="group block h-full bg-cream rounded-2xl overflow-hidden shadow-sm ring-1 ring-navy-deep/[.06] hover:-translate-y-1.5 hover:shadow-lg transition-all"
            >
              <div className="h-44 overflow-hidden">
                <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
                  <rect width="400" height="220" fill="#8a6a30" />
                  <rect width="400" height="220" fill="#b8985a" opacity="0.35" />
                  <g transform="translate(200 110)" stroke="#f3ece0" strokeWidth="3" fill="none" strokeLinejoin="round">
                    <path d="M0,-44 C-26,-58 -58,-58 -84,-44 L-84,40 C-58,26 -26,26 0,40 C26,26 58,26 84,40 L84,-44 C58,-58 26,-58 0,-44 Z" fill="#8a6a30" />
                    <path d="M0,-44 L0,40" />
                    <path d="M0,-30 L0,-6 M-12,-18 L12,-18" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2.5">What We Believe</h3>
                <p className="text-[0.95rem] text-text-light leading-relaxed mb-4">
                  An Independent Baptist church standing on the King James Bible and the
                  great fundamentals of the Christian faith.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brass group-hover:gap-2 transition-all">
                  Our statement of faith <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </AnimateOnScroll>

          {/* How to Be Saved */}
          <AnimateOnScroll delay={240}>
            <a
              href="/how-to-be-saved"
              className="group block h-full bg-cream rounded-2xl overflow-hidden shadow-sm ring-1 ring-navy-deep/[.06] hover:-translate-y-1.5 hover:shadow-lg transition-all"
            >
              <div className="h-44 overflow-hidden">
                <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <radialGradient id="abGlow" cx="0.5" cy="0.35" r="0.6">
                      <stop offset="0" stopColor="#ffe7b3" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#ffe7b3" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="220" fill="#14233f" />
                  <circle cx="200" cy="80" r="120" fill="url(#abGlow)" />
                  <g transform="translate(200 96)" fill="#f3ece0">
                    <rect x="-7" y="-46" width="14" height="96" rx="2" />
                    <rect x="-30" y="-26" width="60" height="14" rx="2" />
                  </g>
                  <path d="M0,178 L120,162 L260,180 L400,160 L400,220 L0,220 Z" fill="#1f3354" />
                </svg>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2.5">How to Be Saved</h3>
                <p className="text-[0.95rem] text-text-light leading-relaxed mb-4">
                  The most important question in life: do you know that you have eternal
                  life? See what the Bible says about being born again.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brass group-hover:gap-2 transition-all">
                  Find peace with God <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
