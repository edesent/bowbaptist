import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The statement of faith of Bow Baptist Church — an Independent Baptist church standing on the King James Bible and the fundamentals of the Christian faith.",
};

const beliefs = [
  {
    title: "The Holy Scriptures",
    body: "We believe the Holy Scriptures of the Old and New Testaments to be the verbally and plenarily inspired Word of God. The King James Version is the Bible we use and preach from in our church.",
    refs: ["2 Timothy 3:16–17", "2 Peter 1:20–21"],
  },
  {
    title: "The Godhead",
    body: "We believe in one Triune God, existing eternally as Father, Son, and Holy Spirit — co-equal in power, glory, and essence.",
    refs: ["Deuteronomy 6:4", "Matthew 28:19", "John 14:26", "Hebrews 1:8", "Acts 5:3–4"],
  },
  {
    title: "The Person and Work of Christ",
    body: "We believe that Jesus Christ is the Son of God, born of a virgin, who lived a sinless life, died as a substitutionary sacrifice for our sins, rose bodily from the dead, ascended to the Father, and now intercedes for believers.",
    refs: ["Philippians 2:5–11", "Matthew 1:18–25", "1 Corinthians 15:3–4", "Hebrews 7:25", "John 3:16–18"],
  },
  {
    title: "The Person and Work of the Holy Spirit",
    body: "We believe the Holy Spirit convicts the world of sin, regenerates the believing sinner, baptizes every believer into the body of Christ, and indwells and seals those who are saved.",
    refs: ["John 16:7–14", "1 Corinthians 12:12–14", "Romans 8:9", "Ephesians 1:13–14"],
  },
  {
    title: "Man",
    body: "We believe that man was created in the image of God but fell through Adam into sin, so that all are born with a sinful nature, totally depraved and separated from a holy God apart from Christ.",
    refs: ["Genesis 1:26–27", "Romans 5:12", "Psalm 51:5", "Ephesians 2:1–3, 12"],
  },
  {
    title: "Salvation",
    body: "We believe that salvation is received by grace through faith in the shed blood of Christ — a free gift of God, not the result of works, lest any man should boast.",
    refs: ["1 Corinthians 15:1–4", "Ephesians 2:8–9", "John 1:12–13", "Romans 10:9–13"],
  },
];

export default function BeliefsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        kicker="Our Statement of Faith"
        title="What We Believe"
        subtitle="We are an Independent Baptist church, standing on the King James Bible and the great fundamentals of the Christian faith."
        bottom="#f3ece0"
      />

      <main className="bg-cream py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                className="bg-warm-white rounded-2xl p-8 shadow-sm ring-1 ring-navy-deep/[.06]"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif text-2xl font-semibold text-gold-light leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-dark">
                    {b.title}
                  </h2>
                </div>
                <p className="text-text-body leading-relaxed mb-5">{b.body}</p>
                <div className="flex flex-wrap gap-2">
                  {b.refs.map((r) => (
                    <span
                      key={r}
                      className="text-xs font-semibold text-navy-mid bg-navy/[.07] px-3 py-1.5 rounded-full"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-navy text-cream rounded-2xl text-center">
            <h2 className="font-serif text-2xl font-semibold mb-3">
              Do you know that you have eternal life?
            </h2>
            <p className="text-cream/80 leading-relaxed mb-6">
              The Bible tells us how we can know for certain that we are saved and ready for
              heaven.
            </p>
            <a
              href="/how-to-be-saved"
              className="inline-block bg-brass text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-brass-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              How to Be Saved
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
