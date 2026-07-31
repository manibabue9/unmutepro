import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  if (!isSupabaseConfigured) return NextResponse.json({ authenticated: false, mode: "local" });
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ authenticated: false, mode: "cloud" }, { status: 401 });
  const { data: profile } = await supabase.from("profiles").select("full_name, goal, role").eq("id", user.id).single();
  return NextResponse.json({ authenticated: true, mode: "cloud", user: { id: user.id, email: user.email, name: profile?.full_name || user.user_metadata.full_name || user.email?.split("@")[0] || "Learner", goal: profile?.goal || "Speak English with confidence", role: profile?.role || "learner" } });
}
