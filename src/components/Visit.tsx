"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

export default function Visit() {
  return (
    <section id="visit" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-navy-deep/10">
              <img
                src="/family-fun-day-fb.png"
                alt="Special event at Bow Baptist Church on August 8"
                className="w-full aspect-[4/5] object-cover block"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-gold mb-3">
                Special Events
              </span>
              <Peaks className="text-gold-light mb-5" />
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-6">
                Join Us August 8
              </h2>

              <div className="bg-warm-white rounded-2xl p-7 md:p-8 shadow-sm ring-1 ring-navy-deep/[.06] mb-6">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-gold mb-2">
                  Date &amp; Time
                </p>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-text-dark">
                  August 8 • 11:30 AM–3:30 PM
                </p>
              </div>

              <p className="text-lg text-text-light leading-relaxed">
                We would love to have you and your family join us for this special event at
                Bow Baptist Church. Come enjoy a wonderful afternoon of fellowship with us.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
