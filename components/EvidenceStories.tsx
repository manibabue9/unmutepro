import Link from "next/link";
import { ArrowRight, BarChart3, FileCheck2, MessageSquareText } from "lucide-react";

const journeys = [
  {
    Icon: MessageSquareText,
    title: "Confidence journey",
    steps: ["Record a short baseline response", "Practise weekly with feedback", "Compare clarity, structure and initiative"],
  },
  {
    Icon: FileCheck2,
    title: "Interview journey",
    steps: ["Review current answers", "Build evidence-led responses", "Complete a realistic mock interview"],
  },
  {
    Icon: BarChart3,
    title: "Campus pilot journey",
    steps: ["Agree cohort priorities", "Observe participation and scenarios", "Share strengths, gaps and next steps"],
  },
];

export default function EvidenceStories() {
  return (
    <section id="evidence" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[.2em] text-[#00A866]">Proof before promises</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">Make communication progress visible.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">We document the behaviours learners practise and the next steps they need. Real success stories are published only with learner or institution consent.</p>
          </div>
          <Link href="/assessment" className="inline-flex items-center gap-2 font-extrabold text-[#008A55]">Create your baseline <ArrowRight size={18} /></Link>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {journeys.map(({ Icon, title, steps }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-[#F7FAFE] p-6 sm:p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E3FFF2] text-[#008A55]"><Icon size={24} /></span>
              <h3 className="mt-5 text-xl font-extrabold text-[#062B5C]">{title}</h3>
              <ol className="mt-5 space-y-3">
                {steps.map((step, index) => <li key={step} className="flex gap-3 leading-7 text-slate-600"><span className="font-extrabold text-[#00A866]">0{index + 1}</span><span>{step}</span></li>)}
              </ol>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-3xl bg-[#062B5C] p-6 text-white sm:grid-cols-2 sm:p-8">
          <a href="/resources/unmute-pro-sample-learner-scorecard.pdf" className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">Clearly labelled sample</p>
            <h3 className="mt-2 text-xl font-extrabold">Download a learner scorecard</h3>
            <p className="mt-2 text-sm leading-6 text-blue-100">See how confidence, clarity and real-world practice can be reviewed responsibly.</p>
          </a>
          <a href="/resources/unmute-pro-sample-campus-cohort-report.pdf" className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">Clearly labelled sample</p>
            <h3 className="mt-2 text-xl font-extrabold">Download a campus cohort report</h3>
            <p className="mt-2 text-sm leading-6 text-blue-100">Preview the reporting structure available for a focused college pilot.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

