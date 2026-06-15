export default function ScriptureBanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-navy-deep">
      {/* mountain + glow backdrop */}
      <svg
        viewBox="0 0 1440 460"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="sbGlow" cx="0.5" cy="0.3" r="0.6">
            <stop offset="0" stopColor="#caa15f" stopOpacity="0.3" />
            <stop offset="1" stopColor="#caa15f" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="460" fill="#14233f" />
        <rect width="1440" height="460" fill="url(#sbGlow)" />
        <path d="M0,300 L220,244 L440,296 L660,236 L880,294 L1100,240 L1320,296 L1440,260 L1440,460 L0,460 Z" fill="#1f3354" opacity="0.65" />
        <path d="M0,380 L260,336 L520,382 L780,334 L1040,382 L1300,338 L1440,372 L1440,460 L0,460 Z" fill="#213a5e" />
      </svg>

      <div className="relative z-[1] max-w-3xl mx-auto px-6 text-center">
        <blockquote>
          <p className="font-serif text-2xl md:text-[2.1rem] italic text-cream leading-relaxed mb-6">
            &ldquo;Ye are the light of the world. A city that is set on an hill cannot be
            hid.&rdquo;
          </p>
          <cite className="text-sm font-semibold tracking-[0.18em] uppercase text-gold-pale not-italic">
            — Matthew 5:14
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
