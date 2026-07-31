"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  ["Can a complete beginner join Unmute Pro?", "Yes. Our programs support beginners and learners who understand English but hesitate to speak."],
  ["Are sessions practical or grammar-based?", "The focus is practical communication. Grammar is explained when needed, while most time is spent speaking and receiving feedback."],
  ["Who can join the programs?", "Students, job seekers, working professionals, homemakers and anyone who wants stronger communication confidence can join."],
  ["Do you provide interview preparation?", "Yes. We cover self-introductions, common questions, mock interviews, body language and personal feedback."],
  ["Are classes available online?", "Contact us for the latest online and offline availability, schedules and upcoming batches."],
  ["How do I choose the right program?", "Reserve a ₹99 demo or speak with our mentor. We will understand your level and recommend the right path."],
  ["Will I become fluent immediately?", "Fluency grows through consistent practice, participation and guided correction. We provide the structure and support."],
  ["How can I know fees and timings?", "Current fees and timings are shared personally based on the selected program and available schedule."],
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-32 bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">
            Questions before you begin?
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer], index) => {
            const isOpen = activeIndex === index;
            return (
              <ScrollReveal key={question} delay={index * 45}>
                <article className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00D97E] shadow-md" : "border-slate-200 shadow-sm"}`}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="font-bold text-[#062B5C] sm:text-lg">{question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-bold transition-transform duration-300 ${isOpen ? "rotate-45 bg-[#00D97E]" : "bg-slate-100"}`}>+</span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-slate-100 px-5 pb-6 pt-4 leading-7 text-slate-600 sm:px-6">{answer}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
