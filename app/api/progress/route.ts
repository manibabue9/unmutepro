import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

async function authenticatedClient() {
  if (!isSupabaseConfigured) return null;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user ? { supabase, user } : null;
}

export async function GET() {
  const auth = await authenticatedClient();
  if (!auth) return NextResponse.json({ completed: [], mode: "local" }, { status: 401 });
  const { data, error } = await auth.supabase.from("lesson_progress").select("lesson_id").eq("user_id", auth.user.id).not("completed_at", "is", null);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ completed: data.map((item) => item.lesson_id), mode: "cloud" });
}

export async function POST(request: Request) {
  const auth = await authenticatedClient();
  if (!auth) return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  const body = await request.json() as { lessonId?: string; completed?: boolean };
  if (!body.lessonId || typeof body.completed !== "boolean") return NextResponse.json({ error: "Invalid progress update" }, { status: 400 });
  const { error } = await auth.supabase.from("lesson_progress").upsert({ user_id: auth.user.id, lesson_id: body.lessonId, completed_at: body.completed ? new Date().toISOString() : null }, { onConflict: "user_id,lesson_id" });
  return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ ok: true });
}
