"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigationLinks = [
  { name: "Home", href: "#home", section: true },
  { name: "Students", href: "#courses", section: true },
  { name: "Colleges", href: "/institutions", section: false },
  { name: "Level Check", href: "/assessment", section: false },
  { name: "Resources", href: "/resources", section: false },
  { name: "Reviews", href: "#reviews", section: true },
  { name: "About", href: "#about", section: true },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navigationLinks
      .filter((link) => link.section)
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLink = mobileNavRef.current?.querySelector<HTMLElement>(
      `[data-section="${activeSection}"]`
    );

    activeLink?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection]);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const section = document.querySelector<HTMLElement>(href);

    if (section) {
      const sectionName = href.replace("#", "");
      setActiveSection(sectionName);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="flex shrink-0 items-center rounded-md"
          aria-label="Unmute Pro home"
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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => {
            const sectionName = link.section ? link.href.replace("#", "") : "";
            const isActive = link.section && activeSection === sectionName;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.section ? (event) => handleNavigation(event, link.href) : undefined}
                aria-current={isActive ? "page" : undefined}
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

        <Link
          href="#contact"
          onClick={(event) => handleNavigation(event, "#contact")}
          className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg lg:inline-flex"
        >
          Book Demo
        </Link>

        <Link
          href="#contact"
          onClick={(event) => handleNavigation(event, "#contact")}
          className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-600 lg:hidden"
        >
          Book Demo
        </Link>
      </div>

      <div className="border-t border-slate-100 bg-white lg:hidden">
        <nav
          ref={mobileNavRef}
          className="flex gap-2 overflow-x-auto px-4 py-2.5 scrollbar-hide"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map((link) => {
            const sectionName = link.section ? link.href.replace("#", "") : link.name.toLowerCase();
            const isActive = link.section && activeSection === sectionName;

            return (
              <Link
                key={link.name}
                href={link.href}
                data-section={sectionName}
                onClick={link.section ? (event) => handleNavigation(event, link.href) : undefined}
                aria-current={isActive ? "page" : undefined}
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
