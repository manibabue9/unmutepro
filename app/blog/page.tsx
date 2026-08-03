import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, MessageCircleMore, Mic2, Presentation, Sparkles, Target, UsersRound } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Communication Skills, Spoken English & Placement Blog",
  description: "Practical communication, placement, group discussion, presentation and spoken-English guidance for students, job seekers and colleges.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Unmute Pro Communication Skills Blog",
    description: "Practical communication and placement guidance for students and colleges.",
    url: "https://www.unmutepro.com/blog",
    type: "website",
  },
};

const posts = [
  {
    title: "How to Speak in a Group Discussion: A Student Guide",
    description: "Learn how to enter a discussion, structure your point, disagree respectfully and make a strong final contribution.",
    href: "/blog/group-discussion-tips-college-students",
    category: "Campus Placements",
    readingTime: "9 min read",
    published: "August 4, 2026",
    Icon: UsersRound,
    featured: true,
  },
  {
    title: "Presentation Skills for College Students: From Nervous to Clear",
    description: "Use a simple story structure, confident delivery and practical rehearsal plan for seminars, projects and placement presentations.",
    href: "/blog/presentation-skills-for-college-students",
    category: "Student Communication",
    readingTime: "8 min read",
    published: "August 4, 2026",
    Icon: Presentation,
    featured: true,
  },
  {
    title: "How Colleges Can Build Placement-Ready Communication Skills",
    description: "A practical framework for placement teams to diagnose gaps, create real speaking practice and show measurable progress.",
    href: "/blog/communication-skills-training-colleges",
    category: "For Colleges",
    readingTime: "10 min read",
    published: "August 4, 2026",
    Icon: BriefcaseBusiness,
    featured: true,
  },
  {
    title: "How to Introduce Yourself Confidently in an Interview",
    description: "Use a simple professional structure to create a clear, relevant and confident interview introduction.",
    href: "/blog/self-introduction-interview-guide",
    category: "Interview Preparation",
    readingTime: "8 min read",
    published: "August 1, 2026",
    Icon: Target,
  },
  {
    title: "Top 25 HR Interview Questions with Simple Answers",
    description: "Prepare practical answer frameworks for the HR questions most commonly asked during interviews.",
    href: "/blog/top-25-hr-interview-questions",
    category: "Interview Preparation",
    readingTime: "10 min read",
    published: "August 1, 2026",
    Icon: BriefcaseBusiness,
  },
  {
    title: "7 Daily Habits That Improve Your English Communication",
    description: "Build fluency, clarity and confidence through a simple daily practice routine you can maintain.",
    href: "/blog/7-daily-habits-improve-english",
    category: "Spoken English",
    readingTime: "7 min read",
    published: "August 1, 2026",
    Icon: Sparkles,
  },
  {
    title: "How to Speak English Confidently Even If You Are a Beginner",
    description: "Overcome hesitation and start speaking with useful sentences, daily practice and realistic goals.",
    href: "/blog/speak-english-confidently-beginner",
    category: "Spoken English",
    readingTime: "7 min read",
    published: "August 1, 2026",
    Icon: Mic2,
  },
  {
    title: "Why Confidence Matters More Than Grammar in Spoken English",
    description: "Learn why confidence is the foundation of fluent communication and discover simple habits to start speaking without fear.",
    href: "/blog/why-confidence-matters-more-than-grammar",
    category: "Confidence",
    readingTime: "6 min read",
    published: "August 1, 2026",
    Icon: MessageCircleMore,
  },
];

export default function BlogPage() {
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
          <p className="font-bold uppercase tracking-[0.2em] text-[#00D97E]">Unmute Pro Learning Blog</p>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">Communication confidence for campus and career</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">Practical guidance for students, job seekers, professionals and placement teams who want stronger real-world communication.</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.href} className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${post.featured ? "border-emerald-200" : "border-slate-200"}`}>
              <div className="flex min-h-44 items-center justify-center bg-gradient-to-br from-[#062B5C] to-[#0A4B8C] p-8 text-center text-white">
                <div>
                  <post.Icon className="mx-auto text-[#00D97E]" size={48} strokeWidth={1.8} aria-hidden="true" />
                  <p className="mt-4 text-sm font-bold uppercase tracking-wider text-[#00D97E]">{post.category}</p>
                  {post.featured && <p className="mx-auto mt-3 w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold">New guide</p>}
                </div>
              </div>
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500"><span>{post.published}</span><span aria-hidden="true">|</span><span>{post.readingTime}</span></div>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#062B5C]">{post.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{post.description}</p>
                <Link href={post.href} className="mt-7 inline-flex items-center gap-2 font-bold text-[#00A866] hover:text-[#007F4D]">Read article <ArrowRight size={18} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

