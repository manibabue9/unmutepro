"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { assessmentQuestions } from "@/lib/assessment-data";

type Result = { level: string; program: string; message: string; score: number; total: number };

export default function AssessmentClient() {
  const [stage, setStage] = useState<"intro" | "details" | "test" | "result">("intro");
  const [details, setDetails] = useState({ name: "", email: "", mobile: "", goal: "Speak English confidently", website: "" });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const submit = async () => {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/assessment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...details, answers }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to submit your result");
      setResult(data.result); setStage("result"); window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) { setError(e instanceof Error ? e.message : "Please try again"); }
    finally { setLoading(false); }
  };

  return <main className="min-h-screen bg-[#F4F8FC] px-4 py-6 text-[#062B5C] sm:py-10">
    <div className="mx-auto max-w-3xl">
      <Link href="/" className="inline-flex items-center gap-2 font-bold"><ArrowLeft size={18}/> Back to Unmute Pro</Link>
      {stage === "intro" && <section className="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-xl"><div className="bg-[#062B5C] p-7 text-white sm:p-10"><p className="font-bold text-[#00D97E]">FREE â€¢ ABOUT 10 MINUTES</p><h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">English Level Check</h1><p className="mt-4 max-w-xl text-lg leading-8 text-blue-100">Discover your estimated English level and the right Unmute Pro learning path for your goals.</p></div><div className="p-7 sm:p-10"><div className="grid gap-4 sm:grid-cols-3">{[[Clock3,"20 quick questions"],[CheckCircle2,"Instant result"],[ShieldCheck,"Personal guidance"]].map(([Icon,label]) => { const C = Icon as typeof Clock3; return <div key={label as string} className="rounded-2xl bg-slate-50 p-4"><C className="text-[#00A866]"/><p className="mt-2 font-bold">{label as string}</p></div>; })}</div><p className="mt-6 text-sm leading-6 text-slate-500">This is an Unmute Pro placement check aligned broadly with CEFR levels. It is not an official CEFR examination or certificate.</p><button onClick={()=>setStage("details")} className="mt-7 w-full rounded-xl bg-[#00D97E] px-6 py-4 text-lg font-extrabold">Start my free level check <ArrowRight className="ml-2 inline"/></button></div></section>}
      {stage === "details" && <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-xl sm:p-10"><p className="font-bold text-[#00A866]">STEP 1 OF 2</p><h1 className="mt-2 text-3xl font-extrabold">Tell us about your goal</h1><p className="mt-2 text-slate-600">We use these details to save your result and guide you personally.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Full name" value={details.name} onChange={v=>setDetails({...details,name:v})}/><Field label="Mobile number" value={details.mobile} onChange={v=>setDetails({...details,mobile:v})} inputMode="tel"/><Field label="Email address" value={details.email} onChange={v=>setDetails({...details,email:v})} type="email"/><label className="text-sm font-bold">Main goal<select value={details.goal} onChange={e=>setDetails({...details,goal:e.target.value})} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal"><option>Speak English confidently</option><option>Prepare for interviews</option><option>Improve workplace communication</option><option>Prepare for admissions</option><option>Improve presentations</option></select></label><input value={details.website} onChange={e=>setDetails({...details,website:e.target.value})} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"/></div>{error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}<button onClick={()=>{ if(details.name.trim().length<2 || !details.email.includes("@") || details.mobile.replace(/\D/g,"").length<10){setError("Please enter a valid name, email and 10-digit mobile number.");return;} setError("");setStage("test");}} className="mt-7 w-full rounded-xl bg-[#00D97E] px-6 py-4 font-extrabold">Continue to questions</button></section>}
      {stage === "test" && (()=>{const q=assessmentQuestions[current]; const answered=answers[q.id] !== undefined; return <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-xl sm:p-10"><div className="flex items-center justify-between text-sm font-bold"><span>Question {current+1} of {assessmentQuestions.length}</span><span>{Math.round(((current+1)/assessmentQuestions.length)*100)}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-[#00D97E] transition-all" style={{width:`${((current+1)/assessmentQuestions.length)*100}%`}}/></div><h1 className="mt-8 text-2xl font-extrabold leading-9">{q.prompt}</h1><div className="mt-6 grid gap-3">{q.options.map((option,index)=><button key={option} onClick={()=>setAnswers({...answers,[q.id]:index})} className={`rounded-xl border-2 p-4 text-left font-semibold transition ${answers[q.id]===index?"border-[#00D97E] bg-emerald-50":"border-slate-200 hover:border-slate-300"}`}>{String.fromCharCode(65+index)}. {option}</button>)}</div>{error && <p className="mt-4 text-sm text-red-700">{error}</p>}<div className="mt-8 flex gap-3"><button disabled={current===0} onClick={()=>setCurrent(current-1)} className="rounded-xl border border-slate-300 px-5 py-3 font-bold disabled:opacity-30">Back</button>{current<assessmentQuestions.length-1?<button disabled={!answered} onClick={()=>setCurrent(current+1)} className="flex-1 rounded-xl bg-[#062B5C] px-5 py-3 font-bold text-white disabled:opacity-30">Next</button>:<button disabled={!answered||loading} onClick={submit} className="flex-1 rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold disabled:opacity-50">{loading?"Checking...":"See my result"}</button>}</div></section>})()}
      {stage === "result" && result && <section className="mt-6 overflow-hidden rounded-[2rem] bg-white text-center shadow-xl"><div className="bg-[#062B5C] p-8 text-white sm:p-12"><CheckCircle2 className="mx-auto text-[#00D97E]" size={52}/><p className="mt-5 font-bold text-blue-100">YOUR ESTIMATED LEVEL</p><h1 className="mt-2 text-6xl font-black text-[#00D97E]">{result.level}</h1><p className="mt-3">Score: {result.score} / {result.total}</p></div><div className="p-7 sm:p-10"><p className="text-sm font-bold text-[#00A866]">RECOMMENDED NEXT STEP</p><h2 className="mt-2 text-3xl font-extrabold">{result.program}</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">{result.message}</p><p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">Your result has been saved. An Unmute Pro mentor can help you understand it and create a personal learning plan.</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><Link href="/#contact" className="rounded-xl bg-[#00D97E] px-6 py-4 font-extrabold">Book Demo</Link><a href="https://wa.me/919392209162?text=Hi%20Unmute%20Pro%2C%20I%20completed%20the%20English%20Level%20Check." className="rounded-xl border-2 border-[#062B5C] px-6 py-4 font-extrabold">Discuss on WhatsApp</a></div></div></section>}
    </div>
  </main>;
}

function Field({label,value,onChange,type="text",inputMode}:{label:string;value:string;onChange:(v:string)=>void;type?:string;inputMode?:"tel"}) { return <label className="text-sm font-bold">{label}<input required value={value} onChange={e=>onChange(e.target.value)} type={type} inputMode={inputMode} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#00D97E]"/></label>; }

