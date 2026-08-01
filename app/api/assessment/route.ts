import { NextResponse } from "next/server";
import { assessmentQuestions, getAssessmentResult } from "@/lib/assessment-data";
import { createClient } from "@/lib/supabase/server";
import { sendWhatsAppAlert } from "@/lib/twilio";

type Body = { name?: string; email?: string; mobile?: string; goal?: string; website?: string; answers?: Record<string, number> };
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] ?? char);

export async function POST(request: Request) {
  try {
    const body = await request.json() as Body;
    if (body.website) return NextResponse.json({ ok: true });
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const mobile = body.mobile?.replace(/\D/g, "") ?? "";
    const goal = body.goal?.trim() ?? "";
    const answers = body.answers ?? {};
    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || mobile.length < 10 || !goal || Object.keys(answers).length !== assessmentQuestions.length) return NextResponse.json({ error: "Please complete every question and check your contact details." }, { status: 400 });
    const score = assessmentQuestions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0);
    const result = getAssessmentResult(score);
    const supabase = await createClient();
    const { error } = await supabase.from("assessment_attempts").insert({ name, email, mobile, goal, answers, score, total: assessmentQuestions.length, estimated_level: result.level, recommended_program: result.program });
    if (error) return NextResponse.json({ error: "We could not save your result. Please try again." }, { status: 500 });

    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.BOOKING_FROM_EMAIL;
    const whatsappAlert = `New Unmute Pro level check\nName: ${name}\nMobile: +${mobile}\nEmail: ${email}\nGoal: ${goal}\nScore: ${score}/${assessmentQuestions.length}\nEstimated level: ${result.level}\nRecommended: ${result.program}\nFollow up: https://wa.me/${mobile}`;
    const notifications: Promise<unknown>[] = [sendWhatsAppAlert(whatsappAlert)];
    if (resendKey && fromEmail) notifications.push(fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: fromEmail, to: ["unmuteproofficial@gmail.com"], reply_to: email, subject: `New English Level Check: ${name} — ${result.level}`, html: `<h2>New English Level Check result</h2><p><strong>Learner:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p><p><strong>Goal:</strong> ${escapeHtml(goal)}</p><p><strong>Score:</strong> ${score}/${assessmentQuestions.length}</p><p><strong>Estimated level:</strong> ${result.level}</p><p><strong>Recommended programme:</strong> ${result.program}</p>` }) }));
    await Promise.allSettled(notifications);
    return NextResponse.json({ ok: true, result: { ...result, score, total: assessmentQuestions.length } });
  } catch { return NextResponse.json({ error: "Unable to process your assessment." }, { status: 500 }); }
}

