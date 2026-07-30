"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Who can join Unmute Pro courses?",
    answer:
      "Our programs are designed for students, job seekers, beginners, working professionals, and anyone who wants to improve their English communication and confidence.",
  },
  {
    question: "Do I need strong grammar before joining?",
    answer:
      "No. You do not need advanced grammar knowledge. We teach grammar naturally through practical speaking activities and real-life communication.",
  },
  {
    question: "Are classes available online and offline?",
    answer:
      "Online classes are available for learners from different locations. Offline availability depends on the active batch and location. Contact us for the latest details.",
  },
  {
    question: "Will there be speaking practice in every class?",
    answer:
      "Yes. Our approach focuses on regular speaking practice through conversations, role plays, mock interviews, presentations, and guided activities.",
  },
  {
    question: "Do you provide interview preparation?",
    answer:
      "Yes. Interview preparation includes professional introductions, common HR questions, behavioural questions, mock interviews, body language, and confidence guidance.",
  },
  {
    question: "Can working professionals join?",
    answer:
      "Yes. We offer programs covering workplace communication, meetings, presentations, professional vocabulary, email writing, and corporate communication.",
  },
  {
    question: "Is a free demo session available?",
    answer:
      "Yes. You can book a free demo through the contact form or WhatsApp. We will understand your learning goals and suggest a suitable course.",
  },
  {
    question: "How long does it take to improve spoken English?",
    answer:
      "Progress depends on your current level, practice, attendance, and consistency. Most learners begin noticing improvement when they practise regularly and apply feedback.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-[#00A866]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to common questions about our courses, learning
            approach, batches, and demo sessions.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        <div className="mt-14 space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-[#062B5C]">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-[#00A866] transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 py-5 sm:px-7">
                    <p className="leading-8 text-slate-600">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-[#062B5C] p-8 text-center text-white sm:p-10">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Still Have a Question?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Speak with us directly and receive guidance based on your learning
            needs.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] transition hover:bg-[#00C970]"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}