import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Peaks } from "@/components/Ridge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Pastor",
  description:
    "Meet Tom A. Faulk, interim pastor of Bow Baptist Church in Weathersfield Bow, Vermont.",
};

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <PageHero
        kicker="Meet Our Pastor"
        title="Pastor Tom A. Faulk"
        subtitle="Interim Pastor, Bow Baptist Church"
      />

      <main className="bg-warm-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Portrait — replace the SVG below with a real photo at /pastor.jpg */}
            <div className="mx-auto md:mx-0 w-full max-w-[300px]">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-pine-deep/10">
                <svg viewBox="0 0 300 360" className="w-full block" aria-hidden="true">
                  <defs>
                    <linearGradient id="pPanel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#2f5841" />
                      <stop offset="1" stopColor="#1e3a2b" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="360" fill="url(#pPanel)" />
                  <g fill="#cdbf9b" opacity="0.9">
                    <circle cx="150" cy="140" r="52" />
                    <path d="M70 320c0-46 36-82 80-82s80 36 80 82z" />
                  </g>
                </svg>
              </div>
              <p className="text-center text-xs text-text-muted mt-3 italic">
                A photo of Pastor Faulk will appear here.
              </p>
            </div>

            {/* Bio */}
            <div>
              <Peaks className="text-oak-light mb-5" />
              <h2 className="font-serif text-3xl font-semibold text-text-dark mb-5">
                A shepherd for this season
              </h2>
              {/*
                PLACEHOLDER BIO — gently written and true to what we know.
                Replace with Pastor Faulk's own words: his family, testimony,
                how the Lord called him, and his heart for Bow Baptist Church.
              */}
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Pastor Tom A. Faulk serves as the interim pastor of Bow Baptist Church,
                  faithfully preaching the Word of God and caring for the church family
                  during this season of ministry.
                </p>
                <p>
                  Each week he opens the King James Bible to feed the flock with clear,
                  Christ-centered preaching — that believers might grow in grace and that
                  those who do not yet know the Lord might come to faith in Jesus Christ.
                </p>
                <p>
                  More than a preacher behind a pulpit, a pastor is a shepherd who walks
                  alongside his people in the joys and trials of life. If you are looking
                  for a church home, or simply have questions about the Lord, Pastor Faulk
                  and the people of Bow Baptist would be glad to welcome you.
                </p>
                <p className="font-serif italic text-pine-mid">
                  &ldquo;Feed the flock of God which is among you, taking the oversight
                  thereof... being ensamples to the flock.&rdquo;
                  <span className="not-italic block text-sm text-text-light mt-1 font-sans">
                    — 1 Peter 5:2–3
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/#contact"
                  className="inline-block bg-barn text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-barn-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Plan a Visit
                </a>
                <a
                  href="/#services"
                  className="inline-block text-pine font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-pine/30 hover:border-pine hover:-translate-y-0.5 transition-all"
                >
                  Service Times
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
