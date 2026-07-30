const courses = [
  {
    icon: "🗣️",
    title: "Spoken English",
    description:
      "Build fluency and confidence through practical conversations, vocabulary development, pronunciation, and everyday speaking activities.",
    duration: "8–12 Weeks",
    mode: "Online & Offline",
    level: "Beginner to Advanced",
    highlights: [
      "Daily conversation practice",
      "Grammar for speaking",
      "Vocabulary development",
      "Pronunciation improvement",
    ],
    featured: true,
  },
  {
    icon: "🎤",
    title: "Interview Preparation",
    description:
      "Prepare for job interviews with structured answers, mock interviews, professional introductions, and confidence-building guidance.",
    duration: "4–6 Weeks",
    mode: "Online & Offline",
    level: "Students & Professionals",
    highlights: [
      "Tell me about yourself",
      "Mock interview sessions",
      "HR and behavioural questions",
      "Body language and confidence",
    ],
    featured: false,
  },
  {
    icon: "💼",
    title: "Corporate Communication",
    description:
      "Improve workplace English, professional email writing, meeting communication, presentations, and communication with global teams.",
    duration: "6–8 Weeks",
    mode: "Online",
    level: "Working Professionals",
    highlights: [
      "Business communication",
      "Professional email writing",
      "Meetings and presentations",
      "Workplace vocabulary",
    ],
    featured: false,
  },
  {
    icon: "⭐",
    title: "Personality Development",
    description:
      "Strengthen confidence, presentation skills, positive attitude, body language, leadership communication, and personal effectiveness.",
    duration: "6–8 Weeks",
    mode: "Online & Offline",
    level: "All Levels",
    highlights: [
      "Confidence building",
      "Public speaking",
      "Body language",
      "Leadership communication",
    ],
    featured: false,
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-gradient-to-b from-white to-[#EFF6FF] px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">
            Our Programs
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Courses Designed for Real Confidence
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical training programs created for students, job seekers, and
            professionals who want to communicate clearly and confidently.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        {/* Course cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className={`relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8 ${
                course.featured
                  ? "border-[#00D97E] ring-2 ring-[#00D97E]/20"
                  : "border-slate-200"
              }`}
            >
              {course.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#00D97E] px-4 py-2 text-sm font-bold text-[#062B5C]">
                  Most Popular
                </div>
              )}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ECFDF5] text-3xl shadow-sm">
                {course.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#062B5C]">
                {course.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {course.description}
              </p>

              {/* Course information */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Duration
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#062B5C]">
                    {course.duration}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Mode
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#062B5C]">
                    {course.mode}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Level
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#062B5C]">
                    {course.level}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-7">
                <h4 className="font-bold text-[#062B5C]">
                  What You Will Learn
                </h4>

                <ul className="mt-4 space-y-3">
                  {course.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00D97E] text-xs font-bold text-[#062B5C]">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 font-bold transition duration-300 ${
                  course.featured
                    ? "bg-[#00D97E] text-[#062B5C] hover:bg-[#00C970]"
                    : "bg-[#062B5C] text-white hover:bg-[#0A3B78]"
                }`}
              >
                Book Free Demo
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-[#062B5C] px-7 py-10 text-center text-white shadow-2xl sm:px-12">
          <p className="font-bold uppercase tracking-wider text-[#00D97E]">
            Need Guidance?
          </p>

          <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
            Not Sure Which Course Is Right for You?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Speak with us and receive personalized guidance based on your
            current English level, goals, and professional needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] transition hover:bg-[#00C970]"
            >
              Book Free Demo
            </a>

            <a
              href="tel:+919392209162"
              className="rounded-xl border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#062B5C]"
            >
              Call +91 93922 09162
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}