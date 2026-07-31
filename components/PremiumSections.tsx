"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { target: 15, suffix: "+", label: "Years Corporate Experience" },
  { target: 3, suffix: "", label: "Focused Learning Programs" },
  { target: 100, suffix: "%", label: "Practical Learning Approach" },
  { target: 1, suffix: ":1", label: "Personal Mentor Guidance" },
];

const benefits = [
  { icon: "🗣️", title: "Speak from Day One", text: "Every session includes guided speaking practice." },
  { icon: "🎯", title: "Goal-Based Learning", text: "Activities are connected to your personal or career goals." },
  { icon: "🤝", title: "Mentor Feedback", text: "Receive practical corrections without fear or embarrassment." },
  { icon: "💼", title: "Corporate Experience", text: "Learn communication shaped by 15+ years of real workplace experience." },
  { icon: "🧠", title: "Confidence First", text: "We work on hesitation, mindset and expression—not grammar alone." },
  { icon: "📱", title: "Flexible Support", text: "Continue practice and communication support through WhatsApp." },
];

const transformations = [
  ["I understand English, but I hesitate.", "I express my ideas without overthinking."],
  ["I avoid interviews and group discussions.", "I respond with structure and confidence."],
  ["I translate every sentence in my mind.", "I communicate more naturally in real situations."],
];

export default function PremiumSections() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const frame = window.requestAnimationFrame(() => setProgress(100));
      return () => window.cancelAnimationFrame(frame);
    }

    let value = 0;
    const timer = window.setInterval(() => {
      value += 4;
      setProgress(Math.min(value, 100));
      if (value >= 100) window.clearInterval(timer);
    }, 35);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="bg-[#062B5C] px-5 py-12 text-white sm:px-8 lg:px-12" aria-label="Unmute Pro highlights">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => {
            const value = Math.round((stat.target * progress) / 100);
            return (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-[#00D97E] sm:text-4xl">
                  {value}{stat.suffix}
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-100">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="why-us" className="scroll-mt-32 bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">Why Choose Unmute Pro</span>
            <h2 className="mt-5 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">Training designed around real confidence</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl" aria-hidden="true">{benefit.icon}</span>
                <h3 className="mt-5 text-xl font-bold text-[#062B5C]">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">Your Transformation</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">From hesitation to confident expression</h2>
          </div>
          <div className="mt-12 space-y-5">
            {transformations.map(([before, after]) => (
              <div key={before} className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-2">
                <div className="bg-slate-50 p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Before</p>
                  <p className="mt-3 text-lg font-semibold text-slate-700">“{before}”</p>
                </div>
                <div className="bg-[#ECFDF5] p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#007F4D]">After guided practice</p>
                  <p className="mt-3 text-lg font-bold text-[#062B5C]">“{after}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">Meet Your Mentor</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">A personal welcome from Manibabu</h2>
            <p className="mt-5 leading-8 text-slate-600">A short introduction video will help learners understand the Unmute Pro approach, your corporate background and what they can expect from the demo session.</p>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-800">
              Video placeholder is ready. Replace it with your YouTube introduction link after recording.
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-[#062B5C] shadow-2xl">
            <Image src="/images/manibabu.jpg" alt="Manibabu introducing Unmute Pro" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00D97E] text-3xl text-[#062B5C] shadow-xl" aria-hidden="true">▶</span>
              <p className="mt-5 text-lg font-bold">Introduction video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">Learner Success</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">Real stories will live here</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">This section is prepared for verified student photos, outcomes and testimonials. We will publish only genuine stories with learner permission.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Confidence breakthrough", "Interview success", "Workplace communication"].map((title) => (
              <article key={title} className="rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">✦</div>
                <h3 className="mt-5 text-xl font-bold text-[#062B5C]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">Verified learner story coming soon.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="text-3xl tracking-wider text-amber-400" aria-label="Google reviews placeholder">★★★★★</div>
          <h2 className="mt-4 text-3xl font-extrabold text-[#062B5C]">Google Reviews</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Verified Google ratings and review excerpts will appear here after the Unmute Pro Business Profile begins receiving learner feedback.</p>
          <p className="mt-5 text-sm font-semibold text-slate-500">No rating is displayed yet because we do not publish unverified review data.</p>
        </div>
      </section>

      <section className="bg-[#062B5C] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <span className="inline-flex rounded-full bg-[#00D97E] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#062B5C]">Admissions Open · Limited Seats</span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Reserve your ₹99 demo session</h2>
            <p className="mt-3 text-blue-100">The ₹99 booking amount is adjusted against your course fee when you enrol.</p>
          </div>
          <a href="#contact" className="shrink-0 rounded-xl bg-[#00D97E] px-8 py-4 font-extrabold text-[#062B5C] shadow-lg transition hover:-translate-y-1 hover:bg-[#00C970]">Reserve My Demo · ₹99</a>
        </div>
      </section>
    </>
  );
}
