"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

export default function Welcome() {
  return (
    <section id="welcome" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Designed Vermont vignette + Est. badge */}
          <AnimateOnScroll>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-pine-deep/10">
                <svg viewBox="0 0 600 500" className="w-full block" aria-hidden="true">
                  <defs>
                    <linearGradient id="wSky" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#bcd2cf" />
                      <stop offset="0.6" stopColor="#e7dcb9" />
                      <stop offset="1" stopColor="#f0e3c0" />
                    </linearGradient>
                    <radialGradient id="wSun" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0" stopColor="#fff6db" stopOpacity="0.9" />
                      <stop offset="1" stopColor="#fff6db" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="600" height="500" fill="url(#wSky)" />
                  <circle cx="430" cy="150" r="150" fill="url(#wSun)" />
                  <circle cx="430" cy="150" r="34" fill="#fff2c6" opacity="0.9" />
                  {/* layered hills */}
                  <path d="M0,250 L120,210 L260,242 L400,200 L520,238 L600,212 L600,500 L0,500 Z" fill="#7e9c8b" />
                  <path d="M0,310 L150,272 L320,312 L480,268 L600,304 L600,500 L0,500 Z" fill="#4f7860" />
                  <path d="M0,372 L180,332 L360,374 L540,330 L600,352 L600,500 L0,500 Z" fill="#2d5240" />
                  <path d="M0,440 L220,414 L460,440 L600,420 L600,500 L0,500 Z" fill="#1c3526" />
                  {/* meetinghouse */}
                  <g transform="translate(252 300)">
                    <polygon points="0,42 38,8 76,42" fill="#f6f0e2" />
                    <rect x="8" y="42" width="60" height="44" fill="#f6f0e2" />
                    <rect x="28" y="-18" width="20" height="40" fill="#f6f0e2" />
                    <polygon points="24,-18 38,-44 52,-18" fill="#f6f0e2" />
                    <rect x="36.5" y="-58" width="3" height="16" fill="#f6f0e2" />
                    <rect x="31" y="-54" width="14" height="3.5" fill="#f6f0e2" />
                    <rect x="32" y="56" width="14" height="30" rx="1" fill="#6b4422" />
                    <rect x="16" y="52" width="9" height="14" rx="1" fill="#cdd9c9" />
                    <rect x="53" y="52" width="9" height="14" rx="1" fill="#cdd9c9" />
                  </g>
                  {/* foreground pines */}
                  <g fill="#16291c">
                    <polygon points="70,470 110,470 90,408" />
                    <polygon points="500,470 548,470 524,396" />
                    <polygon points="520,470 560,470 540,418" />
                  </g>
                </svg>
              </div>
              {/* Est. badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 w-24 h-24 rounded-full bg-pine text-cream flex flex-col items-center justify-center shadow-lg ring-4 ring-warm-white">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-oak-pale">Est.</span>
                <span className="font-serif text-2xl font-semibold leading-none">1837</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Invitation */}
          <AnimateOnScroll delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-oak mb-3">
                A Warm Welcome
              </span>
              <Peaks className="text-oak-light mb-5" />
              <h2 className="font-serif text-3xl md:text-[2.6rem] font-semibold text-text-dark leading-[1.15] mb-6">
                You&rsquo;re invited to worship{" "}
                <em className="text-pine-mid italic">with us</em>
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-4">
                The warmth of a loving family is felt in every service at Bow Baptist
                Church. Our people are friendly and always excited to see new faces —
                whether you&rsquo;re exploring faith for the first time or looking for a
                church home in the hills of Vermont.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                We are an Independent Baptist church gathered around the preaching of
                God&rsquo;s Word from the King James Bible, traditional hymns, and
                heartfelt prayer. Come as you are — you&rsquo;ll find a friend here.
              </p>
              <p className="font-serif italic text-pine-mid mb-7">
                &ldquo;We&rsquo;d count it a joy to welcome you and your family this
                Sunday.&rdquo;
                <span className="not-italic block text-sm text-text-light mt-2 font-sans">
                  — Pastor Tom A. Faulk, Interim Pastor
                </span>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/pastor"
                  className="inline-block bg-pine text-cream font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-pine hover:bg-pine-mid hover:border-pine-mid hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Meet Our Pastor
                </a>
                <a
                  href="#contact"
                  className="inline-block text-pine font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-pine/30 hover:border-pine hover:-translate-y-0.5 transition-all"
                >
                  Plan a Visit
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
