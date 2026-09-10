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
                src="https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/t6Eo3MhkyCpnSCffRaCbmr1cmiRLqE2a/IMG_1502-4jm59cWWhmN5MRhgsCssnSVBjlTxkE.png"
                alt="Bow Baptist Church Missions Month — September 2026"
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
                Missions Month
              </h2>

              <div className="bg-warm-white rounded-2xl p-7 md:p-8 shadow-sm ring-1 ring-navy-deep/[.06] mb-6">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-gold mb-2">
                  September 2026 • Missions Month
                </p>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-text-dark">
                  Join us every Sunday in September
                </p>
              </div>

              <p className="text-lg text-text-light leading-relaxed">
                We would love to have you and your family join us for this special Missions
                Month at Bow Baptist Church. Come and enjoy a wonderful Sunday meeting these
                missionaries and hearing about the work God has called them to do.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
