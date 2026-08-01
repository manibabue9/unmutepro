"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

type Mode = "signin" | "signup";

export default function AuthForm() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [magicBusy, setMagicBusy] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const supabase = createClient();
      const result = mode === "signup"
        ? await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: name.trim() } },
          })
        : await supabase.auth.signInWithPassword({ email, password });

      if (result.error) {
        setMessage(result.error.message);
        return;
      }
      if (mode === "signup" && !result.data.session) {
        setMessage("Account created. Check your email once to confirm your account.");
        return;
      }
      router.push("/app");
      router.refresh();
    } catch {
      setMessage("Authentication is not configured yet. Please try the local demo.");
    } finally {
      setBusy(false);
    }
  };

  const sendMagicLink = async () => {
    if (!email) {
      setMessage("Enter your email address first.");
      return;
    }
    setMagicBusy(true);
    setMessage("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=/app`, shouldCreateUser: false },
    });
    setMessage(error ? error.message : "Check your email for your secure sign-in link.");
    setMagicBusy(false);
  };

  const switchMode = (nextMode: Mode) => {
    setMode(nextMode);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F4F8FC] px-5 py-8 text-[#062B5C] sm:py-12">
      <div className="mx-auto max-w-md rounded-[2rem] bg-white p-7 shadow-xl sm:p-10">
        <Link href="/app" className="text-sm font-bold text-slate-500">← Back to app</Link>
        <span className="mt-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#E7FFF5] text-[#00A866]"><ShieldCheck /></span>
        <h1 className="mt-5 text-3xl font-extrabold">{mode === "signup" ? "Create your learner account" : "Welcome back"}</h1>
        <p className="mt-3 leading-7 text-slate-600">{mode === "signup" ? "Save your progress and continue learning on any device." : "Sign in to continue your confidence journey."}</p>

        <div className="mt-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1" aria-label="Authentication mode">
          <button type="button" onClick={() => switchMode("signin")} className={`rounded-lg px-3 py-2.5 text-sm font-bold ${mode === "signin" ? "bg-white shadow-sm" : "text-slate-500"}`}>Sign in</button>
          <button type="button" onClick={() => switchMode("signup")} className={`rounded-lg px-3 py-2.5 text-sm font-bold ${mode === "signup" ? "bg-white shadow-sm" : "text-slate-500"}`}>Create account</button>
        </div>

        {!isSupabaseConfigured && <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Online accounts are temporarily unavailable. The local demo remains available.</div>}
        <form onSubmit={submit} className="mt-6 space-y-4">
          {mode === "signup" && <Field label="Full name" icon={<UserRound size={18} />}><input id="name" type="text" required minLength={2} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="min-w-0 flex-1 px-3 py-4 outline-none" /></Field>}
          <Field label="Email address" icon={<Mail size={18} />}><input id="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="min-w-0 flex-1 px-3 py-4 outline-none" /></Field>
          <Field label="Password" icon={<LockKeyhole size={18} />}>
            <input id="password" type={showPassword ? "text" : "password"} required minLength={8} autoComplete={mode === "signup" ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" className="min-w-0 flex-1 px-3 py-4 outline-none" />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="p-2 text-slate-400" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </Field>
          <button disabled={busy || !isSupabaseConfigured} className="w-full rounded-xl bg-[#00D97E] px-5 py-4 font-extrabold disabled:cursor-not-allowed disabled:opacity-50">{busy ? "Please wait…" : mode === "signup" ? "Create my account" : "Sign in"}</button>
        </form>

        {message && <p role="status" className="mt-5 rounded-xl bg-slate-100 p-4 text-sm leading-6">{message}</p>}
        {mode === "signin" && <div className="mt-6 border-t border-slate-100 pt-5 text-center"><p className="text-xs text-slate-400">Administrator without a password?</p><button type="button" disabled={magicBusy || !isSupabaseConfigured} onClick={sendMagicLink} className="mt-2 text-sm font-bold text-[#00A866] disabled:opacity-50">{magicBusy ? "Sending…" : "Send a one-time sign-in link"}</button></div>}
        <p className="mt-5 text-center text-sm text-slate-500">Want to look around first? <Link href="/app" className="font-bold text-[#00A866]">Use the local demo</Link>.</p>
      </div>
    </div>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  const id = label === "Full name" ? "name" : label === "Password" ? "password" : "email";
  return <label className="block text-sm font-bold" htmlFor={id}>{label}<span className="mt-2 flex items-center rounded-xl border border-slate-300 px-4 text-slate-400 focus-within:border-[#00D97E] focus-within:ring-4 focus-within:ring-[#00D97E]/15">{icon}{children}</span></label>;
}

