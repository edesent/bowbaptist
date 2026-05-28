"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

export default function Welcome() {
  return (
    <section id="welcome" className="py-24 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* The historic 1837 stone meetinghouse + Est. badge */}
          <AnimateOnScroll>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-pine-deep/10">
                <img
                  src="/building.jpg"
                  alt="The historic stone meetinghouse of Bow Baptist Church, built in 1837 in Weathersfield Bow, Vermont"
                  className="w-full aspect-[4/3] object-cover block"
                />
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
              <div className="mb-7 p-5 rounded-xl bg-cream border-l-4 border-harvest">
                <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-harvest mb-2">
                  A Joyful Announcement
                </p>
                <p className="text-text-body leading-relaxed">
                  By unanimous vote, the church family has called{" "}
                  <strong className="text-text-dark">Pastor Wesley Allen</strong>{" "}
                  to be our pastor. We are rejoicing and hopeful of a bright future.
                  Pastor Allen officially begins his ministry on{" "}
                  <strong className="text-text-dark">June 1, 2026</strong>.
                </p>
              </div>
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
