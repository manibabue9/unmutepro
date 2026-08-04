import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendWhatsAppAlert } from "@/lib/twilio";

type Body = { institutionName?: string; contactName?: string; designation?: string; email?: string; mobile?: string; city?: string; participantCount?: string; preferredDate?: string; topic?: string; format?: string; message?: string; website?: string };
const clean = (value?: string) => value?.trim() ?? "";
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] ?? char);

export async function POST(request: Request) {
  try {
    const body = await request.json() as Body;
    if (body.website) return NextResponse.json({ ok: true });

    const data = {
      institution_name: clean(body.institutionName),
      contact_name: clean(body.contactName),
      designation: clean(body.designation),
      email: clean(body.email).toLowerCase(),
      mobile: clean(body.mobile).replace(/\D/g, ""),
      city: clean(body.city),
      participant_count: Number(body.participantCount),
      preferred_date: clean(body.preferredDate) || null,
      topic: clean(body.topic) || "15-Day Campus Communication Bootcamp",
      format: clean(body.format) || "Open to discussion",
      message: clean(body.message),
    };

    const invalidEmail = Boolean(data.email) && !/^\S+@\S+\.\S+$/.test(data.email);
    if (data.institution_name.length < 2 || data.contact_name.length < 2 || data.designation.length < 2 || invalidEmail || data.mobile.length < 10 || !Number.isFinite(data.participant_count) || data.participant_count < 1) {
      return NextResponse.json({ error: "Please check the required institutional details." }, { status: 400 });
    }

    const supabase = await createClient();
    const { error } = await supabase.from("institution_enquiries").insert(data);
    if (error) return NextResponse.json({ error: "We could not save the enquiry. Please try again." }, { status: 500 });

    const alert = `New Unmute Pro institution enquiry\nInstitution: ${data.institution_name}\nContact: ${data.contact_name}, ${data.designation}\nMobile: +${data.mobile}\nEmail: ${data.email || "Not provided"}\nParticipants: ${data.participant_count}\nTopic: ${data.topic}\nFollow up: https://wa.me/${data.mobile}`;
    const notifications: Promise<unknown>[] = [sendWhatsAppAlert(alert)];
    const key = process.env.RESEND_API_KEY;
    const from = process.env.BOOKING_FROM_EMAIL;

    if (key && from) notifications.push(fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: ["unmuteproofficial@gmail.com"], reply_to: data.email || undefined, subject: `Institution enquiry: ${data.institution_name}`, html: `<h2>Institutional programme enquiry</h2><p><strong>Institution:</strong> ${escapeHtml(data.institution_name)}</p><p><strong>Contact:</strong> ${escapeHtml(data.contact_name)} (${escapeHtml(data.designation)})</p><p><strong>Mobile:</strong> +${escapeHtml(data.mobile)}</p><p><strong>Email:</strong> ${escapeHtml(data.email || "Not provided")}</p><p><strong>Participants:</strong> ${data.participant_count}</p><p><strong>Topic:</strong> ${escapeHtml(data.topic)}</p>` }),
    }));

    await Promise.allSettled(notifications);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process the institutional enquiry." }, { status: 500 });
  }
}
