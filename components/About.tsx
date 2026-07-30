"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-32 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Mentor image */}
          <div className="relative mx-auto w-full max-w-[330px]">
            <div className="absolute -inset-3 rounded-[32px] bg-emerald-100" />

            <div className="relative overflow-hidden rounded-[28px] bg-slate-100 shadow-xl">
              <Image
                src="/images/manibabu.png"
                alt="Manibabu, Communication Mentor at Unmute Pro"
                width={500}
                height={600}
                className="h-[360px] w-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-center shadow-lg">
              <h3 className="text-lg font-bold text-slate-900">
                Manibabu
              </h3>

              <p className="text-sm font-semibold text-emerald-600">
                Communication Mentor
              </p>

              <p className="mt-1 text-xs text-slate-500">
                15+ Years of Corporate Experience
              </p>
            </div>
          </div>

          {/* About content */}
          <div className="pt-8 text-center lg:pt-0 lg:text-left">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              About Unmute Pro
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Confidence comes first.
              <span className="mt-1 block text-emerald-500">
                English follows naturally.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Unmute Pro helps learners overcome hesitation and communicate
              confidently through practical spoken-English training, real-life
              conversations and regular speaking practice.
            </p>

            {showMore && (
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  Guided by Manibabu, a communication mentor with more than
                  15 years of corporate experience, our training focuses on
                  workplace communication, interviews, presentations, public
                  speaking and everyday conversations.
                </p>

                <p>
                  Our mission is to help learners from Hyderabad, Vijayawada,
                  Eluru and other cities find their voice, overcome fear and
                  express themselves confidently.
                </p>
              </div>
            )}

            {/* Statistics */}
            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center sm:p-4">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">
                  15+
                </p>

                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-600 sm:text-sm">
                  Years of Experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center sm:p-4">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">
                  Live
                </p>

                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-600 sm:text-sm">
                  Speaking Practice
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center sm:p-4">
                <p className="text-xl font-bold text-emerald-600 sm:text-2xl">
                  100%
                </p>

                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-600 sm:text-sm">
                  Confidence Focus
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button
                type="button"
                onClick={() => setShowMore((currentValue) => !currentValue)}
                className="rounded-full border-2 border-emerald-500 px-6 py-3 text-sm font-bold text-emerald-600 transition hover:bg-emerald-50"
              >
                {showMore ? "Show Less" : "Know More"}
              </button>

              <Link
                href="#contact"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}