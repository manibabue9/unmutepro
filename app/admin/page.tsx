import Link from "next/link";
import { BookOpen, GraduationCap, MessageSquareText, Users } from "lucide-react";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Admin console", robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!isSupabaseConfigured) return <AdminSetup />;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <Access title="Sign in required" body="Use your authorised Unmute Pro email to access the admin console." href="/login" label="Sign in" />;
  const { data: profile } = await supabase.from("profiles").select("full_name, role").eq("id", user.id).single();
  if (!profile || !["admin", "mentor"].includes(profile.role)) return <Access title="Staff access only" body="Your account does not have mentor or administrator access." href="/app" label="Return to learner app" />;
  const [{ count: learners }, { count: enrollments }, { count: leads }, { count: lessonCount }] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "learner"),
    supabase.from("enrollments").select("id", { count: "exact", head: true }).eq("status", "active"),
    supabase.from("demo_leads").select("id", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("lessons").select("id", { count: "exact", head: true }).eq("status", "published"),
  ]);
  const stats = [{ label: "Learners", value: learners ?? 0, Icon: Users }, { label: "Active enrolments", value: enrollments ?? 0, Icon: GraduationCap }, { label: "New demo leads", value: leads ?? 0, Icon: MessageSquareText }, { label: "Published lessons", value: lessonCount ?? 0, Icon: BookOpen }];
  return <main className="min-h-screen bg-[#F4F8FC] px-5 py-8 text-[#062B5C]"><div className="mx-auto max-w-6xl"><header className="flex items-center justify-between"><div><p className="text-sm font-bold text-[#00A866]">UNMUTE PRO OPERATIONS</p><h1 className="mt-1 text-3xl font-extrabold">Admin console</h1></div><Link href="/app" className="rounded-xl bg-white px-4 py-3 text-sm font-bold shadow-sm">Learner app</Link></header><p className="mt-6 text-slate-600">Welcome, {profile.full_name || "team member"}. This role-gated foundation reads live operational counts from Supabase.</p><section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(({ label, value, Icon }) => <article key={label} className="rounded-3xl bg-white p-6 shadow-sm"><Icon className="text-[#00A866]"/><p className="mt-5 text-4xl font-extrabold">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></article>)}</section><section className="mt-8 rounded-3xl bg-[#062B5C] p-7 text-white"><h2 className="text-2xl font-extrabold">Admin-ready content model</h2><p className="mt-3 max-w-3xl leading-7 text-blue-100">Programs, lessons, resources, enrolments, learner progress and demo leads now have secured database tables. Editorial forms and bulk operations are the next admin increment.</p></section></div></main>;
}

function AdminSetup() { return <Access title="Connect the admin console" body="The Phase 2 schema and role-gated console are ready. Create a Supabase project, apply the migration, then add the values from .env.example." href="/app" label="Open local learner demo" />; }
function Access({ title, body, href, label }: { title: string; body: string; href: string; label: string }) { return <main className="grid min-h-screen place-items-center bg-[#F4F8FC] p-5 text-[#062B5C]"><div className="max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl"><h1 className="text-3xl font-extrabold">{title}</h1><p className="mt-4 leading-7 text-slate-600">{body}</p><Link href={href} className="mt-7 inline-flex rounded-xl bg-[#00D97E] px-5 py-3 font-extrabold">{label}</Link></div></main>; }
