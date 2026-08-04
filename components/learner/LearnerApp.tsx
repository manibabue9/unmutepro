"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { BookOpen, Building2, Check, ChevronLeft, ChevronRight, Download, Home, Library, MessageCircle, Mic2, Play, UserRound } from "lucide-react";
import { allLessons, programs, resources, type Lesson } from "@/lib/learning-data";
import { createClient } from "@/lib/supabase/client";
import PracticeHub, { type PracticeEntry } from "@/components/learner/PracticeHub";
import { trackConversion } from "@/lib/analytics";

type Tab = "home" | "programs" | "practice" | "resources" | "profile";
type Learner = { name: string; goal: string; email?: string; role?: "learner" | "mentor" | "admin" };
type SyncMode = "local" | "cloud";
const storageKeys = { learner: "unmutepro.learner", completed: "unmutepro.completed", practice: "unmutepro.practice-log" };

export default function LearnerApp() {
  const [ready, setReady] = useState(false);
  const [learner, setLearner] = useState<Learner | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [practiceEntries, setPracticeEntries] = useState<PracticeEntry[]>([]);
  const [tab, setTab] = useState<Tab>("home");
  const [lesson, setLesson] = useState<(Lesson & { programId: string; programTitle: string }) | null>(null);
  const [syncMode, setSyncMode] = useState<SyncMode>("local");

  useEffect(() => {
    async function hydrate() {
      const savedLearner = localStorage.getItem(storageKeys.learner);
      const savedCompleted = localStorage.getItem(storageKeys.completed);
      const savedPractice = localStorage.getItem(storageKeys.practice);
      if (savedLearner) setLearner(JSON.parse(savedLearner));
      const localCompleted: string[] = savedCompleted ? JSON.parse(savedCompleted) : [];
      if (localCompleted.length) setCompleted(localCompleted);
      if (savedPractice) setPracticeEntries(JSON.parse(savedPractice));
      try {
        const [meResponse, progressResponse] = await Promise.all([fetch("/api/me"), fetch("/api/progress")]);
        if (meResponse.ok) {
          const me = await meResponse.json();
          if (me.authenticated) {
            const cloudLearner = { name: me.user.name, goal: me.user.goal, email: me.user.email, role: me.user.role };
            setLearner(cloudLearner);
            localStorage.setItem(storageKeys.learner, JSON.stringify(cloudLearner));
            setSyncMode("cloud");
          }
        }
        if (progressResponse.ok) {
          const progress = await progressResponse.json();
          if (progress.mode === "cloud") {
            const merged = Array.from(new Set([...progress.completed, ...localCompleted]));
            setCompleted(merged);
            localStorage.setItem(storageKeys.completed, JSON.stringify(merged));
            const pending = localCompleted.filter((id) => !progress.completed.includes(id));
            await Promise.all(pending.map((lessonId) => fetch("/api/progress", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lessonId, completed: true }) })));
            setSyncMode("cloud");
          }
        }
      } catch { /* Offline/local demo mode uses browser storage. */ }
      finally { setReady(true); }
    }
    void hydrate();
  }, []);

  const saveLearner = (value: Learner) => {
    localStorage.setItem(storageKeys.learner, JSON.stringify(value));
    setLearner(value);
  };
  const toggleComplete = (id: string) => setCompleted((current) => {
    const isCompleting = !current.includes(id);
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
    localStorage.setItem(storageKeys.completed, JSON.stringify(next));
    if (syncMode === "cloud") void fetch("/api/progress", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lessonId: id, completed: isCompleting }) });
    trackConversion(isCompleting ? "lesson_completed" : "lesson_marked_incomplete", { lesson_id: id, sync_mode: syncMode });
    return next;
  });
  const savePractice = (entry: PracticeEntry) => setPracticeEntries((current) => {
    const next = [entry, ...current];
    localStorage.setItem(storageKeys.practice, JSON.stringify(next));
    return next;
  });

  const saveProfile = async (value: Learner) => {
    if (syncMode === "cloud") {
      const response = await fetch("/api/me", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: value.name, goal: value.goal }) });
      if (!response.ok) throw new Error("Could not save your profile");
    }
    localStorage.setItem(storageKeys.learner, JSON.stringify(value));
    setLearner(value);
  };

  const signOut = async () => {
    await createClient().auth.signOut();
    localStorage.removeItem(storageKeys.learner);
    localStorage.removeItem(storageKeys.completed);
    localStorage.removeItem(storageKeys.practice);
    window.location.href = "/login";
  };

  if (!ready) return <div className="min-h-screen bg-[#F4F8FC]" />;
  if (!learner) return <Welcome onContinue={saveLearner} />;

  const openLesson = (id: string) => setLesson(allLessons.find((item) => item.id === id) ?? null);
  return (
    <div className="min-h-screen bg-[#F4F8FC] text-[#062B5C]">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Image src="/images/logo.png" alt="Unmute Pro" width={132} height={50} className="h-auto w-[116px]" priority />
          <div className="flex items-center gap-3"><span className="hidden text-sm text-slate-500 sm:inline">Keep showing up,</span><button onClick={() => setTab("profile")} className="grid h-10 w-10 place-items-center rounded-full bg-[#062B5C] font-bold text-white" aria-label="Open profile">{learner.name.charAt(0).toUpperCase()}</button></div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-28 pt-6 sm:px-6 lg:pb-10">
        {lesson ? <LessonDetail lesson={lesson} done={completed.includes(lesson.id)} onBack={() => setLesson(null)} onToggle={() => toggleComplete(lesson.id)} /> : <>
          {tab === "home" && <Dashboard learner={learner} completed={completed} openLesson={openLesson} showPrograms={() => setTab("programs")} />}
          {tab === "programs" && <Catalogue completed={completed} openLesson={openLesson} />}
          {tab === "practice" && <PracticeHub entries={practiceEntries} completedCount={completed.length} onSave={savePractice} />}
          {tab === "resources" && <Resources />}
          {tab === "profile" && <Profile learner={learner} completed={completed} syncMode={syncMode} onSave={saveProfile} onSignOut={signOut} onReset={() => { localStorage.removeItem(storageKeys.learner); localStorage.removeItem(storageKeys.completed); localStorage.removeItem(storageKeys.practice); setLearner(null); setCompleted([]); setPracticeEntries([]); setSyncMode("local"); }} />}
        </>}
      </main>
      {!lesson && <BottomNav tab={tab} setTab={setTab} />}
    </div>
  );
}

function Welcome({ onContinue }: { onContinue: (learner: Learner) => void }) {
  const [step, setStep] = useState<"intro" | "login">("intro");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("Speak English with confidence");
  const submit = (event: FormEvent) => { event.preventDefault(); if (name.trim().length >= 2) onContinue({ name: name.trim(), goal }); };
  return <main className="min-h-screen bg-[#062B5C] text-white lg:grid lg:grid-cols-2">
    <section className="relative flex min-h-[42vh] flex-col justify-between overflow-hidden p-6 sm:p-10 lg:min-h-screen lg:p-16">
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#00D97E]/20 blur-3xl" />
      <Image src="/images/logo.png" alt="Unmute Pro" width={150} height={58} className="relative rounded-xl bg-white px-3 py-2" priority />
      <div className="relative mt-14 max-w-xl"><p className="text-sm font-bold uppercase tracking-[.22em] text-[#00D97E]">Your confidence companion</p><h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">Your silence ends here.</h1><p className="mt-5 max-w-lg text-lg leading-8 text-blue-100">Practise real conversations, prepare for admissions and interviews, and grow with experienced corporate mentors.</p></div>
      <p className="relative mt-10 text-sm text-blue-200">Practical learning · Mentor guidance · Interview support</p>
    </section>
    <section className="flex items-center bg-[#F4F8FC] p-5 text-[#062B5C] sm:p-10 lg:p-16"><div className="mx-auto w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl shadow-slate-900/10 sm:p-10">
      {step === "intro" ? <><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00D97E]/15 text-2xl">👋</span><h2 className="mt-6 text-3xl font-extrabold">Build confidence one conversation at a time.</h2><p className="mt-4 leading-7 text-slate-600">Sign in for synchronized progress, or use the local demo on this device.</p><Link href="/login" className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-5 py-4 font-extrabold transition hover:bg-[#00C970]">Secure sign in <ChevronRight size={19} /></Link><button onClick={() => setStep("login")} className="mt-3 w-full rounded-xl border border-slate-300 px-5 py-3.5 font-bold">Use local demo</button><Link href="/" className="mt-4 block text-center text-sm font-semibold text-slate-500">Visit Unmute Pro website</Link></> :
      <form onSubmit={submit}><button type="button" onClick={() => setStep("intro")} className="mb-6 flex items-center gap-1 text-sm font-bold text-slate-500"><ChevronLeft size={17}/> Back</button><h2 className="text-3xl font-extrabold">Local demo profile</h2><p className="mt-2 text-slate-600">Tell us where you want to begin.</p><label className="mt-7 block text-sm font-bold">Your name<input value={name} onChange={(e) => setName(e.target.value)} minLength={2} required autoComplete="name" placeholder="e.g. Priya" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15" /></label><label className="mt-5 block text-sm font-bold">Primary goal<select value={goal} onChange={(e) => setGoal(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-[#00D97E]"><option>Speak English with confidence</option><option>Prepare for job interviews</option><option>Prepare for admissions interviews</option><option>Communicate better at work</option></select></label><button className="mt-7 w-full rounded-xl bg-[#00D97E] px-5 py-4 font-extrabold">Enter my dashboard</button><p className="mt-4 text-center text-xs leading-5 text-slate-400">Local demo data stays on this device.</p></form>}
    </div></section>
  </main>;
}

function Dashboard({ learner, completed, openLesson, showPrograms }: { learner: Learner; completed: string[]; openLesson: (id: string) => void; showPrograms: () => void }) {
  const total = allLessons.length; const percent = Math.round((completed.length / total) * 100); const next = allLessons.find((item) => !completed.includes(item.id)) ?? allLessons[0];
  return <div><section className="rounded-[2rem] bg-[#062B5C] p-6 text-white sm:p-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-bold text-[#00D97E]">Hello, {learner.name}</p><h1 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-5xl">A little practice today. A more confident you tomorrow.</h1><p className="mt-4 text-blue-100">Your goal: {learner.goal}</p></div><div className="min-w-40 rounded-2xl bg-white/10 p-5"><p className="text-4xl font-extrabold text-[#00D97E]">{percent}%</p><p className="mt-1 text-sm text-blue-100">overall progress</p></div></div></section>
    <section className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_.75fr]"><article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-sm font-bold uppercase tracking-wider text-[#00A866]">Continue learning</p><div className="mt-4 flex items-start gap-4"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#00D97E] text-[#062B5C]"><Play fill="currentColor" size={22}/></span><div><p className="text-sm font-semibold text-slate-500">{next.programTitle} · {next.duration} min</p><h2 className="mt-1 text-2xl font-extrabold">{next.title}</h2><p className="mt-2 leading-7 text-slate-600">{next.summary}</p></div></div><button onClick={() => openLesson(next.id)} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#062B5C] px-5 py-3 font-bold text-white">Open lesson <ChevronRight size={18}/></button></article><article className="rounded-3xl bg-[#E7FFF5] p-6 sm:p-8"><MessageCircle className="text-[#00A866]"/><h2 className="mt-4 text-2xl font-extrabold">Ready for a real conversation?</h2><p className="mt-2 leading-7 text-slate-600">Book a demo and speak directly with a mentor about your confidence or interview goals.</p><a href="https://wa.me/919392209162?text=Hello%20Unmute%20Pro%2C%20I%20would%20like%20to%20book%20a%20demo." target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold">Book a demo</a></article></section>
    <section className="mt-8 rounded-3xl bg-[#062B5C] p-6 text-white sm:flex sm:items-center sm:justify-between sm:p-8"><div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#00D97E] text-[#062B5C]"><Building2 size={24}/></span><div><p className="text-xs font-extrabold uppercase tracking-wider text-[#00D97E]">For colleges and institutions</p><h2 className="mt-2 text-2xl font-extrabold">Invite Unmute Pro to your campus</h2><p className="mt-2 max-w-2xl leading-7 text-blue-100">Request a confidence, interview or workplace communication presentation for your students.</p></div></div><Link href="/#institutions" className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold text-[#062B5C] sm:ml-6 sm:mt-0">Request a presentation <ChevronRight size={18}/></Link></section>
    <section className="mt-9"><div className="flex items-center justify-between"><div><p className="text-sm font-bold text-[#00A866]">LEARNING PATHS</p><h2 className="mt-1 text-2xl font-extrabold">Programs built for your next conversation</h2></div><button onClick={showPrograms} className="hidden font-bold text-[#00A866] sm:block">View all →</button></div><div className="mt-5 grid gap-4 md:grid-cols-3">{programs.map((program) => <ProgramCard key={program.id} program={program} completed={completed} openLesson={openLesson}/>)}</div></section>
  </div>;
}

function ProgramCard({ program, completed, openLesson }: { program: typeof programs[number]; completed: string[]; openLesson: (id: string) => void }) { const done = program.lessons.filter((item) => completed.includes(item.id)).length; const pct = Math.round(done / program.lessons.length * 100); return <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="h-2 w-14 rounded-full" style={{ background: program.accent }} /><p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{program.level} · {program.audience}</p><h3 className="mt-2 text-xl font-extrabold">{program.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{program.description}</p><div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-[#00D97E]" style={{ width: `${pct}%` }}/></div><div className="mt-2 flex justify-between text-xs font-semibold text-slate-500"><span>{done}/{program.lessons.length} lessons</span><span>{pct}%</span></div><button onClick={() => openLesson(program.lessons.find((item) => !completed.includes(item.id))?.id ?? program.lessons[0].id)} className="mt-5 flex items-center gap-2 font-bold text-[#00A866]">{done ? "Continue" : "Start program"} <ChevronRight size={17}/></button></article>; }

function Catalogue({ completed, openLesson }: { completed: string[]; openLesson: (id: string) => void }) { return <div><p className="text-sm font-bold uppercase tracking-wider text-[#00A866]">Course catalogue</p><h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">Learn for the moments that matter.</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Confidence-first programs for everyday English, admissions, interviews and the workplace.</p><div className="mt-9 space-y-6">{programs.map((program) => <article key={program.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="grid md:grid-cols-[.85fr_1.15fr]"><div className="p-6 text-white sm:p-8" style={{ background: program.id === "confidence-english" ? "#062B5C" : "#0A4178" }}><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">{program.level}</span><h2 className="mt-5 text-3xl font-extrabold">{program.title}</h2><p className="mt-3 leading-7 text-blue-100">{program.description}</p><p className="mt-6 text-sm text-[#00D97E]">With {program.mentor}</p></div><div className="divide-y divide-slate-100">{program.lessons.map((item, index) => <button key={item.id} onClick={() => openLesson(item.id)} className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-50"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-bold ${completed.includes(item.id) ? "bg-[#00D97E]" : "bg-slate-100"}`}>{completed.includes(item.id) ? <Check size={18}/> : index + 1}</span><span className="flex-1"><strong className="block">{item.title}</strong><small className="mt-1 block text-slate-500">{item.duration} min · Practical activity</small></span><ChevronRight className="text-slate-400" size={19}/></button>)}</div></div></article>)}</div></div>; }

function LessonDetail({ lesson, done, onBack, onToggle }: { lesson: Lesson & { programTitle: string }; done: boolean; onBack: () => void; onToggle: () => void }) { return <article className="mx-auto max-w-3xl"><button onClick={onBack} className="mb-5 flex items-center gap-1 font-bold text-slate-500"><ChevronLeft size={19}/> Back to learning</button><div className="overflow-hidden rounded-[2rem] bg-[#062B5C] text-white"><div className="grid min-h-64 place-items-center bg-gradient-to-br from-[#062B5C] to-[#0A4B8C] p-8 text-center"><span className="grid h-20 w-20 place-items-center rounded-full bg-[#00D97E] text-[#062B5C] shadow-xl"><Play size={30} fill="currentColor"/></span><p className="mt-5 text-sm font-bold text-[#00D97E]">{lesson.programTitle} · {lesson.duration} minutes</p><h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">{lesson.title}</h1></div></div><div className="mt-6 rounded-3xl bg-white p-6 shadow-sm sm:p-9"><h2 className="text-2xl font-extrabold">What you&apos;ll practise</h2><p className="mt-3 leading-7 text-slate-600">{lesson.summary}</p><ul className="mt-6 space-y-3">{lesson.outcomes.map((item) => <li key={item} className="flex gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E7FFF5] text-[#00A866]"><Check size={15}/></span><span>{item}</span></li>)}</ul><div className="mt-8 rounded-2xl border border-[#00D97E]/30 bg-[#E7FFF5] p-5"><p className="text-sm font-extrabold uppercase tracking-wider text-[#00A866]">Your real-world practice</p><p className="mt-2 leading-7">{lesson.practice}</p></div><button onClick={onToggle} className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-extrabold ${done ? "border-2 border-[#00D97E] bg-white" : "bg-[#00D97E]"}`}>{done ? <><Check size={19}/> Completed — mark incomplete</> : <><Check size={19}/> Mark lesson complete</>}</button></div></article>; }

function Resources() { return <div><p className="text-sm font-bold uppercase tracking-wider text-[#00A866]">Resource library</p><h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">Practical tools. Yours to keep.</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Use these guides between mentor conversations to prepare, practise and reflect.</p><div className="mt-9 grid gap-5 md:grid-cols-3">{resources.map((resource) => <article key={resource.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E7FFF5] text-[#00A866]"><Download size={22}/></span><p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#00A866]">{resource.kind}</p><h2 className="mt-2 text-xl font-extrabold">{resource.title}</h2><p className="mt-3 flex-1 leading-7 text-slate-600">{resource.description}</p><a href={resource.href} className="mt-6 flex items-center gap-2 font-extrabold">Download <Download size={17}/></a></article>)}</div><div className="mt-8 rounded-3xl bg-[#062B5C] p-7 text-white sm:flex sm:items-center sm:justify-between sm:p-9"><div><h2 className="text-2xl font-extrabold">Need help choosing what to practise?</h2><p className="mt-2 text-blue-100">A mentor can recommend the right program for your admission, interview or workplace goal.</p></div><a href="mailto:unmuteproofficial@gmail.com" className="mt-5 inline-flex rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold text-[#062B5C] sm:mt-0">Contact us</a></div></div>; }

function Profile({ learner, completed, syncMode, onSave, onSignOut, onReset }: { learner: Learner; completed: string[]; syncMode: SyncMode; onSave: (value: Learner) => Promise<void>; onSignOut: () => Promise<void>; onReset: () => void }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(learner.name);
  const [goal, setGoal] = useState(learner.goal);
  const [status, setStatus] = useState("");
  const submit = async (event: FormEvent) => { event.preventDefault(); setStatus("Saving…"); try { await onSave({ ...learner, name: name.trim(), goal }); setStatus("Profile saved."); setEditing(false); } catch { setStatus("Could not save. Please try again."); } };
  return <div className="mx-auto max-w-2xl"><h1 className="text-3xl font-extrabold sm:text-5xl">Your profile</h1><div className="mt-8 rounded-3xl bg-white p-7 shadow-sm sm:p-9"><div className="flex items-center gap-4"><span className="grid h-16 w-16 place-items-center rounded-full bg-[#062B5C] text-2xl font-extrabold text-white">{learner.name.charAt(0).toUpperCase()}</span><div className="min-w-0"><h2 className="truncate text-2xl font-extrabold">{learner.name}</h2><p className="truncate text-slate-500">{learner.email || "Unmute Pro learner"} · {syncMode === "cloud" ? "Cloud sync on" : "Local demo"}</p></div></div><div className="mt-8 grid grid-cols-2 gap-4"><div className="rounded-2xl bg-[#E7FFF5] p-5"><p className="text-3xl font-extrabold text-[#00A866]">{completed.length}</p><p className="mt-1 text-sm text-slate-600">lessons completed</p></div><div className="rounded-2xl bg-slate-100 p-5"><p className="text-3xl font-extrabold">{programs.length}</p><p className="mt-1 text-sm text-slate-600">learning paths</p></div></div>{editing ? <form onSubmit={submit} className="mt-7 border-t border-slate-100 pt-6"><label className="block text-sm font-bold">Your name<input value={name} onChange={(event) => setName(event.target.value)} required minLength={2} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3" /></label><label className="mt-4 block text-sm font-bold">Primary goal<select value={goal} onChange={(event) => setGoal(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option>Speak English with confidence</option><option>Prepare for job interviews</option><option>Prepare for admissions interviews</option><option>Communicate better at work</option></select></label><div className="mt-5 flex gap-3"><button className="rounded-xl bg-[#00D97E] px-5 py-3 font-bold">Save profile</button><button type="button" onClick={() => setEditing(false)} className="px-3 font-bold text-slate-500">Cancel</button></div></form> : <div className="mt-7 border-t border-slate-100 pt-6"><p className="text-sm font-bold text-slate-500">YOUR PRIMARY GOAL</p><p className="mt-2 font-bold">{learner.goal}</p><button onClick={() => setEditing(true)} className="mt-4 font-bold text-[#00A866]">Edit profile</button></div>}{status && <p role="status" className="mt-4 text-sm text-slate-500">{status}</p>}</div>{syncMode === "cloud" ? <div className="mt-5 flex flex-wrap items-center gap-5 rounded-3xl border border-slate-200 bg-white p-7">{learner.role === "admin" && <Link href="/admin" className="font-bold text-[#00A866]">Open admin console</Link>}<button onClick={() => void onSignOut()} className="font-bold text-red-600">Sign out</button></div> : <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-extrabold">Local demo account</h2><p className="mt-2 leading-7 text-slate-600">Your name and progress stay on this device. Create an account to sync progress across devices.</p><div className="mt-5 flex gap-5"><Link href="/login" className="font-bold text-[#00A866]">Create account</Link><button onClick={onReset} className="font-bold text-red-600">Reset local account</button></div></div>}</div>;
}

function BottomNav({ tab, setTab }: { tab: Tab; setTab: (tab: Tab) => void }) { const items = [{ id: "home" as Tab, label: "Home", Icon: Home }, { id: "programs" as Tab, label: "Programs", Icon: BookOpen }, { id: "practice" as Tab, label: "Practice", Icon: Mic2 }, { id: "resources" as Tab, label: "Resources", Icon: Library }, { id: "profile" as Tab, label: "Profile", Icon: UserRound }]; return <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-2 pb-[max(.7rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:sticky lg:bottom-auto lg:mx-auto lg:mb-8 lg:mt-4 lg:w-fit lg:rounded-full lg:border lg:px-2 lg:py-2 lg:shadow-lg" aria-label="Learner navigation"><div className="mx-auto flex max-w-lg justify-around gap-0.5 lg:max-w-none">{items.map(({ id, label, Icon }) => <button key={id} onClick={() => setTab(id)} className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-bold lg:min-w-0 lg:flex-none lg:flex-row lg:gap-2 lg:rounded-full lg:px-4 lg:text-xs ${tab === id ? "bg-[#E7FFF5] text-[#007F4D]" : "text-slate-500"}`}><Icon size={19}/><span>{label}</span></button>)}</div></nav>; }
