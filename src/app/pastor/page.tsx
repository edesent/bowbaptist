import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Peaks } from "@/components/Ridge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Pastor",
  description:
    "Meet Pastor Wesley Allen — called by unanimous vote to shepherd Bow Baptist Church, Weathersfield Bow, Vermont. Officially begins June 1, 2026.",
};

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <PageHero
        kicker="Meet Our Pastor"
        title="Pastor Wesley Allen"
        subtitle="Called by unanimous vote to shepherd Bow Baptist Church · Officially begins June 1, 2026"
      />

      <main className="bg-warm-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Joyful announcement */}
          <div className="mb-12 p-6 md:p-7 rounded-2xl bg-cream border-l-4 border-brass-light">
            <p className="text-[0.7rem] font-bold tracking-[0.22em] uppercase text-brass-light mb-2">
              A Joyful Announcement
            </p>
            <p className="text-text-body leading-relaxed">
              By <strong className="text-text-dark">unanimous vote</strong>, the church
              family of Bow Baptist Church has called{" "}
              <strong className="text-text-dark">Pastor Wesley Allen</strong> to be our
              pastor. The church family is rejoicing and hopeful of a bright future.
              Pastor Allen will officially begin his ministry on{" "}
              <strong className="text-text-dark">June 1, 2026</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Portrait placeholder — swap this <svg> for an <img src="/pastor.jpg" .../> when a photo is available */}
            <div className="mx-auto md:mx-0 w-full max-w-[300px]">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-navy-deep/10">
                <svg viewBox="0 0 300 360" className="w-full block" aria-hidden="true">
                  <defs>
                    <linearGradient id="pPanel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#34507d" />
                      <stop offset="1" stopColor="#1f3354" />
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
                A photo of Pastor Allen will appear here.
              </p>
            </div>

            {/* Bio */}
            <div>
              <Peaks className="text-gold-light mb-5" />
              <h2 className="font-serif text-3xl font-semibold text-text-dark mb-5">
                A new chapter for Bow Baptist
              </h2>
              {/*
                PLACEHOLDER BIO — replace with Pastor Allen's own words: his family,
                testimony, how the Lord called him to Bow Baptist, and his heart for
                this church and the Vermont community.
              */}
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  The Lord has been gracious to Bow Baptist Church through every
                  season of its long history, and this one is no exception. Following
                  a season of faithful interim ministry under Pastor Tom A. Faulk, the
                  church family met and — with one voice — called Pastor Wesley Allen
                  to shepherd this congregation.
                </p>
                <p>
                  Pastor Allen will open the King James Bible each Lord&rsquo;s Day to
                  feed the flock with clear, Christ-centered preaching — that
                  believers might grow in grace and that those who do not yet know the
                  Lord might come to faith in Jesus Christ.
                </p>
                <p>
                  More than a preacher behind a pulpit, a pastor is a shepherd who
                  walks alongside his people in the joys and trials of life. If
                  you&rsquo;re looking for a church home — or simply have questions
                  about the Lord — Pastor Allen and the people of Bow Baptist would
                  be glad to welcome you.
                </p>
                <p className="font-serif italic text-navy-mid">
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
                  className="inline-block bg-brass text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brass-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Plan a Visit
                </a>
                <a
                  href="/#services"
                  className="inline-block text-navy font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full border-2 border-navy/30 hover:border-navy hover:-translate-y-0.5 transition-all"
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
