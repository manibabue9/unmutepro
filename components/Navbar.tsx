"use client";

import Image from "next/image";
import { useState } from "react";

const navigationLinks =  [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why" },
  { name: "Mentor", href: "#mentor" },
  { name: "Courses", href: "#courses" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Go to Unmute Pro home"
        >
          <Image
            src="/images/logo.png"
            alt="Unmute Pro - Your Silence Ends Here"
            width={220}
            height={100}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:flex>
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-semibold text-slate-700 transition hover:text-[#00A866]"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#00D97E] transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-6 py-3 font-bold text-[#062B5C] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#00C970] hover:shadow-lg"
          >
            Book Free Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#062B5C] transition hover:bg-slate-50 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl:hidden>
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-[#ECFDF5] hover:text-[#00A866]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-[#00D97E] px-5 py-3 text-center font-bold text-[#062B5C] transition hover:bg-[#00C970]"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}