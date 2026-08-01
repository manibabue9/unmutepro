import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free English Learning Resources",
  description: "Download free Unmute Pro PDFs for confidence, spoken English, interviews, self-introduction and vocabulary practice.",
  alternates: { canonical: "/resources" },
};

const resources = [
  { title: "7-Day Confidence Challenge", description: "One practical speaking activity every day to reduce hesitation and build confidence.", slug: "7-day-confidence-challenge", icon: "â­" },
  { title: "50 Daily-Use English Sentences", description: "Useful sentences for daily conversations, work situations and confident communication.", slug: "50-daily-use-sentences", icon: "ðŸ’¬" },
  { title: "Confident Self-Introduction Guide", description: "A clear Present-Past-Future structure for interviews and professional introductions.", slug: "self-introduction-guide", icon: "ðŸ—£ï¸" },
  { title: "25 HR Interview Questions Workbook", description: "Prepare clear answers for common HR questions using simple practice methods.", slug: "25-hr-interview-questions", icon: "ðŸŽ¯" },
  { title: "Vocabulary Builder and Tracker", description: "Learn useful words through meaning, examples, repetition and weekly tracking.", slug: "vocabulary-builder-tracker", icon: "ðŸ“˜" },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="font-extrabold text-[#062B5C]">â† Unmute Pro</Link>
          <Link href="/#contact" className="rounded-full bg-[#00D97E] px-5 py-2.5 text-sm font-bold text-[#062B5C]">Book Demo</Link>
        </div>
      </header>

      <section className="bg-[#062B5C] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00D97E]">Free Learning Resources</p>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">Download, practise and build confidence</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">Five practical Unmute Pro PDF guides for spoken English, interviews, vocabulary and daily confidence practice.</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.slug} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-3xl" aria-hidden="true">{resource.icon}</div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#00A866]">Free PDF</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#062B5C]">{resource.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{resource.description}</p>
              <a href={`/resources/download/${resource.slug}`} className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-5 py-3.5 font-bold text-[#062B5C] transition hover:-translate-y-0.5 hover:bg-[#00C970]">Download PDF <span className="ml-2">â†“</span></a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-10">
          <h2 className="text-3xl font-extrabold text-[#062B5C]">Use one resource at a time</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Download a guide, practise aloud and track your improvement. Consistency matters more than completing everything at once.</p>
          <Link href="/#contact" className="mt-6 inline-flex rounded-xl bg-[#062B5C] px-7 py-4 font-bold text-white">Book Demo</Link>
        </div>
      </section>
    </main>
  );
}

