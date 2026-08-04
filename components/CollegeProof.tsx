import { ArrowRight, Download, FileBarChart2, GraduationCap, UsersRound } from "lucide-react";

export default function CollegeProof() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[.2em] text-[#00A866]">Start with evidence</p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#062B5C] sm:text-5xl">Pilot one cohort before you scale.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">A focused pilot helps the placement team confirm learner needs, participation and delivery fit before a wider rollout.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            [UsersRound, "Priority cohort", "Select one branch, year or placement group with a clear communication need."],
            [GraduationCap, "Observed practice", "Use interviews, presentations, group discussions and workplace scenarios."],
            [FileBarChart2, "Useful handover", "Receive participation visibility, common gaps and recommended next actions."],
          ].map(([Icon, title, text]) => { const I = Icon as typeof UsersRound; return <article key={title as string} className="rounded-3xl bg-[#F5F9FD] p-6"><I className="text-[#00A866]" size={26}/><h3 className="mt-4 text-xl font-extrabold">{title as string}</h3><p className="mt-2 leading-7 text-slate-600">{text as string}</p></article>; })}
        </div>

        <div className="mt-8 grid gap-4 rounded-3xl border border-slate-200 p-6 md:grid-cols-[1fr_1fr_auto] md:items-center sm:p-8">
          <a href="/resources/unmute-pro-sample-learner-scorecard.pdf" className="flex items-center gap-3 font-extrabold text-[#062B5C]"><Download className="text-[#00A866]"/> Sample learner scorecard</a>
          <a href="/resources/unmute-pro-sample-campus-cohort-report.pdf" className="flex items-center gap-3 font-extrabold text-[#062B5C]"><Download className="text-[#00A866]"/> Sample cohort report</a>
          <a href="#institutions" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold text-[#062B5C]">Discuss a pilot <ArrowRight size={18}/></a>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500">The downloadable documents use illustrative sample data. They show the reporting format and do not claim outcomes for a real learner or institution.</p>
      </div>
    </section>
  );
}

