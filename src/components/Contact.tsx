"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { Peaks } from "./Ridge";

const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=1102+Route+5,+Weathersfield,+VT+05156";
const MAP_VIEW =
  "https://www.google.com/maps/search/?api=1&query=Bow+Baptist+Church,+1102+Route+5,+Weathersfield,+VT+05156";

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

// Hand-illustrated locator — Weathersfield Bow, VT
// Custom SVG, fully owned, brand-matched (no third-party iframe).
function LocatorMap() {
  return (
    <svg
      viewBox="0 0 600 480"
      className="w-full block font-serif"
      role="img"
      aria-labelledby="locator-title"
    >
      <title id="locator-title">
        Bow Baptist Church is located at 1102 Route 5 in Weathersfield Bow, Vermont —
        along Route 5 between Ascutney to the north and Springfield to the south, with the
        Connecticut River to the east and the Green Mountains to the west.
      </title>

      <defs>
        <linearGradient id="lmBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f0e0" />
          <stop offset="1" stopColor="#ece0c6" />
        </linearGradient>
        <linearGradient id="lmRiver" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5d8770" />
          <stop offset="0.5" stopColor="#7c9885" />
          <stop offset="1" stopColor="#4a7a5e" />
        </linearGradient>
        <radialGradient id="lmMarkerGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd98a" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* parchment background */}
      <rect width="600" height="480" fill="url(#lmBg)" />

      {/* subtle paper edge frame */}
      <rect
        x="14"
        y="14"
        width="572"
        height="452"
        fill="none"
        stroke="#8a5a2e"
        strokeWidth="1.4"
        strokeDasharray="4 6"
        opacity="0.45"
      />

      {/* "Green Mountains" — contour-line elevation, west side */}
      <g opacity="0.22" stroke="#2f5841" strokeWidth="1.2" fill="none">
        <path d="M30,90 Q90,68 160,96" />
        <path d="M22,128 Q86,108 162,134" />
        <path d="M18,170 Q82,150 162,176" />
        <path d="M22,214 Q88,196 168,220" />
        <path d="M28,258 Q92,240 168,264" />
        <path d="M30,304 Q96,286 168,310" />
        <path d="M30,348 Q92,328 162,354" />
        <path d="M30,392 Q92,374 162,398" />
      </g>
      <text
        x="34"
        y="64"
        fontSize="10"
        letterSpacing="3"
        fill="#2f5841"
        opacity="0.7"
      >
        GREEN MOUNTAINS
      </text>

      {/* Connecticut River — east edge */}
      <path
        d="M520,0 C508,80 540,160 522,240 C504,320 540,400 522,480 L600,480 L600,0 Z"
        fill="url(#lmRiver)"
      />
      <path
        d="M548,20 C536,80 558,160 548,240 C538,320 562,400 552,460"
        stroke="#cfddd2"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <text
        x="560"
        y="244"
        fontSize="10"
        letterSpacing="3"
        fill="#f5eede"
        textAnchor="middle"
        transform="rotate(90 560 244)"
      >
        CONNECTICUT RIVER
      </text>

      {/* Route 5 — winding N–S, the church's road */}
      <g strokeLinecap="round" fill="none">
        <path
          d="M280,20 C320,90 270,160 308,224 C346,288 280,348 320,420 L320,480"
          stroke="#5e3d22"
          strokeWidth="16"
        />
        <path
          d="M280,20 C320,90 270,160 308,224 C346,288 280,348 320,420 L320,480"
          stroke="#b98344"
          strokeWidth="11"
        />
        <path
          d="M280,20 C320,90 270,160 308,224 C346,288 280,348 320,420 L320,480"
          stroke="#f5eede"
          strokeWidth="1.4"
          strokeDasharray="6 7"
        />
      </g>
      <text
        x="262"
        y="28"
        fontSize="10"
        letterSpacing="2.5"
        fill="#5e3d22"
        textAnchor="end"
      >
        ROUTE 5
      </text>

      {/* directional cues */}
      <text x="320" y="58" fontSize="11" fontStyle="italic" fill="#7e6a52" textAnchor="middle">
        ↑ to Ascutney
      </text>
      <text x="320" y="466" fontSize="11" fontStyle="italic" fill="#7e6a52" textAnchor="middle">
        to Springfield ↓
      </text>

      {/* decorative pines around the marker / frame */}
      <g fill="#1e3a2b" opacity="0.85">
        <polygon points="70,440 92,440 81,408" />
        <polygon points="100,452 118,452 109,428" />
        <polygon points="46,448 64,448 55,422" />
        <polygon points="172,84 188,84 180,62" />
        <polygon points="206,118 220,118 213,98" />
        <polygon points="170,400 188,400 179,374" />
        <polygon points="208,432 224,432 216,408" />
      </g>

      {/* Compass rose */}
      <g transform="translate(548 56)">
        <circle r="22" fill="#f5eede" stroke="#8a5a2e" strokeWidth="1.4" opacity="0.85" />
        <path d="M0,-15 L4,0 L0,15 L-4,0 Z" fill="#5e3d22" />
        <path d="M0,-15 L4,0 L0,0 Z" fill="#8a5a2e" />
        <text
          x="0"
          y="-25"
          fontSize="9"
          fontWeight="700"
          letterSpacing="2"
          fill="#5e3d22"
          textAnchor="middle"
        >
          N
        </text>
      </g>

      {/* — Marker — */}
      {/* warm glow */}
      <circle cx="315" cy="248" r="74" fill="url(#lmMarkerGlow)" />

      {/* outer ring */}
      <circle
        cx="315"
        cy="248"
        r="40"
        fill="#f6efe2"
        stroke="#5e3d22"
        strokeWidth="2"
      />
      {/* pine disc */}
      <circle cx="315" cy="248" r="34" fill="#1e3a2b" />

      {/* meetinghouse glyph (white) — same motif as the hero */}
      <g transform="translate(315 250)" fill="#f6efe2">
        <polygon points="-16,4 0,-12 16,4" />
        <rect x="-13" y="4" width="26" height="16" />
        <rect x="-3" y="-12" width="6" height="14" />
        <polygon points="-5,-12 0,-22 5,-12" />
        <rect x="-1" y="-28" width="2" height="7" />
        <rect x="-4" y="-26" width="8" height="2" />
      </g>

      {/* marker label below */}
      <g textAnchor="middle">
        <text
          x="315"
          y="320"
          fontSize="15"
          fontWeight="600"
          fill="#1d2a22"
        >
          Bow Baptist Church
        </text>
        <text x="315" y="338" fontSize="12" fill="#5f6b60">
          1102 Route 5 · Weathersfield Bow
        </text>
      </g>
    </svg>
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

          {/* Locator + directions */}
          <AnimateOnScroll delay={150}>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-pine-deep/10 mb-5 bg-cream">
                <LocatorMap />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={MAP_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-pine text-cream font-semibold text-sm tracking-wide uppercase px-6 py-3.5 rounded-full border-2 border-pine hover:bg-pine-mid hover:border-pine-mid hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Get Directions
                </a>
                <a
                  href={MAP_VIEW}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-pine font-semibold text-sm tracking-wide uppercase px-6 py-3.5 rounded-full border-2 border-pine/30 hover:border-pine hover:-translate-y-0.5 transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
