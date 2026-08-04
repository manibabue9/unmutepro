import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  MessagesSquare,
  Sparkles,
  Target,
  UserRoundCheck,
} from "lucide-react";

const individualHighlights = [
  "Personal level check and confidence goal",
  "Real conversations with practical mentor feedback",
  "Interview, presentation or workplace focus",
  "Final progress review and next-step roadmap",
];

const campusHighlights = [
  "Baseline speaking and confidence snapshot",
  "Presentations, group discussions and teamwork",
  "Interview answers and placement conversations",
  "Post-programme cohort insight for the college",
];

const focusTracks = [
  { Icon: MessagesSquare, title: "Spoken confidence", text: "Everyday conversations and fluency" },
  { Icon: Target, title: "Interview readiness", text: "Clear answers and confident presence" },
  { Icon: Sparkles, title: "Professional expression", text: "Presentations and workplace communication" },
];

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-32 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            Two Flagship Programmes
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            The right journey for one learner
            <span className="mt-2 block text-[#00A866]">or an entire campus.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Both programmes are built around active speaking, real situations and mentor feedback—not passive grammar lectures.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[2rem] border border-[#00D97E]/40 bg-[#E9FFF5] p-7 shadow-sm sm:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00D97E]/20 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#007F4D] shadow-sm">
                  <UserRoundCheck size={16} /> For individuals
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#062B5C] px-4 py-2 text-sm font-extrabold text-white">
                  <CalendarDays size={16} className="text-[#00D97E]" /> 7 weeks
                </span>
              </div>

              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-[#008A55]">Individual confidence programme</p>
              <h3 className="mt-3 text-3xl font-extrabold text-[#062B5C] sm:text-4xl">Speak with Confidence</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A personalised journey for students, job seekers and early professionals who want to speak clearly without hesitation.
              </p>

              <ul className="mt-7 space-y-3">
                {individualHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00A866]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-2 rounded-2xl bg-white p-4 text-center shadow-sm">
                <div><strong className="block text-xl text-[#062B5C]">7</strong><span className="text-xs text-slate-500">weekly stages</span></div>
                <div className="border-x border-slate-200"><strong className="block text-xl text-[#062B5C]">Live</strong><span className="text-xs text-slate-500">mentor practice</span></div>
                <div><strong className="block text-xl text-[#062B5C]">1:1</strong><span className="text-xs text-slate-500">goal guidance</span></div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#learning-journey" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#062B5C] px-6 py-4 font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#0A4B8C]">
                  Explore the 7-week journey <ArrowRight size={18} />
                </a>
                <Link href="/assessment" className="inline-flex items-center justify-center rounded-xl border border-[#062B5C]/20 bg-white px-6 py-4 font-extrabold text-[#062B5C]">
                  Check my English level
                </Link>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#062B5C] p-7 text-white shadow-xl sm:p-10">
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#00D97E]/20 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">
                  <Building2 size={16} /> For colleges
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#00D97E] px-4 py-2 text-sm font-extrabold text-[#062B5C]">
                  <CalendarDays size={16} /> 15 training days
                </span>
              </div>

              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-[#00D97E]">Campus communication bootcamp</p>
              <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">Communication &amp; Placement Bootcamp</h3>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                A focused cohort programme that moves students from classroom knowledge to confident presentations, GDs, interviews and workplace conversations.
              </p>

              <ul className="mt-7 space-y-3">
                {campusHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-semibold text-blue-100">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#00D97E]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">Flexible delivery</p>
                <p className="mt-2 leading-7 text-blue-100">Run as 15 training days across three weeks, or adapt the schedule around departments, attendance and placement dates.</p>
              </div>

              <Link href="/institutions#bootcamp" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-6 py-4 font-extrabold text-[#062B5C] transition hover:-translate-y-1 hover:bg-[#00C970] sm:w-auto">
                View the 15-day bootcamp <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-[#F8FBFF] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-extrabold uppercase tracking-wider text-[#00A866]">Goal-led, not one-size-fits-all</p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#062B5C]">Choose a focus. Build real confidence.</h3>
            </div>
            <div className="grid flex-1 gap-3 sm:grid-cols-3 lg:max-w-3xl">
              {focusTracks.map(({ Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <Icon size={21} className="text-[#00A866]" />
                  <p className="mt-3 font-extrabold text-[#062B5C]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
