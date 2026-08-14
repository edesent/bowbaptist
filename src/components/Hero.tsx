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

      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-transparent to-navy-deep/25" />

      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl text-navy-deep">
          <div className="mb-6">
            <img
              src="/logo.png"
              alt="Bow Baptist Church"
              className="w-[min(62vw,360px)] h-auto object-contain mix-blend-multiply"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-5">
            The Church That Cares.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 max-w-xl">
            Proclaiming the Saving Grace of Jesus Christ.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-navy-deep text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-md border-2 border-navy-deep hover:bg-navy hover:-translate-y-0.5 transition-all"
            >
              Join Us This Sunday
            </a>
            <a
              href="#welcome"
              className="inline-flex items-center justify-center text-navy-deep font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-md border-2 border-navy-deep hover:bg-white/35 hover:-translate-y-0.5 transition-all"
            >
              About Our Church
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
