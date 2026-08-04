"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck2, CheckCircle2, MessageCircle, Mic2, Sparkles } from "lucide-react";
import { allLessons } from "@/lib/learning-data";
import { trackConversion } from "@/lib/analytics";

export type PracticeEntry = {
  id: string;
  lessonId: string;
  reflection: string;
  confidence: number;
  createdAt: string;
};

type Props = {
  entries: PracticeEntry[];
  completedCount: number;
  onSave: (entry: PracticeEntry) => void;
};

export default function PracticeHub({ entries, completedCount, onSave }: Props) {
  const firstOpenLesson = allLessons[Math.min(entries.length, allLessons.length - 1)];
  const [lessonId, setLessonId] = useState(firstOpenLesson.id);
  const [reflection, setReflection] = useState("");
  const [confidence, setConfidence] = useState(3);
  const [saved, setSaved] = useState(false);

  const practiceDays = useMemo(() => new Set(entries.map((entry) => entry.createdAt.slice(0, 10))).size, [entries]);
  const latestEntry = entries[0];
  const latestLesson = latestEntry ? allLessons.find((item) => item.id === latestEntry.lessonId) : null;
  const readiness = Math.min(100, Math.round(((completedCount + entries.length) / (allLessons.length * 2)) * 100));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const cleanReflection = reflection.trim();
    if (cleanReflection.length < 10) return;
    onSave({
      id: `${Date.now()}`,
      lessonId,
      reflection: cleanReflection,
      confidence,
      createdAt: new Date().toISOString(),
    });
    trackConversion("speaking_practice_logged", { lesson_id: lessonId, confidence });
    setReflection("");
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };

  const mentorMessage = encodeURIComponent(
    `Hello Unmute Pro, I completed a speaking practice for "${latestLesson?.title ?? "my communication goal"}" and would like mentor feedback.`,
  );

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-[#00A866]">Daily practice</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">Turn learning into a speaking habit.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Complete one real conversation task, record what happened and decide what to improve next.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat icon={<CalendarCheck2 size={22} />} value={practiceDays} label="practice days" />
        <Stat icon={<Mic2 size={22} />} value={entries.length} label="reflections saved" />
        <Stat icon={<Sparkles size={22} />} value={`${readiness}%`} label="portfolio readiness" />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00D97E] text-[#062B5C]"><Mic2 size={23}/></span>
            <div><p className="text-xs font-extrabold uppercase tracking-wider text-[#00A866]">Today&apos;s mission</p><h2 className="mt-1 text-2xl font-extrabold">Speak first. Reflect second.</h2></div>
          </div>

          <label className="mt-7 block text-sm font-bold">Choose a practice mission
            <select value={lessonId} onChange={(event) => setLessonId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5">
              {allLessons.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </label>
          <div className="mt-4 rounded-2xl bg-[#E7FFF5] p-5 leading-7 text-slate-700">
            {allLessons.find((item) => item.id === lessonId)?.practice}
          </div>
          <label className="mt-5 block text-sm font-bold">What happened?
            <textarea value={reflection} onChange={(event) => setReflection(event.target.value)} minLength={10} required rows={4} placeholder="Example: I introduced myself to a classmate. I paused twice, but finished without switching languages." className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3.5 leading-6" />
          </label>
          <fieldset className="mt-5"><legend className="text-sm font-bold">How confident did you feel?</legend><div className="mt-2 grid grid-cols-5 gap-2">{[1,2,3,4,5].map((value) => <button type="button" key={value} onClick={() => setConfidence(value)} className={`rounded-xl border px-2 py-3 font-extrabold ${confidence === value ? "border-[#00D97E] bg-[#E7FFF5] text-[#007F4D]" : "border-slate-200 text-slate-500"}`} aria-label={`Confidence ${value} out of 5`}>{value}</button>)}</div></fieldset>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-5 py-4 font-extrabold"><CheckCircle2 size={19}/> Save my practice</button>
          {saved && <p role="status" className="mt-3 text-center text-sm font-bold text-[#007F4D]">Practice saved on this device.</p>}
        </form>

        <div className="space-y-6">
          <article className="rounded-3xl bg-[#062B5C] p-6 text-white sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">Mentor checkpoint</p>
            <h2 className="mt-3 text-2xl font-extrabold">Ask for feedback when you are ready.</h2>
            <p className="mt-3 leading-7 text-blue-100">Share your latest practice with Unmute Pro. A mentor can guide your next conversation.</p>
            <a href={`https://wa.me/919392209162?text=${mentorMessage}`} target="_blank" rel="noreferrer" className={`mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-extrabold text-[#062B5C] ${latestEntry ? "bg-[#00D97E]" : "pointer-events-none bg-slate-300 opacity-60"}`}><MessageCircle size={18}/> Request feedback</a>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-extrabold">Recent practice</h2>
            {entries.length ? <div className="mt-4 space-y-4">{entries.slice(0, 3).map((entry) => {
              const item = allLessons.find((lesson) => lesson.id === entry.lessonId);
              return <div key={entry.id} className="border-t border-slate-100 pt-4 first:border-0 first:pt-0"><p className="text-sm font-extrabold">{item?.title ?? "Speaking practice"}</p><p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{entry.reflection}</p><p className="mt-2 text-xs font-bold text-[#00A866]">Confidence {entry.confidence}/5</p></div>;
            })}</div> : <p className="mt-3 leading-7 text-slate-600">Your saved reflections will appear here. Start with one short real-world conversation.</p>}
          </article>
        </div>
      </section>
      <p className="mt-5 text-sm leading-6 text-slate-500">Portfolio readiness is a personal progress indicator based on lessons and practice entries. It is not a certificate or employment guarantee.</p>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: number | string; label: string }) {
  return <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E7FFF5] text-[#00A866]">{icon}</span><div><p className="text-2xl font-extrabold">{value}</p><p className="text-sm text-slate-500">{label}</p></div></div>;
}
