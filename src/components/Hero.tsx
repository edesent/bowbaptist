// Hero — the real 1837 meetinghouse at golden hour, with a navy overlay for legibility.

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep"
    >
      {/* ── Background photo ───────────────────────────── */}
      <img
        src="/hero.png"
        alt="Bow Baptist Church — the historic 1837 stone meetinghouse and white steeple at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* legibility overlay — darken for white text, bottom-heavy */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/45 to-navy-deep/80" />
      <div className="absolute inset-0 bg-navy-deep/25" />

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-[2] text-center text-white max-w-3xl px-5 py-10">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.32em] uppercase text-gold-pale mb-4 animate-fade-up animation-delay-200">
          Weathersfield Bow · Vermont
        </p>
        <h1 className="flex justify-center mb-6 animate-fade-up animation-delay-400">
          <img
            src="/logo-white.png"
            alt="Bow Baptist Church"
            className="w-[min(80vw,540px)] h-auto drop-shadow-[0_2px_28px_rgba(10,18,36,0.6)]"
          />
        </h1>
        <div className="w-20 h-[3px] bg-gold-light mx-auto mb-6 rounded animate-fade-up animation-delay-600" />
        <p className="font-serif text-xl md:text-2xl italic text-white/90 leading-relaxed max-w-xl mx-auto mb-3 animate-fade-up animation-delay-800 [text-shadow:0_1px_12px_rgba(10,18,36,0.55)]">
          A gospel light in the hills of Vermont since 1837.
        </p>
        <p className="text-sm text-gold-pale/90 mb-9 animate-fade-up animation-delay-900">
          Bible preaching · Traditional hymns · A welcoming family
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1000">
          <a
            href="#contact"
            className="inline-block bg-brass text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full border-2 border-brass hover:bg-brass-dark hover:border-brass-dark hover:-translate-y-0.5 hover:shadow-xl transition-all"
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
