export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep"
    >
      <img
        src="/hero.png"
        alt="Bow Baptist Church — the historic 1837 stone meetinghouse and white steeple at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/58 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/5 via-transparent to-navy-deep/20" />

      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl text-navy-deep">
          <div className="mb-5 drop-shadow-[0_4px_18px_rgba(0,0,0,0.18)]">
            <img
              src="/logo-line.png"
              alt="Bow Baptist Church"
              className="w-[min(66vw,390px)] h-auto object-contain"
            />
          </div>

          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-navy-deep mb-5 [text-shadow:0_1px_8px_rgba(255,255,255,0.65)]">
            The Church That Cares.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-navy-deep/85 leading-relaxed max-w-xl [text-shadow:0_1px_8px_rgba(255,255,255,0.65)]">
            Preaching the Gospel in the foothills of Vermont since 1837.
          </p>
        </div>
      </div>
    </header>
  );
}
