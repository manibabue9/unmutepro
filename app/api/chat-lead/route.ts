import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendWhatsAppAlert } from "@/lib/twilio";

type Body = { name?: string; mobile?: string; email?: string; goal?: string; preferredTime?: string; website?: string };
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] ?? char);

export async function POST(request: Request) {
  try {
    const body = await request.json() as Body;
    if (body.website) return NextResponse.json({ ok: true });
    const name = body.name?.trim() ?? "";
    const mobile = body.mobile?.replace(/\D/g, "") ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const goal = body.goal?.trim() ?? "";
    const preferredTime = body.preferredTime?.trim() ?? "";
    if (name.length < 2 || mobile.length < 10 || !goal || !preferredTime || (email && !/^\S+@\S+\.\S+$/.test(email))) return NextResponse.json({ error: "Please check the details and try again." }, { status: 400 });

    const supabase = await createClient();
    const { error } = await supabase.from("demo_leads").insert({ name, mobile, email: email || null, goal, preferred_contact_time: preferredTime, program_interest: goal, source: "website_chatbot" });
    if (error) return NextResponse.json({ error: "We could not save your request. Please try again." }, { status: 500 });

    const alert = `New Unmute Pro chatbot lead\nName: ${name}\nMobile: +${mobile}\nEmail: ${email || "Not provided"}\nGoal: ${goal}\nPreferred time: ${preferredTime}\nFollow up: https://wa.me/${mobile}`;
    await Promise.allSettled([sendWhatsAppAlert(alert), sendEmail({ name, mobile, email, goal, preferredTime })]);
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Unable to submit your request." }, { status: 500 }); }
}

async function sendEmail(data: { name: string; mobile: string; email: string; goal: string; preferredTime: string }) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  if (!key || !from) return;
  await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: ["unmuteproofficial@gmail.com"], reply_to: data.email || undefined, subject: `New website enquiry: ${data.name}`, html: `<h2>New Unmute Assistant enquiry</h2><p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Mobile:</strong> +${escapeHtml(data.mobile)}</p><p><strong>Email:</strong> ${escapeHtml(data.email || "Not provided")}</p><p><strong>Goal:</strong> ${escapeHtml(data.goal)}</p><p><strong>Preferred time:</strong> ${escapeHtml(data.preferredTime)}</p>` }) });
}

