import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Be Saved",
  description:
    "The most important question in life: do you know that you have eternal life? See what the Bible says about being born again and how you can be saved.",
};

const steps = [
  {
    n: "1",
    title: "All of us have sinned",
    verse:
      "For all have sinned, and come short of the glory of God.",
    ref: "Romans 3:23",
    body: "Every one of us has fallen short of God's perfect standard. No matter how good we try to be, we have all done wrong in His sight.",
  },
  {
    n: "2",
    title: "Sin has a penalty",
    verse:
      "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
    ref: "Romans 6:23",
    body: "Sin earns us death — eternal separation from God. But God offers a gift we could never earn: eternal life through His Son.",
  },
  {
    n: "3",
    title: "Christ paid that penalty for you",
    verse:
      "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    ref: "Romans 5:8",
    body: "Jesus, the sinless Son of God, died on the cross in your place, was buried, and rose again — paying the debt of sin that you could not pay.",
  },
  {
    n: "4",
    title: "Receive Him by faith",
    verse:
      "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. … For whosoever shall call upon the name of the Lord shall be saved.",
    ref: "Romans 10:9, 13",
    body: "Salvation is not earned by works — it is received by faith. When you turn to Christ and call upon Him, trusting Him alone to save you, He will.",
  },
];

export default function HowToBeSavedPage() {
  return (
    <>
      <Navbar />
      <PageHero
        kicker="The Most Important Question"
        title="How to Be Saved"
        subtitle="Do you know — for certain — that you have eternal life? Here is what the Bible says."
      />

      <main className="bg-warm-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-text-body leading-relaxed mb-12 text-center">
            The Bible makes the way to heaven beautifully clear. It is often called the
            &ldquo;Romans Road&rdquo; — four simple truths from the book of Romans that show
            how anyone can be saved.
          </p>

          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-pine text-cream font-serif text-lg font-semibold">
                    {s.n}
                  </span>
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-text-dark mb-3">
                    {s.title}
                  </h2>
                  <blockquote className="border-l-4 border-oak-light pl-4 py-1 mb-3">
                    <p className="font-serif italic text-pine-mid leading-relaxed">
                      &ldquo;{s.verse}&rdquo;
                    </p>
                    <cite className="text-xs font-semibold tracking-[0.1em] uppercase text-oak not-italic">
                      {s.ref}
                    </cite>
                  </blockquote>
                  <p className="text-text-body leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prayer */}
          <div className="mt-14 p-8 md:p-10 bg-cream rounded-2xl ring-1 ring-oak-light/30">
            <h2 className="font-serif text-2xl font-semibold text-text-dark mb-4 text-center">
              Will you call upon Him today?
            </h2>
            <p className="text-text-body leading-relaxed mb-5">
              Salvation is not in the words of a prayer, but in trusting Christ from your
              heart. If you understand that you are a sinner, and you are ready to turn to
              Jesus and trust Him alone to save you, you might express your faith to God in
              words like these:
            </p>
            <p className="font-serif italic text-pine leading-relaxed text-lg border-l-4 border-barn pl-5">
              &ldquo;Dear God, I know that I am a sinner and that my sin deserves
              punishment. I believe that Jesus Christ died for me, was buried, and rose
              again. Right now I turn from my sin and trust You, Lord Jesus, as my Savior.
              Thank You for forgiving me and giving me eternal life. Amen.&rdquo;
            </p>
          </div>

          {/* Next step */}
          <div className="mt-12 text-center">
            <p className="text-lg text-text-body leading-relaxed mb-6">
              Did you trust Christ today, or do you still have questions? Nothing would
              encourage us more than to hear from you — we&rsquo;d love to help you take
              your next steps and welcome you to worship with us.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-barn text-white font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-barn-dark hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Tell Us / Plan a Visit
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
