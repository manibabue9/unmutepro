import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";

const trustPoints = ["Live speaking practice", "Interview and placement support", "15+ years of corporate experience"];

export default function Hero() {
  return <section id="home" className="relative scroll-mt-32 overflow-hidden bg-[#F5F9FF]">
    <div className="absolute inset-x-0 top-0 h-1.5 bg-[#00D97E]" />
    <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#00D97E]/15 blur-3xl" />
    <div className="pointer-events-none absolute -right-40 top-12 h-96 w-96 rounded-full bg-[#062B5C]/10 blur-3xl" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[720px] lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-20">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00D97E]/30 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#007F4D] shadow-sm"><Sparkles size={15}/> Communication confidence for campus and career</div>
        <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-tight text-[#062B5C] sm:text-6xl lg:text-7xl">Speak up in interviews, presentations and your first job.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Practical communication training for students who want to express ideas clearly—and colleges that want placement-ready graduates.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/assessment" className="group rounded-2xl bg-[#00D97E] p-5 text-[#062B5C] shadow-lg shadow-emerald-200 transition hover:-translate-y-1"><span className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider"><GraduationCap size={19}/> I&apos;m a student</span><span className="mt-2 flex items-center justify-between text-xl font-extrabold">Check my communication level <ArrowRight className="transition group-hover:translate-x-1"/></span></Link>
          <Link href="/institutions" className="group rounded-2xl bg-[#062B5C] p-5 text-white shadow-lg shadow-slate-300 transition hover:-translate-y-1"><span className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#00D97E]"><Building2 size={19}/> I represent a college</span><span className="mt-2 flex items-center justify-between text-xl font-extrabold">Explore campus programmes <ArrowRight className="transition group-hover:translate-x-1"/></span></Link>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">{trustPoints.map(point=><p key={point} className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#00A866]"/>{point}</p>)}</div>
      </div>
      <div className="relative mx-auto w-full max-w-[480px] pb-10">
        <div className="absolute -right-4 top-10 z-20 rounded-2xl bg-[#00D97E] px-5 py-4 text-[#062B5C] shadow-xl"><p className="text-3xl font-extrabold">15+</p><p className="text-xs font-bold uppercase tracking-wider">Years corporate experience</p></div>
        <div className="overflow-hidden rounded-[2rem] border-[10px] border-white bg-[#062B5C] shadow-2xl"><div className="relative aspect-[4/5]"><Image src="/images/manibabu.jpg" alt="Manibabu, Unmute Pro communication mentor" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#031A38] via-[#031A38]/88 to-transparent px-7 pb-8 pt-28 text-white"><p className="text-3xl font-extrabold">Manibabu</p><p className="mt-1 font-bold text-[#00D97E]">Communication Mentor</p><p className="mt-3 max-w-sm text-sm leading-6 text-blue-100">Mentor-guided practice shaped by real corporate conversations—not grammar drills alone.</p></div></div></div>
        <div className="absolute -bottom-1 -left-4 z-20 max-w-[270px] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"><p className="text-xs font-extrabold uppercase tracking-wider text-[#00A866]">The Unmute Pro difference</p><p className="mt-2 font-bold leading-6 text-[#062B5C]">Practise the exact conversations that shape campus and career opportunities.</p></div>
      </div>
    </div>
  </section>;
}

