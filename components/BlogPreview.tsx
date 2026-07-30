import {
  ArrowRight,
  BriefcaseBusiness,
  MessagesSquare,
  Mic,
} from "lucide-react";

const articles = [
  {
    icon: MessagesSquare,
    category: "Spoken English",
    title: "10 Simple Ways to Improve Your Spoken English Every Day",
    description:
      "Practical habits that can help you build vocabulary, fluency, and confidence through daily practice.",
  },
  {
    icon: BriefcaseBusiness,
    category: "Interview Skills",
    title: "How to Introduce Yourself Confidently in an Interview",
    description:
      "Learn how to structure a clear and professional introduction that creates a positive first impression.",
  },
  {
    icon: Mic,
    category: "Confidence",
    title: "How to Overcome Fear While Speaking English",
    description:
      "Understand why hesitation happens and use simple techniques to begin speaking without overthinking.",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="resources"
      className="scroll-mt-24 bg-[#F8FBFF] px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-[#00A866]">
              Learning Resources
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
              Practical English Tips and Career Guidance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Helpful learning resources for improving communication,
              confidence, interviews, and workplace English.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-[#00A866] transition hover:text-[#007F4D]"
          >
            Suggest a Topic
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#00D97E] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#00A866] transition group-hover:bg-[#00D97E] group-hover:text-[#062B5C]">
                  <Icon size={29} aria-hidden="true" />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-wider text-[#00A866]">
                  {article.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-9 text-[#062B5C]">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {article.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#062B5C] transition group-hover:text-[#00A866]"
                >
                  Learn More
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Full learning articles and individual blog pages will be added in a
          future content update.
        </p>
      </div>
    </section>
  );
}