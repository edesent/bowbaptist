import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bowbaptist.com"),
  title: {
    default:
      "Bow Baptist Church — Independent Baptist Church in Weathersfield Bow, VT",
    template: "%s | Bow Baptist Church",
  },
  description:
    "A warm, Bible-believing Independent Baptist church in the hills of Vermont since 1837. Join us for Sunday worship at 11 AM in Weathersfield Bow, VT. KJV preaching, traditional hymns, and a loving church family — all are welcome.",
  keywords: [
    "Bow Baptist Church",
    "Baptist church Vermont",
    "Independent Baptist church Vermont",
    "KJV church Vermont",
    "church Weathersfield Bow VT",
    "church near Springfield VT",
    "Windsor County church",
    "Bible believing church Vermont",
    "Sunday worship Vermont",
    "King James Bible church near me",
    "church near Ascutney Vermont",
  ],
  authors: [{ name: "Bow Baptist Church" }],
  creator: "Bow Baptist Church",
  publisher: "Bow Baptist Church",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bow Baptist Church — Weathersfield Bow, Vermont",
    description:
      "A gospel light in the hills of Vermont since 1837. Join us for Sunday worship and fellowship. KJV preaching and traditional hymns — all are welcome.",
    url: "https://www.bowbaptist.com",
    type: "website",
    locale: "en_US",
    siteName: "Bow Baptist Church",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bow Baptist Church — Weathersfield Bow, Vermont",
    description:
      "A Bible-believing Independent Baptist church in the hills of Vermont since 1837. All are welcome.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
