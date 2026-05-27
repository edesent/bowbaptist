import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Peaks } from "@/components/Ridge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Bow Baptist Church has stood as a gospel witness in the hills of Weathersfield Bow, Vermont since 1837 — from a hand-hewn stone meetinghouse to the faithful family we are today.",
};

const milestones = [
  {
    year: "1837",
    text: "The church is organized in Weathersfield Bow after residents separate from the Center church. An Ecclesiastical Council approves its formation at the home of William Jarvis, who deeds land for the sum of one dollar “for the erection of a house of Public worship.”",
  },
  {
    year: "1838",
    text: "A stone meetinghouse with hand-hewn timbers is built at a cost of $3,300, funded largely through the sale of pews. Benjamin Holmes is installed as pastor in December at a salary of $450 a year plus $50 in produce.",
  },
  {
    year: "1841–1866",
    text: "The young congregation is shepherded by a succession of faithful men, including John Dudley (1841–1845) and George White (from 1866).",
  },
  {
    year: "1936",
    text: "After hard years, membership dwindles to just two women — yet the lampstand is not removed. Dr. Augustine Jones soon helps revive the church to eighteen members by the late 1930s.",
  },
  {
    year: "1938",
    text: "The church celebrates its centennial on July 31 — one hundred years of gospel witness in the Vermont hills.",
  },
  {
    year: "1955–1970",
    text: "Under Pastor Hial Snell the building is improved with a Wurlitzer organ (1957) and a new heating system (1962); a renovated basement (1944) had already opened the doors to community gatherings.",
  },
  {
    year: "1972",
    text: "Wes and Joy Smith reopen the church, and the congregation embraces a renewed evangelical, Bible-preaching ministry.",
  },
  {
    year: "1977 → 1982",
    text: "The church is renamed Bow Bible Church, and in 1982 takes its present name — Bow Baptist Church.",
  },
  {
    year: "1983",
    text: "A Christian academy is launched, ministering to families and children in the surrounding community.",
  },
  {
    year: "1987–2025",
    text: "Pastor Walter McDaniel serves faithfully for over three decades (1987–2020), overseeing extensive renovations, followed by Pastor Daniel Anderson (2020–2025).",
  },
  {
    year: "Today",
    text: "The same gospel still rings out from the hill. Under our interim pastor, Tom A. Faulk, Bow Baptist Church continues to preach Christ, sing the old hymns, and welcome every soul who comes through the door.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <PageHero
        kicker="Since 1837"
        title="Our History"
        subtitle="Nearly two centuries of gospel witness in the hills of Weathersfield Bow, Vermont."
      />

      <main className="bg-warm-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-intro mb-16 text-center">
            <Peaks className="text-oak-light mx-auto mb-6" />
            <p className="font-serif text-2xl md:text-3xl italic text-pine-mid leading-snug mb-6">
              “A beacon of the Gospel in the Green Mountains for nearly two hundred years.”
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Our story is one of God&rsquo;s faithfulness — through seasons of growth and
              seasons when only a handful gathered to pray. From a stone meetinghouse raised
              by hand in 1837 to the worship that fills these walls today, the Lord has kept
              a witness for Himself on this Vermont hillside.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-oak-light/40" aria-hidden="true" />
            <ul className="space-y-10">
              {milestones.map((m) => (
                <li key={m.year} className="relative pl-10">
                  <span
                    className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-pine ring-4 ring-warm-white"
                    aria-hidden="true"
                  />
                  <p className="font-serif text-xl font-semibold text-barn mb-1.5">{m.year}</p>
                  <p className="text-text-body leading-relaxed">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 p-8 bg-cream rounded-2xl border-l-4 border-oak-light text-center">
            <p className="text-lg text-text-body leading-relaxed mb-6">
              The next chapter of this story is still being written — and there&rsquo;s a
              place in it for you and your family.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-barn text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-barn-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Plan a Visit
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
