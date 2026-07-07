import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ServiceTimes from "@/components/ServiceTimes";
import Visit from "@/components/Visit";
import About from "@/components/About";
import ScriptureBanner from "@/components/ScriptureBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Ridge, c } from "@/components/Ridge";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Bow Baptist Church",
  alternateName: "Bow Baptist",
  url: "https://www.bowbaptist.com",
  description:
    "Independent, KJV Bible-believing Baptist church in Weathersfield Bow, Vermont since 1837.",
  telephone: "+1-802-546-4902",
  foundingDate: "1837",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1102 Route 5",
    addressLocality: "Springfield",
    addressRegion: "VT",
    postalCode: "05156",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "18:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "18:00",
      closes: "19:00",
    },
  ],
  event: [
    {
      "@type": "Event",
      name: "Sunday School",
      startDate: "2026-05-31T10:00",
      eventSchedule: { "@type": "Schedule", repeatFrequency: "P1W", byDay: "Sunday" },
      location: {
        "@type": "Place",
        name: "Bow Baptist Church",
        address: "1102 Route 5, Springfield, VT 05156",
      },
    },
    {
      "@type": "Event",
      name: "Morning Worship Service",
      startDate: "2026-05-31T11:00",
      eventSchedule: { "@type": "Schedule", repeatFrequency: "P1W", byDay: "Sunday" },
      location: {
        "@type": "Place",
        name: "Bow Baptist Church",
        address: "1102 Route 5, Springfield, VT 05156",
      },
    },
    {
      "@type": "Event",
      name: "Sunday Evening Service",
      startDate: "2026-05-31T18:00",
      eventSchedule: { "@type": "Schedule", repeatFrequency: "P1W", byDay: "Sunday" },
      location: {
        "@type": "Place",
        name: "Bow Baptist Church",
        address: "1102 Route 5, Springfield, VT 05156",
      },
    },
    {
      "@type": "Event",
      name: "Wednesday Prayer Meeting",
      startDate: "2026-06-03T18:00",
      eventSchedule: { "@type": "Schedule", repeatFrequency: "P1W", byDay: "Wednesday" },
      location: {
        "@type": "Place",
        name: "Bow Baptist Church",
        address: "1102 Route 5, Springfield, VT 05156",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <Hero />
      <Welcome />
      <Ridge top={c.warmWhite} bottom={c.pineDeep} />
      <ServiceTimes />
      <Ridge top={c.pineDeep} bottom={c.cream} />
      <Visit />
      <About />
      <Ridge top={c.warmWhite} bottom={c.pineDeep} />
      <ScriptureBanner />
      <Ridge top={c.pineDeep} bottom={c.cream} />
      <Contact />
      <Footer />
    </>
  );
}
