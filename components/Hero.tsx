import Image from "next/image";

const trustPoints = [
  "Practical speaking sessions",
  "Personal guidance",
  "Confidence-focused training",
];

const highlights = [
  {
    value: "15+",
    label: "Years of Corporate Experience",
  },
  {
    value: "4",
    label: "Career-Focused Programs",
  },
  {
    value: "100%",
    label: "Practical Learning Approach",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#ECFDF5]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00D97E]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#062B5C]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#00D97E]" />
            Spoken English and Career Communication
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#062B5C] sm:text-5xl lg:text-6xl">
            Stop Overthinking.
            <span className="mt-2 block text-[#00A866]">
              Start Speaking English.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Build the confidence to speak English clearly in conversations,
            interviews, meetings, presentations, and everyday professional
            situations.
          </p>

          <p className="mt-5 max-w-xl leading-7 text-slate-600">
            Unmute Pro combines practical speaking activities, personal
            mentorship, and real-world corporate communication experience to
            help you express yourself without fear.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-7 py-4 text-base font-bold text-[#062B5C] shadow-lg shadow-[#00D97E]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#00C970] hover:shadow-xl"
            >
              Book a Free Demo
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#062B5C] bg-white px-7 py-4 text-base font-bold text-[#062B5C] transition duration-300 hover:-translate-y-1 hover:bg-[#062B5C] hover:text-white"
            >
              Explore Courses
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D97E] text-xs font-bold text-[#062B5C]">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-5 top-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <p className="text-sm font-bold text-[#062B5C]">
              Confidence First
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Speak without fear
            </p>
          </div>

          <div className="absolute -right-4 bottom-24 z-20 hidden rounded-2xl border border-[#00D97E]/30 bg-[#ECFDF5] p-4 shadow-xl sm:block">
            <p className="text-sm font-bold text-[#007F4D]">
              Practical Learning
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Real conversations
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-300/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#062B5C] to-[#0A4B8C]">
              <Image
                src="/images/mentor.jpg"
                alt="Manibabu, mentor at Unmute Pro"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#062B5C] via-[#062B5C]/80 to-transparent px-6 pb-7 pt-24 text-white">
                <p className="text-2xl font-bold">Manibabu</p>
                <p className="mt-1 font-semibold text-[#00D97E]">
                  Mentor and Communication Guide
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  15 years of corporate experience helping learners communicate
                  with clarity and confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid grid-cols-3 divide-x divide-slate-200">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="px-2 text-center">
                  <p className="text-xl font-extrabold text-[#062B5C] sm:text-2xl">
                    {highlight.value}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold leading-4 text-slate-500 sm:text-xs">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brand strip */}
      <div className="relative mt-10 border-y border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:flex-row sm:px-8 lg:px-12">
          <p className="font-bold text-[#062B5C]">
            Your Silence Ends Here
          </p>

          <p className="text-sm text-slate-600">
            For students, job seekers, and working professionals
          </p>
        </div>
      </div>
    </section>
  );
}