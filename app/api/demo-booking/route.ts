import { NextResponse } from "next/server";

type BookingRequest = {
  name?: string;
  mobile?: string;
  email?: string;
  course?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest;
    const name = body.name?.trim() ?? "";
    const mobile = body.mobile?.replace(/\D/g, "") ?? "";
    const email = body.email?.trim() ?? "";
    const course = body.course?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || !/^[6-9]\d{9}$/.test(mobile) || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Invalid booking details" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.BOOKING_FROM_EMAIL;

    if (!resendKey || !fromEmail) {
      return NextResponse.json({ ok: true, emailConfigured: false });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email, "unmuteproofficial@gmail.com"],
        subject: "Unmute Pro ₹99 Demo Booking Request",
        html: `
          <h2>Thank you, ${name}</h2>
          <p>We received your request for an Unmute Pro ₹99 demo session.</p>
          <p><strong>Mobile:</strong> +91 ${mobile}</p>
          <p><strong>Program:</strong> ${course}</p>
          <p><strong>Goal:</strong> ${message || "Guidance requested"}</p>
          <p>Our mentor will contact you to confirm the available time and payment instructions.</p>
          <p>Unmute Pro — Your Silence Ends Here</p>
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: true, emailConfigured: true, emailSent: false });
    }

    return NextResponse.json({ ok: true, emailConfigured: true, emailSent: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to process booking" }, { status: 500 });
  }
}
