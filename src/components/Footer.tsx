import { Ridge, c } from "./Ridge";

// TODO (Pastor Eli / church): replace with the church's real Facebook page URL.
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
  { label: "Wednesday Prayer", time: "7:00 PM" },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M2 33 L13 16 L20 25 L28 11 L38 33 Z" fill="currentColor" opacity="0.92" />
      <path d="M28 11 L28 4 M24.5 7 L31.5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-cream/70">
      <Ridge top={c.cream} bottom={c.pineDeep} />

      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/[.08]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <BrandMark className="w-9 h-9 text-oak-light" />
              <span className="font-serif text-lg font-semibold text-cream leading-tight">
                Bow Baptist
                <br />
                Church
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              1102 Route 5<br />
              Weathersfield Bow, VT 05156<br />
              <a
                href="tel:+18025464902"
                className="text-oak-pale hover:text-oak-light transition-colors"
              >
                (802) 546-4902
              </a>
            </p>
            <p className="text-xs tracking-[0.18em] uppercase text-cream/40 mt-4">
              A gospel light since 1837
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-oak-pale sm:hover:pl-1 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
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

          {/* Connect */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream mb-5">Connect</h4>
            <a
              href={GIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-barn text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-barn-dark transition-all mb-6"
            >
              Give Online
            </a>
            <div className="flex gap-3 mb-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-cream/70 hover:bg-oak-light hover:text-pine-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <p className="text-sm italic text-cream/40 leading-relaxed">
              &ldquo;I was glad when they said unto me, Let us go into the house of the
              LORD.&rdquo;
              <span className="not-italic text-cream/30 block mt-1">— Psalm 122:1</span>
            </p>
          </div>
        </div>

        <div className="text-center py-6 text-sm text-cream/30">
          <p>
            &copy; {new Date().getFullYear()} Bow Baptist Church · Weathersfield Bow,
            Vermont. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
