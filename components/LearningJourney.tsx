"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const weeks = [
  ["Week 1", "Confidence Reset", "Understand your current level, hesitation triggers and speaking goals."],
  ["Week 2", "Sentence Confidence", "Build clear everyday sentences without overthinking every word."],
  ["Week 3", "Real Conversations", "Practise introductions, questions, responses and common situations."],
  ["Week 4", "Fluency Practice", "Improve flow through role plays, storytelling and guided discussions."],
  ["Week 5", "Interview Communication", "Structure answers, improve body language and practise mock interviews."],
  ["Week 6", "Professional Expression", "Communicate ideas clearly in meetings, calls and workplace situations."],
  ["Week 7", "Confident Performance", "Review progress, practise real scenarios and create your next-step plan."],
];

export default function LearningJourney() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            7-Week Learning Journey
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">
            A clear path from hesitation to confidence
          </h2>
          <p className="mt-5 leading-8 text-slate-600 sm:text-lg">
            Select each week to see what the learner focuses on and how the journey progresses.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {weeks.map(([week, title], index) => (
              <button
                key={week}
                type="button"
                onClick={() => setActiveWeek(index)}
                aria-pressed={activeWeek === index}
                className={`min-w-[170px] rounded-2xl border px-5 py-4 text-left transition lg:min-w-0 ${
                  activeWeek === index
                    ? "border-[#00D97E] bg-[#062B5C] text-white shadow-lg"
                    : "border-slate-200 bg-white text-[#062B5C] hover:border-[#00D97E]"
                }`}
              >
                <span className="block text-xs font-bold uppercase tracking-wider text-[#00D97E]">{week}</span>
                <span className="mt-1 block font-bold">{title}</span>
              </button>
            ))}
          </div>

          <ScrollReveal className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#00A866]">
              {weeks[activeWeek][0]}
            </p>
            <h3 className="mt-4 text-3xl font-extrabold text-[#062B5C]">
              {weeks[activeWeek][1]}
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {weeks[activeWeek][2]}
            </p>
            <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#00D97E] transition-all duration-500"
                style={{ width: `${((activeWeek + 1) / weeks.length) * 100}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-500">
              Progress: {activeWeek + 1} of {weeks.length} weeks
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex rounded-xl bg-[#00D97E] px-8 py-4 font-bold text-[#062B5C] shadow-lg transition hover:-translate-y-1 hover:bg-[#00C970]">
            Start My Journey · ₹99 Demo
          </a>
        </div>
      </div>
    </section>
  );
}
