"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

const MAP_EMBED =
  "https://www.google.com/maps?q=Bow+Baptist+Church,+1102+Route+5,+Weathersfield,+VT+05156&output=embed";
const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=1102+Route+5,+Weathersfield,+VT+05156";

function Row({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 py-6 border-b border-pine-deep/[.08]">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-11 h-11 flex-shrink-0 text-pine-mid"
      >
        {icon}
      </svg>
      <div>
        <h3 className="font-serif text-lg font-semibold text-text-dark mb-1">{title}</h3>
        <div className="text-text-light">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-oak mb-3">
            Come Worship With Us
          </span>
          <Peaks className="text-oak-light mb-5" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-text-light">
            We&rsquo;d love to meet you. Here&rsquo;s everything you need to find us this
            Sunday.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info */}
          <div>
            <AnimateOnScroll>
              <Row
                title="Our Location"
                icon={
                  <>
                    <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26c0-7.5-6-14-14-14z" />
                    <circle cx="24" cy="18" r="5" />
                  </>
                }
              >
                1102 Route 5<br />
                Weathersfield Bow, VT 05156
              </Row>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <Row
                title="Phone"
                icon={
                  <path d="M14 6c2 0 3 6 3 8s-3 3-3 5 5 7 7 7 3-3 5-3 8 1 8 3-2 7-6 7C18 40 8 30 8 14c0-4 4-8 6-8z" />
                }
              >
                <a
                  href="tel:+18025464902"
                  className="text-barn font-semibold hover:text-barn-dark transition-colors"
                >
                  (802) 546-4902
                </a>
              </Row>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <Row
                title="Service Times"
                icon={
                  <>
                    <circle cx="24" cy="24" r="18" />
                    <path d="M24 13v11l8 4" />
                  </>
                }
              >
                <span className="block">Sunday — Sunday School 10 AM · Worship 11 AM · Evening 6 PM</span>
                <span className="block">Wednesday — Prayer Meeting 7 PM</span>
              </Row>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-8 p-7 bg-warm-white rounded-xl border-l-4 border-oak-light shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">
                  A note for first-time guests
                </h3>
                <p className="text-[0.95rem] text-text-light leading-relaxed">
                  Come as you are — there&rsquo;s no dress code at the door. You&rsquo;ll be
                  welcomed by friendly faces, and our services include traditional hymns,
                  prayer, and Bible preaching. We&rsquo;d love to greet you and answer any
                  questions you have.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Map */}
          <AnimateOnScroll delay={150}>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-pine-deep/10 mb-5">
                <iframe
                  title="Map to Bow Baptist Church"
                  src={MAP_EMBED}
                  className="w-full h-[340px] md:h-[420px] block border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-pine text-cream font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-pine hover:bg-pine-mid hover:border-pine-mid hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Get Directions
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
