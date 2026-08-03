import type { Metadata } from "next";
import { ArrowLeft, Building2, CalendarCheck2, Download, FileQuestion, MessageCircleMore, Mic2, NotebookPen, Target, UserRoundCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Communication Skills & Interview PDF Resources",
  description: "Download free Unmute Pro PDF workbooks for speaking confidence, campus placements, interviews, presentations and college communication training.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Unmute Pro Communication Skills Resources",
    description: "Practical PDF guides for students, job seekers and college placement teams.",
    url: "https://www.unmutepro.com/resources",
    type: "website",
  },
};

const resources = [
  {
    title: "30-Day Speaking Confidence Challenge",
    description: "A structured month of short speaking tasks for fluency, clarity, group discussions, presentations and interviews.",
    href: "/resources/unmute-pro-30-day-speaking-confidence-challenge.pdf",
    audience: "Students and early professionals",
    Icon: CalendarCheck2,
    featured: true,
  },
  {
    title: "Placement Interview Answer Workbook",
    description: "Build a self-introduction, STAR stories, strengths, role-fit answers and a calm final interview checklist.",
    href: "/resources/unmute-pro-placement-interview-answer-workbook.pdf",
    audience: "Students and job seekers",
    Icon: UserRoundCheck,
    featured: true,
  },
  {
    title: "Campus Communication Readiness Checklist",
    description: "A practical diagnostic and programme-planning guide for placement officers, faculty and institutional leaders.",
    href: "/resources/unmute-pro-campus-communication-readiness-checklist.pdf",
    audience: "Colleges and placement teams",
    Icon: Building2,
    featured: true,
  },
  {
    title: "7-Day Confidence Challenge",
    description: "One practical speaking activity every day to reduce hesitation and build confidence.",
    href: "/resources/download/7-day-confidence-challenge",
    audience: "Quick-start guide",
    Icon: Mic2,
  },
  {
    title: "50 Daily-Use English Sentences",
    description: "Useful sentences for daily conversations, work situations and confident communication.",
    href: "/resources/download/50-daily-use-sentences",
    audience: "Everyday English",
    Icon: MessageCircleMore,
  },
  {
    title: "Confident Self-Introduction Guide",
    description: "A clear Present-Past-Future structure for interviews and professional introductions.",
    href: "/resources/download/self-introduction-guide",
    audience: "Interview preparation",
    Icon: Target,
  },
  {
    title: "25 HR Interview Questions Workbook",
    description: "Prepare clear answers for common HR questions using simple practice methods.",
    href: "/resources/download/25-hr-interview-questions",
    audience: "Placement preparation",
    Icon: FileQuestion,
  },
  {
    title: "Vocabulary Builder and Tracker",
    description: "Learn useful words through meaning, examples, repetition and weekly tracking.",
    href: "/resources/download/vocabulary-builder-tracker",
    audience: "Spoken English",
    Icon: NotebookPen,
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-[#062B5C]"><ArrowLeft size={18} /> Unmute Pro</Link>
          <Link href="/assessment" className="rounded-full bg-[#00D97E] px-5 py-2.5 text-sm font-bold text-[#062B5C]">Check my level</Link>
        </div>
      </header>

      <section className="bg-[#062B5C] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00D97E]">Free Learning Resources</p>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">Download, practise and build confidence</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">Branded workbooks and checklists for students, job seekers and college placement teams. No complicated theory - just useful practice.</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.href} className={`flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${resource.featured ? "border-emerald-200 ring-1 ring-emerald-100" : "border-slate-200"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#00A866]" aria-hidden="true"><resource.Icon size={28} /></div>
                {resource.featured && <span className="rounded-full bg-[#062B5C] px-3 py-1 text-xs font-bold text-white">Premium guide</span>}
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#00A866]">{resource.audience}</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#062B5C]">{resource.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{resource.description}</p>
              <a href={resource.href} download className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-5 py-3.5 font-bold text-[#062B5C] transition hover:-translate-y-0.5 hover:bg-[#00C970]">Download PDF <Download size={18} /></a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 rounded-3xl bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><h2 className="text-3xl font-extrabold text-[#062B5C]">Want a personal recommendation?</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">Take the free communication level check. You will receive an estimated starting level and the Unmute Pro learning path that best matches your goal.</p></div>
          <Link href="/assessment" className="inline-flex items-center justify-center rounded-xl bg-[#062B5C] px-7 py-4 font-bold text-white">Start free level check</Link>
        </div>
      </section>
    </main>
  );
}

