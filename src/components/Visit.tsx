"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

const expectations = [
  {
    title: "A Friendly Welcome",
    desc: "Our people are friendly and always excited to see new faces. You'll be greeted warmly and never made to feel out of place.",
    icon: (
      <path d="M24 26a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 38a14 14 0 0 1 28 0" />
    ),
  },
  {
    title: "Bible Preaching",
    desc: "Clear, Christ-centered preaching from the King James Bible — God's Word applied to everyday life.",
    icon: (
      <path d="M24 14c-4-3-9-3-13 0v20c4-3 9-3 13 0 4-3 9-3 13 0V14c-4-3-9-3-13 0zM24 14v20" />
    ),
  },
  {
    title: "Traditional Hymns",
    desc: "Heartfelt, traditional hymns of the faith that lift our voices together in worship.",
    icon: (
      <path d="M18 34a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM38 30a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM18 34V14l20-4v20" />
    ),
  },
  {
    title: "For Every Age",
    desc: "Sunday School classes for children, ministries for youth, and a family-oriented atmosphere for all.",
    icon: (
      <path d="M16 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM32 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM6 38a10 10 0 0 1 20 0M24 38a10 10 0 0 1 18-5" />
    ),
  },
  {
    title: "Come As You Are",
    desc: "There's no dress code at the door. Whether in your Sunday best or casual clothes, you are welcome here.",
    icon: (
      <path d="M24 8l8 6-4 4v22H20V18l-4-4 8-6zM24 8v6" />
    ),
  },
  {
    title: "Caring & Counsel",
    desc: "A church family that walks with you — with pastoral care and counsel rooted in Scripture.",
    icon: (
      <path d="M38 18a7 7 0 0 0-14 0 7 7 0 0 0-14 0c0 9 14 18 14 18s14-9 14-18z" />
    ),
  },
];

export default function Visit() {
  return (
    <section id="visit" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro: photo + heading */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-16">
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-pine-deep/10">
              <img
                src="/fellowship.jpg"
                alt="A warm welcome among the church family at Bow Baptist Church"
                className="w-full aspect-[4/5] object-cover block"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-oak mb-3">
                Your First Visit
              </span>
              <Peaks className="text-oak-light mb-5" />
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-5">
                What to Expect
              </h2>
              <p className="text-lg text-text-light leading-relaxed">
                Visiting a church for the first time can feel like a big step. From the
                moment you arrive, you&rsquo;ll be met by friendly faces and the warmth of a
                church family that&rsquo;s genuinely glad you came. Here&rsquo;s a little of
                what you&rsquo;ll find when you join us.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 80}>
              <div className="h-full bg-warm-white rounded-2xl p-8 shadow-sm ring-1 ring-pine-deep/[.06] hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-pine/[.08] flex items-center justify-center mb-5">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 text-pine-mid"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] text-text-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
