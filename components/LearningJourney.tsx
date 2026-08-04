"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, CalendarCheck2, MessagesSquare, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const weeks = [
  {
    week: "Week 1",
    title: "Confidence Reset",
    focus: "Understand your current level, hesitation triggers and the conversations you most want to handle well.",
    practice: "Baseline conversation, confidence reflection and a personal speaking goal.",
  },
  {
    week: "Week 2",
    title: "Clear Sentence Building",
    focus: "Build useful sentences, organise thoughts and respond without translating every word in your head.",
    practice: "Short answers, question patterns and everyday response drills.",
  },
  {
    week: "Week 3",
    title: "Everyday Conversations",
    focus: "Start, continue and close conversations naturally in study, social and professional situations.",
    practice: "Introductions, follow-up questions and real-time role plays.",
  },
  {
    week: "Week 4",
    title: "Fluency & Storytelling",
    focus: "Improve flow, reduce long pauses and explain experiences in a way people can easily follow.",
    practice: "Story structure, opinion speaking and guided group discussion.",
  },
  {
    week: "Week 5",
    title: "Presentations & Presence",
    focus: "Structure an idea, speak to a group and use voice and body language with more confidence.",
    practice: "A short presentation with practical mentor feedback.",
  },
  {
    week: "Week 6",
    title: "Interview & Workplace Communication",
    focus: "Answer important questions clearly and communicate professionally in meetings, calls and interviews.",
    practice: "Self-introduction, interview stories and workplace scenarios.",
  },
  {
    week: "Week 7",
    title: "Confident Performance",
    focus: "Bring the skills together, compare progress and leave with a realistic plan for continued practice.",
    practice: "Final real-world simulation, feedback and a personal next-step roadmap.",
  },
];

const programmeIncludes = [
  { Icon: Target, title: "Personal goal", text: "Built around the conversations that matter to you" },
  { Icon: MessagesSquare, title: "Active speaking", text: "Practice in every stage—not passive theory" },
  { Icon: BadgeCheck, title: "Mentor feedback", text: "Specific corrections without fear or embarrassment" },
];

export default function LearningJourney() {
  const [activeWeek, setActiveWeek] = useState(0);
  const selected = weeks[activeWeek];

  return (
    <section id="learning-journey" className="scroll-mt-28 bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            <CalendarCheck2 size={17} /> Individual Programme · 7 Weeks
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">
            From hesitation to confident expression—one week at a time.
          </h2>
          <p className="mt-5 leading-8 text-slate-600 sm:text-lg">
            A structured learning journey with personal goals, practical conversations and feedback you can immediately use.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {programmeIncludes.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon size={23} className="text-[#00A866]" />
              <p className="mt-3 font-extrabold text-[#062B5C]">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {weeks.map(({ week, title }, index) => (
              <button
                key={week}
                type="button"
                onClick={() => setActiveWeek(index)}
                aria-pressed={activeWeek === index}
                className={`min-w-[190px] rounded-2xl border px-5 py-4 text-left transition lg:min-w-0 ${
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

          <ScrollReveal className="relative overflow-hidden rounded-[2rem] bg-[#062B5C] p-8 text-white shadow-xl sm:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00D97E]/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#00D97E]">{selected.week}</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-blue-100">Stage {activeWeek + 1} of 7</span>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">{selected.title}</h3>
              <p className="mt-5 text-lg leading-8 text-blue-100">{selected.focus}</p>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">Real-world practice</p>
                <p className="mt-2 leading-7 text-white">{selected.practice}</p>
              </div>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#00D97E] transition-all duration-500" style={{ width: `${((activeWeek + 1) / weeks.length) * 100}%` }} />
              </div>
              <p className="mt-3 text-sm font-semibold text-blue-100">Journey progress: {activeWeek + 1} of {weeks.length} weeks</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-8 py-4 font-extrabold text-[#062B5C] shadow-lg transition hover:-translate-y-1 hover:bg-[#00C970] sm:w-auto">
            Book an individual demo <ArrowRight size={18} />
          </a>
          <a href="/assessment" className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 font-extrabold text-[#062B5C] sm:w-auto">
            Start with the free level check
          </a>
        </div>
      </div>
    </section>
  );
}
