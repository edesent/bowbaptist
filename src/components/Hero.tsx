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

      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/78 via-navy-deep/38 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/18 via-transparent to-navy-deep/45" />

      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl text-white">
          <div className="mb-5 drop-shadow-[0_5px_24px_rgba(0,0,0,0.5)]">
            <img
              src="/logo-white.png"
              alt="Bow Baptist Church"
              className="w-[min(70vw,430px)] h-auto object-contain"
            />
          </div>

          <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-white mb-5 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]">
            The Church That Cares.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
            A gospel light in the hills of Vermont since 1837.
          </p>
        </div>
      </div>
    </header>
  );
}
