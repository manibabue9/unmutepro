"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Send, X } from "lucide-react";

const goals = ["Speak English confidently", "Prepare for interviews", "Workplace communication", "Admissions preparation", "Find my English level"];
const audiences = ["Student", "Parent", "College or institution", "Working professional"];

// Public lead assistant shown across the marketing website.
export default function LeadChatbot() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", mobile: "", email: "", audience: audiences[0], goal: goals[0], preferredTime: "Morning", website: "" });
  if (["/app", "/admin", "/login"].some(path => pathname.startsWith(path))) return null;

  const submit = async (event: FormEvent) => {
    event.preventDefault(); setBusy(true); setError("");
    try { const response = await fetch("/api/chat-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, goal: `${form.audience}: ${form.goal}` }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error); setSent(true); }
    catch (e) { setError(e instanceof Error ? e.message : "Please try again."); }
    finally { setBusy(false); }
  };

  return <div className="fixed bottom-5 left-4 z-[60] sm:bottom-6 sm:left-6">
    {open && <section className="mb-3 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl" aria-label="Unmute Assistant">
      <header className="flex items-center justify-between bg-[#062B5C] p-5 text-white"><div><p className="font-extrabold">Unmute Assistant</p><p className="mt-1 text-xs text-blue-100">Tell us your goal. A mentor will respond.</p></div><button onClick={()=>setOpen(false)} aria-label="Close assistant"><X/></button></header>
      {sent ? <div className="p-6 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-[#00A866]">✓</span><h2 className="mt-4 text-xl font-extrabold text-[#062B5C]">Thank you, {form.name}!</h2><p className="mt-2 leading-6 text-slate-600">Your details reached Unmute Pro. A mentor will contact you at your preferred time.</p><a href={`https://wa.me/919392209162?text=${encodeURIComponent(`Hi Unmute Pro, I am ${form.name}. I am a ${form.audience} and need help with ${form.goal}.`)}`} className="mt-5 inline-flex rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold text-[#062B5C]">Continue on WhatsApp</a></div> : <form onSubmit={submit} className="max-h-[65vh] space-y-4 overflow-y-auto p-5 text-[#062B5C]"><Select label="I am a..." value={form.audience} options={audiences} onChange={value=>setForm({...form,audience:value})}/><Field label="Your name" value={form.name} onChange={value=>setForm({...form,name:value})}/><Field label="Mobile number" value={form.mobile} onChange={value=>setForm({...form,mobile:value})} type="tel"/><Field label="Email (optional)" value={form.email} onChange={value=>setForm({...form,email:value})} type="email"/><Select label="What do you need help with?" value={form.goal} options={goals} onChange={value=>setForm({...form,goal:value})}/><Select label="Best time to contact you" value={form.preferredTime} options={["Morning","Afternoon","Evening","Any time"]} onChange={value=>setForm({...form,preferredTime:value})}/><input className="hidden" value={form.website} onChange={e=>setForm({...form,website:e.target.value})} tabIndex={-1}/>{error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}<button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-5 py-3.5 font-extrabold disabled:opacity-50">{busy?"Sending...":"Request guidance"}<Send size={17}/></button><p className="text-center text-xs leading-5 text-slate-500">By submitting, you agree that Unmute Pro may contact you about training.</p></form>}
    </section>}
    <button onClick={()=>setOpen(!open)} className="flex items-center gap-2 rounded-full bg-[#062B5C] px-5 py-3.5 font-extrabold text-white shadow-xl" aria-expanded={open} aria-label="Open Unmute Assistant"><MessageCircle className="text-[#00D97E]"/><span className="hidden sm:inline">Can we help?</span></button>
  </div>;
}

function Field({label,value,onChange,type="text"}:{label:string;value:string;onChange:(value:string)=>void;type?:string}) { return <label className="block text-sm font-bold">{label}<input required={type!=="email"} value={value} onChange={e=>onChange(e.target.value)} type={type} className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-3 font-normal outline-none focus:border-[#00D97E]"/></label>; }
function Select({label,value,options,onChange}:{label:string;value:string;options:string[];onChange:(value:string)=>void}) { return <label className="block text-sm font-bold">{label}<select value={value} onChange={e=>onChange(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 font-normal">{options.map(option=><option key={option}>{option}</option>)}</select></label>; }

