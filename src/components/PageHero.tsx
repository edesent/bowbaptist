import { Ridge, c } from "./Ridge";

export default function PageHero({
  kicker,
  title,
  subtitle,
  bottom = c.warmWhite,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  bottom?: string;
}) {
  return (
    <>
      <section className="relative bg-pine-deep overflow-hidden pt-36 pb-20 md:pt-40 md:pb-24">
        <svg
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="phGlow" cx="0.5" cy="0.15" r="0.7">
              <stop offset="0" stopColor="#caa15f" stopOpacity="0.25" />
              <stop offset="1" stopColor="#caa15f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="500" fill="#14241b" />
          <rect width="1440" height="500" fill="url(#phGlow)" />
          <path d="M0,330 L220,272 L440,324 L660,266 L880,322 L1100,270 L1320,324 L1440,290 L1440,500 L0,500 Z" fill="#1e3a2b" opacity="0.6" />
          <path d="M0,410 L260,366 L520,412 L780,364 L1040,412 L1300,368 L1440,402 L1440,500 L0,500 Z" fill="#21392b" />
        </svg>

        <div className="relative z-[1] max-w-3xl mx-auto px-6 text-center text-cream">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-oak-pale mb-4">
            {kicker}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.08] mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-cream/75 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
      <Ridge top={c.pineDeep} bottom={bottom} />
    </>
  );
}
