// Custom Green Mountains scene — fully owned vector art (no stock photos).
// Twilight over the Vermont hills with a white meetinghouse and lit windows.

function Pine({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-3" y="0" width="6" height="15" fill="#241a0f" />
      <polygon points="-22,4 22,4 0,-30" fill="#0f2016" />
      <polygon points="-17,-18 17,-18 0,-46" fill="#0f2016" />
      <polygon points="-12,-38 12,-38 0,-62" fill="#0f2016" />
    </g>
  );
}

export default function MountainHero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pine-deep"
    >
      {/* ── Scene ─────────────────────────────────────── */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#15323a" />
            <stop offset="0.42" stopColor="#39554f" />
            <stop offset="0.64" stopColor="#8a6c47" />
            <stop offset="0.8" stopColor="#c98a4e" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffe7b3" stopOpacity="0.95" />
            <stop offset="0.45" stopColor="#f4c878" stopOpacity="0.4" />
            <stop offset="1" stopColor="#f4c878" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="churchGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffd98a" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* sky + sun */}
        <rect width="1440" height="900" fill="url(#sky)" />
        <circle cx="860" cy="470" r="360" fill="url(#sunGlow)" />
        <circle cx="860" cy="486" r="46" fill="#ffeec2" opacity="0.85" />

        {/* far ridge */}
        <path
          d="M0,540 L130,478 L250,512 L380,452 L520,500 L660,448 L820,498 L980,452 L1140,500 L1280,460 L1440,496 L1440,900 L0,900 Z"
          fill="#5e7d72"
          opacity="0.92"
        />

        {/* drifting mist */}
        <g className="animate-mist">
          <ellipse cx="640" cy="556" rx="720" ry="34" fill="#dfe7df" opacity="0.18" />
          <ellipse cx="1080" cy="588" rx="380" ry="22" fill="#dfe7df" opacity="0.14" />
        </g>

        {/* mid ridge */}
        <path
          d="M0,620 L150,560 L320,610 L480,548 L640,604 L820,556 L1000,610 L1180,560 L1340,606 L1440,580 L1440,900 L0,900 Z"
          fill="#3f5f4f"
        />

        {/* near ridge */}
        <path
          d="M0,710 L200,656 L380,704 L560,648 L720,706 L900,656 L1080,708 L1260,660 L1440,704 L1440,900 L0,900 Z"
          fill="#21392b"
        />

        {/* meetinghouse nestled in the hills */}
        <circle cx="714" cy="672" r="78" fill="url(#churchGlow)" />
        <g>
          <polygon points="686,672 714,648 742,672" fill="#f4eedf" />
          <rect x="692" y="672" width="44" height="29" fill="#f4eedf" />
          <rect x="706" y="628" width="13" height="25" fill="#f4eedf" />
          <polygon points="703,629 712.5,609 722,629" fill="#f4eedf" />
          <rect x="711" y="599" width="3" height="11" fill="#f4eedf" />
          <rect x="708" y="602" width="9" height="3" fill="#f4eedf" />
          {/* glowing windows + door */}
          <rect x="697" y="679" width="6" height="11" rx="1" fill="#ffce72" />
          <rect x="725" y="679" width="6" height="11" rx="1" fill="#ffce72" />
          <rect x="709" y="685" width="10" height="16" rx="1" fill="#6b4422" />
        </g>

        {/* foreground hill */}
        <path
          d="M0,812 L260,786 L560,812 L840,782 L1140,812 L1440,790 L1440,900 L0,900 Z"
          fill="#14261b"
        />

        {/* framing pines */}
        <Pine x={92} y={862} s={1.2} />
        <Pine x={188} y={878} s={0.82} />
        <Pine x={36} y={888} s={0.72} />
        <Pine x={1362} y={860} s={1.25} />
        <Pine x={1268} y={880} s={0.88} />
        <Pine x={1178} y={890} s={0.62} />
      </svg>

      {/* legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-deep/45 via-pine-deep/10 to-pine-deep/55" />

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.32em] uppercase text-oak-pale mb-4 animate-fade-up animation-delay-200">
          Weathersfield Bow · Vermont
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] mb-6 animate-fade-up animation-delay-400 drop-shadow-sm">
          Bow Baptist Church
        </h1>
        <div className="w-20 h-[3px] bg-oak-light mx-auto mb-6 rounded animate-fade-up animation-delay-600" />
        <p className="font-serif text-xl md:text-2xl italic text-white/90 leading-relaxed max-w-xl mx-auto mb-3 animate-fade-up animation-delay-800">
          A gospel light in the hills of Vermont since 1837.
        </p>
        <p className="text-sm text-oak-pale/90 mb-9 animate-fade-up animation-delay-900">
          Bible preaching · Traditional hymns · A welcoming family
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#contact"
            className="inline-block bg-barn text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-barn hover:bg-barn-dark hover:border-barn-dark hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Plan a Visit
          </a>
          <a
            href="#services"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-white/55 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
          >
            Service Times
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] animate-fade-up animation-delay-1300">
        <a
          href="#welcome"
          className="flex flex-col items-center gap-2 text-white/55 text-xs tracking-[0.15em] uppercase"
        >
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/45 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
