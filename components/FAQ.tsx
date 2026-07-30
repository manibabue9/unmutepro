"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can a complete beginner join Unmute Pro?",
    answer:
      "Yes. Our programs are suitable for beginners as well as learners who already understand English but hesitate to speak.",
  },
  {
    question: "Are the sessions practical or grammar-based?",
    answer:
      "Our primary focus is practical communication. Grammar is explained where necessary, but learners spend more time speaking, practising and receiving feedback.",
  },
  {
    question: "Who can join the programs?",
    answer:
      "Students, job seekers, working professionals, homemakers and anyone who wants to improve spoken English and communication confidence can join.",
  },
  {
    question: "Do you provide interview preparation?",
    answer:
      "Yes. We provide self-introduction practice, common interview questions, mock interviews, body-language guidance and personal feedback.",
  },
  {
    question: "Are classes available online?",
    answer:
      "Please contact us for the latest information about available learning formats, class schedules and upcoming programs.",
  },
  {
    question: "How can I choose the right course?",
    answer:
      "Book a free demo or speak with our mentor. We will understand your level and goals before recommending the most suitable program.",
  },
  {
    question: "Will I become fluent immediately?",
    answer:
      "Fluency develops through regular practice, consistent attendance and active participation. Our role is to guide you with the right structure, activities and feedback.",
  },
  {
    question: "How can I know the course fees and timings?",
    answer:
      "Course fees and current timings are shared personally based on the selected program. Contact us through WhatsApp, phone or the enquiry form.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="scroll-mt-32 bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            Questions before you
            <span className="mt-2 block text-[#00A866]">
              begin your journey?
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Find answers to common questions about our learning approach and
            programs.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                  isOpen
                    ? "border-[#00D97E] shadow-md"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#062B5C] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-bold transition duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#00D97E] text-[#062B5C]"
                        : "bg-slate-100 text-[#062B5C]"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6">
                    <p className="leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600">
            Still have a question about our programs?
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#062B5C] px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0A4B8C]"
          >
            Contact Us
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}