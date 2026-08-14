import { Ridge, c } from "./Ridge";

const FACEBOOK_URL =
  "https://www.facebook.com/search/top?q=Bow%20Baptist%20Church%20Vermont";
const GIVE_URL = "https://secure.anedot.com/bow-baptist-church-vt/donate";

const quickLinks = [
  { href: "/#welcome", label: "Welcome" },
  { href: "/#services", label: "Service Times" },
  { href: "/#visit", label: "What to Expect" },
  { href: "/history", label: "Our Story" },
  { href: "/beliefs", label: "What We Believe" },
  { href: "/how-to-be-saved", label: "How to Be Saved" },
  { href: "/pastor", label: "Our Pastor" },
];

const serviceTimes = [
  { label: "Sunday School", time: "10:00 AM" },
  { label: "Morning Worship", time: "11:00 AM" },
  { label: "Evening Service", time: "6:00 PM" },
  { label: "Wednesday Prayer", time: "6:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70">
      <Ridge top={c.cream} bottom={c.pineDeep} />

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/[.1]">
          <div>
            <img
              src="/logo-line.png"
              alt="Bow Baptist Church"
              className="w-[215px] h-auto object-contain drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] mb-4"
            />
            <p className="font-serif text-lg text-white mb-3">The Church That Cares.</p>
            <p className="text-sm leading-relaxed">
              1102 Route 5<br />
              Springfield, VT 05156<br />
              <a href="tel:+18025464902" className="text-gold-pale hover:text-gold-light transition-colors">
                (802) 546-4902
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/60 hover:text-gold-pale sm:hover:pl-1 transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-5">Service Times</h4>
            <ul className="space-y-2.5">
              {serviceTimes.map((s) => (
                <li key={s.label} className="text-sm text-cream/60">
                  <strong className="text-cream/85 font-semibold">{s.label}</strong>
                  <br />
                  {s.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-5">Connect</h4>
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/70 text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-white hover:text-navy-deep transition-all mb-6"
            >
              Give Online
            </a>
            <div className="flex gap-3 mb-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-cream/70 hover:bg-white hover:text-navy-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <p className="text-sm italic text-cream/40 leading-relaxed">
              &ldquo;I was glad when they said unto me, Let us go into the house of the LORD.&rdquo;
              <span className="not-italic text-cream/30 block mt-1">— Psalm 122:1</span>
            </p>
          </div>
        </div>

        <div className="text-center py-6 text-sm text-cream/30">
          <p>&copy; {new Date().getFullYear()} Bow Baptist Church · Weathersfield Bow, Vermont. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
