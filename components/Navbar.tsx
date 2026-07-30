"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Courses", href: "#courses" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as HTMLElement[];

      const currentSection = sections.find((section) => {
        const position = section.getBoundingClientRect();

        return position.top <= 150 && position.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      {/* Main navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="flex shrink-0 items-center"
          aria-label="Unmute Pro Home"
        >
          <Image
            src="/images/logo.png"
            alt="Unmute Pro"
            width={145}
            height={55}
            priority
            className="h-auto w-[110px] sm:w-[130px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => {
            const sectionName = link.href.replace("#", "");
            const isActive = activeSection === sectionName;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-100 text-emerald-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop demo button */}
        <Link
          href="#contact"
          onClick={(event) => handleNavigation(event, "#contact")}
          className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg lg:inline-flex"
        >
          Book Free Demo
        </Link>

        {/* Mobile demo button */}
        <Link
          href="#contact"
          onClick={(event) => handleNavigation(event, "#contact")}
          className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-600 lg:hidden"
        >
          Free Demo
        </Link>
      </div>

      {/* Mobile and tablet horizontal navigation */}
      <div className="border-t border-slate-100 bg-white lg:hidden">
        <nav
          className="flex gap-2 overflow-x-auto px-4 py-2.5 scrollbar-hide"
          aria-label="Mobile Navigation"
        >
          {navigationLinks.map((link) => {
            const sectionName = link.href.replace("#", "");
            const isActive = activeSection === sectionName;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}