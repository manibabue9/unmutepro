"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=/app` },
      });
      setMessage(error ? error.message : "Check your email for your secure sign-in link.");
    } catch { setMessage("Authentication is not configured yet. Add the Supabase environment variables first."); }
    finally { setBusy(false); }
  };

  return <div className="min-h-screen bg-[#F4F8FC] px-5 py-12 text-[#062B5C]"><div className="mx-auto max-w-md rounded-[2rem] bg-white p-7 shadow-xl sm:p-10"><Link href="/app" className="text-sm font-bold text-slate-500">← Back to app</Link><span className="mt-8 grid h-14 w-14 place-items-center rounded-2xl bg-[#E7FFF5] text-[#00A866]"><ShieldCheck/></span><h1 className="mt-6 text-3xl font-extrabold">Secure learner sign-in</h1><p className="mt-3 leading-7 text-slate-600">Receive a one-time magic link. No password to remember.</p>{!isSupabaseConfigured && <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Production authentication is ready but not connected. Configure Supabase using <code>.env.example</code>; the local demo remains available.</div>}<form onSubmit={submit} className="mt-7"><label className="text-sm font-bold" htmlFor="email">Email address</label><div className="mt-2 flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-[#00D97E] focus-within:ring-4 focus-within:ring-[#00D97E]/15"><Mail size={18} className="text-slate-400"/><input id="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="min-w-0 flex-1 px-3 py-4 outline-none"/></div><button disabled={busy || !isSupabaseConfigured} className="mt-5 w-full rounded-xl bg-[#00D97E] px-5 py-4 font-extrabold disabled:cursor-not-allowed disabled:opacity-50">{busy ? "Sending…" : "Email my sign-in link"}</button></form>{message && <p role="status" className="mt-5 rounded-xl bg-slate-100 p-4 text-sm">{message}</p>}<p className="mt-6 text-center text-sm text-slate-500">For previews, <Link href="/app" className="font-bold text-[#00A866]">continue with the local demo</Link>.</p></div></div>;
}
