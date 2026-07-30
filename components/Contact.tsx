"use client";

import { FormEvent, useState } from "react";

const phoneNumber = "919392209162";

export default function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("Spoken English");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Unmute Pro,

I would like to book a free demo session.

Name: ${name}
Mobile Number: ${mobile}
Interested Course: ${course}
Message: ${message || "No additional message"}

Please contact me with the available demo timings.
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#EFF6FF] to-white px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Book Your Free Demo Session
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Take your first step toward confident English communication.
            Submit your details and connect with Unmute Pro through WhatsApp.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact information */}
          <div className="rounded-3xl bg-[#062B5C] p-8 text-white shadow-2xl sm:p-10">
            <p className="font-bold uppercase tracking-wider text-[#00D97E]">
              Let&apos;s Connect
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Start Speaking with Confidence
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              Whether you are a student, job seeker, or working professional,
              Unmute Pro will help you choose the right program based on your
              communication goals.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="tel:+919392209162"
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D97E] text-xl text-[#062B5C]">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="mt-1 font-bold">+91 93922 09162</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:bg-white/15"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D97E] text-xl text-[#062B5C]">
                  💬
                </div>

                <div>
                  <p className="text-sm text-blue-200">WhatsApp</p>
                  <p className="mt-1 font-bold">Chat with Unmute Pro</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00D97E] text-xl text-[#062B5C]">
                  🎓
                </div>

                <div>
                  <p className="text-sm text-blue-200">Training Mode</p>
                  <p className="mt-1 font-bold">Online & Offline Sessions</p>
                </div>
              </div>
            </div>

            <div className="mt-9 rounded-2xl border border-[#00D97E]/30 bg-[#00D97E]/10 p-6">
              <p className="text-lg font-bold text-[#00D97E]">
                Your Silence Ends Here
              </p>

              <p className="mt-2 leading-7 text-blue-100">
                Begin your journey with practical guidance, regular speaking
                practice, and personal mentorship.
              </p>
            </div>
          </div>

          {/* Demo form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold text-[#062B5C]">
              Request a Free Demo
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Fill in the form below. After submitting, WhatsApp will open with
              your details ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-[#062B5C]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="mb-2 block font-semibold text-[#062B5C]"
                >
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  required
                  placeholder="Enter your mobile number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="mb-2 block font-semibold text-[#062B5C]"
                >
                  Select Course
                </label>

                <select
                  id="course"
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15"
                >
                  <option>Spoken English</option>
                  <option>Interview Preparation</option>
                  <option>Corporate Communication</option>
                  <option>Personality Development</option>
                  <option>Not Sure — Need Guidance</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-[#062B5C]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder="Tell us about your learning goal"
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-4 text-slate-800 outline-none transition focus:border-[#00D97E] focus:ring-4 focus:ring-[#00D97E]/15"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#00D97E] px-6 py-4 font-bold text-[#062B5C] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#00C970] hover:shadow-lg"
              >
                Continue on WhatsApp
              </button>

              <p className="text-center text-sm leading-6 text-slate-500">
                Submitting this form will open WhatsApp. Your message will only
                be sent after you press Send in WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}