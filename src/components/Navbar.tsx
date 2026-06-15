"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string; external?: boolean };

const navLinks: NavLink[] = [
  { href: "#welcome", label: "Welcome" },
  { href: "#services", label: "Service Times" },
  { href: "#visit", label: "What to Expect" },
  { href: "/history", label: "Our Story" },
  { href: "/beliefs", label: "Beliefs" },
  {
    href: "https://secure.anedot.com/bow-baptist-church-vt/donate",
    label: "Give",
    external: true,
  },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M2 33 L13 16 L20 25 L28 11 L38 33 Z" fill="currentColor" opacity="0.92" />
      <path d="M28 11 L28 4 M24.5 7 L31.5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    setMenuOpen(false);
    if (link.external || !link.href.startsWith("#")) return;
    if (isSubPage) {
      e.preventDefault();
      window.location.href = `/${link.href}`;
      return;
    }
    e.preventDefault();
    const el = document.querySelector(link.href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isSubPage
          ? "bg-navy-deep/[.97] py-3 shadow-lg backdrop-blur-sm"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, { href: "#home", label: "Home" })}
          className="flex items-center gap-2.5 text-white"
        >
          <BrandMark className="w-8 h-8 text-gold-light" />
          <span className="text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-gold-pale whitespace-nowrap">
            Bow Baptist Church
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white/85 text-sm font-medium px-3.5 py-2 rounded-md hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, { href: "#contact", label: "Contact" })}
              className="ml-2 bg-brass text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-brass-dark hover:-translate-y-0.5 transition-all"
            >
              Plan a Visit
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed lg:hidden top-0 right-0 w-72 h-screen bg-navy-deep pt-20 px-8 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-white/85 text-base font-medium px-4 py-3 rounded-md hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, { href: "#contact", label: "Contact" })}
                className="block text-center bg-brass text-white font-semibold px-6 py-3 rounded-full hover:bg-brass-dark transition-all"
              >
                Plan a Visit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
