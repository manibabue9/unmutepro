"use client";

import { FormEvent, useState } from "react";

const phoneNumber = "919392209162";

export default function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("Confidence English Program");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleMobileChange = (value: string) => {
    setMobile(value.replace(/\D/g, "").slice(0, 10));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const cleanName = name.trim();
    const cleanMobile = mobile.replace(/\D/g, "");

    if (cleanName.length < 2) {
      setFormError("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setFormError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const whatsappMessage = `
Hello Unmute Pro 👋

I would like to book a demo session.

My details:
👤 Name: ${cleanName}
📱 Mobile: +91 ${cleanMobile}
📘 Program: ${course}
📝 Goal: ${message.trim() || "I would like guidance on choosing the right program."}

Please share the available demo timings and programme details.

Please share the available demo timings.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="scroll-mt-32 bg-gradient-to-b from-[#EFF6FF] to-white px-5 py-20 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">Contact Us</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">Book Your Demo Session</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Take the first step toward confident communication. Choose a convenient time to speak with an Unmute Pro mentor.</p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[#062B5C] p-8 text-white shadow-2xl sm:p-10">
            <p className="font-bold uppercase tracking-wider text-[#00D97E]">Let&apos;s Connect</p>
            <h3 className="mt-3 text-3xl font-bold">Start Speaking with Confidence</h3>
            <p className="mt-5 leading-8 text-blue-100">Tell us your goal and we will guide you toward the most suitable program and demo slot.</p>

            <div className="mt-9 space-y-5">
              <a href="tel:+919392209162" className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15" aria-label="Call Unmute Pro at +91 93922 09162">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D97E] text-xl text-[#062B5C]">☎</div>
                <div><p className="text-sm text-blue-200">Call Our Mentor</p><p className="mt-1 font-bold">+91 93922 09162</p></div>
              </a>

              <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello Unmute Pro 👋 I would like to book a demo and know the available timings.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15" aria-label="Chat with Unmute Pro on WhatsApp">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D97E] text-xl text-[#062B5C]">💬</div>
                <div><p className="text-sm text-blue-200">WhatsApp Support</p><p className="mt-1 font-bold">Chat with Unmute Pro</p></div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D97E] text-xl text-[#062B5C]">₹</div>
                <div><p className="text-sm text-blue-200">Demo Booking</p><p className="mt-1 font-bold">Choose a convenient time</p></div>
              </div>
            </div>

            <div className="mt-9 rounded-2xl border border-[#00D97E]/30 bg-[#00D97E]/10 p-6">
              <p className="text-lg font-bold text-[#00D97E]">Your Silence Ends Here</p>
              <p className="mt-2 leading-7 text-blue-100">Practical guidance, regular speaking practice and personal mentorship.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold text-[#062B5C]">Request a Demo Slot</h3>
            <p className="mt-3 leading-7 text-slate-600">Complete the form and WhatsApp will open with your details ready to send.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              {formError && <div role="alert" aria-live="polite" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{formError}</div>}

              <div>
                <label htmlFor="name" className="mb-2 block font-semibold text-[#062B5C]">Full Name</label>
                <input id="name" name="name" type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required minLength={2} placeholder="Enter your full name" className="w-full rounded-xl border border-slate-300 px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15" />
              </div>

              <div>
                <label htmlFor="mobile" className="mb-2 block font-semibold text-[#062B5C]">Mobile Number</label>
                <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white transition focus-within:border-[#00D97E] focus-within:ring-4 focus-within:ring-[#00D97E]/15">
                  <span className="flex items-center border-r border-slate-300 bg-slate-50 px-4 font-bold text-[#062B5C]">+91</span>
                  <input id="mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" value={mobile} onChange={(event) => handleMobileChange(event.target.value)} required maxLength={10} placeholder="10-digit mobile number" aria-describedby="mobile-help" className="min-w-0 flex-1 px-4 py-4 text-slate-800 outline-none" />
                </div>
                <p id="mobile-help" className="mt-2 text-sm text-slate-500">Enter only your 10-digit Indian mobile number.</p>
              </div>

              <div>
                <label htmlFor="course" className="mb-2 block font-semibold text-[#062B5C]">Select Program</label>
                <select id="course" name="course" value={course} onChange={(event) => setCourse(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15">
                  <option>Confidence English Program</option>
                  <option>Interview Mastery</option>
                  <option>Personal Mentoring</option>
                  <option>Not Sure — Need Guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-semibold text-[#062B5C]">Learning Goal</label>
                <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} rows={5} maxLength={500} placeholder="Tell us what you want to improve" className="w-full resize-none rounded-xl border border-slate-300 px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15" />
              </div>

              <button type="submit" className="w-full rounded-xl bg-[#00D97E] px-6 py-4 font-bold text-[#062B5C] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#00C970] hover:shadow-lg">💬 Book My Demo</button>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center text-sm font-medium text-slate-500">
                <span>✓ Adjusted on enrolment</span><span>✓ No spam</span><span>✓ You press Send</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

