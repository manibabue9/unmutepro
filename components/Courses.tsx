const courses = [
  {
    title: "Spoken English Foundations",
    level: "Beginner",
    duration: "8 Weeks",
    description:
      "Build a strong base in everyday English and start speaking without fear.",
    outcomes: [
      "Daily-use vocabulary",
      "Basic sentence formation",
      "Pronunciation practice",
      "Real-life conversations",
    ],
    featured: false,
  },
  {
    title: "Confident English Communication",
    level: "Intermediate",
    duration: "10 Weeks",
    description:
      "Improve fluency, clarity and confidence in social and professional conversations.",
    outcomes: [
      "Fluency-building activities",
      "Group discussions",
      "Storytelling practice",
      "Confidence exercises",
    ],
    featured: true,
  },
  {
    title: "Corporate Communication",
    level: "Working Professionals",
    duration: "8 Weeks",
    description:
      "Communicate professionally in meetings, emails, presentations and workplace situations.",
    outcomes: [
      "Meeting communication",
      "Professional vocabulary",
      "Presentation skills",
      "Workplace conversations",
    ],
    featured: false,
  },
  {
    title: "Interview Mastery",
    level: "Job Seekers",
    duration: "6 Weeks",
    description:
      "Prepare for interviews with confident answers, mock sessions and personal feedback.",
    outcomes: [
      "Tell me about yourself",
      "Common interview questions",
      "Mock interviews",
      "Body language guidance",
    ],
    featured: false,
  },
  {
    title: "Public Speaking Confidence",
    level: "All Levels",
    duration: "6 Weeks",
    description:
      "Learn to organise your thoughts and speak confidently before groups and audiences.",
    outcomes: [
      "Speech structure",
      "Stage-confidence practice",
      "Voice modulation",
      "Audience engagement",
    ],
    featured: false,
  },
  {
    title: "Personal Confidence Coaching",
    level: "One-to-One",
    duration: "Flexible",
    description:
      "A personalised program designed around your communication goals and challenges.",
    outcomes: [
      "Personal assessment",
      "Custom learning plan",
      "Individual feedback",
      "Flexible schedule",
    ],
    featured: false,
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="scroll-mt-32 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            Our Programs
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            Choose the right path for
            <span className="mt-2 block text-[#00A866]">
              your confidence journey.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Every program combines speaking practice, guided feedback and
            confidence-building activities for real-life communication.
          </p>
        </div>

        {/* Course cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7 ${
                course.featured
                  ? "border-[#00D97E] bg-[#062B5C] text-white shadow-xl"
                  : "border-slate-200 bg-white text-slate-900 shadow-sm"
              }`}
            >
              {course.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#00D97E] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#062B5C]">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                    course.featured
                      ? "bg-white/10 text-[#00D97E]"
                      : "bg-[#ECFDF5] text-[#007F4D]"
                  }`}
                >
                  {course.level}
                </span>

                <span
                  className={`text-sm font-semibold ${
                    course.featured ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {course.duration}
                </span>
              </div>

              <h3
                className={`mt-6 text-2xl font-extrabold leading-tight ${
                  course.featured ? "text-white" : "text-[#062B5C]"
                }`}
              >
                {course.title}
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  course.featured ? "text-blue-100" : "text-slate-600"
                }`}
              >
                {course.description}
              </p>

              <div
                className={`my-6 h-px ${
                  course.featured ? "bg-white/15" : "bg-slate-200"
                }`}
              />

              <p
                className={`text-sm font-bold uppercase tracking-wider ${
                  course.featured ? "text-[#00D97E]" : "text-[#007F4D]"
                }`}
              >
                What you will learn
              </p>

              <ul className="mt-4 space-y-3">
                {course.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className={`flex items-start gap-3 text-sm leading-6 ${
                      course.featured ? "text-blue-50" : "text-slate-700"
                    }`}
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00D97E] text-xs font-bold text-[#062B5C]">
                      ✓
                    </span>

                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 font-bold transition duration-300 hover:-translate-y-1 ${
                    course.featured
                      ? "bg-[#00D97E] text-[#062B5C] hover:bg-[#00C970]"
                      : "bg-[#062B5C] text-white hover:bg-[#0A4B8C]"
                  }`}
                >
                  Enquire Now
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 rounded-3xl border border-[#00D97E]/30 bg-[#ECFDF5] px-6 py-8 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-[#062B5C]">
            Not sure which course is right for you?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Book a free demo and communication assessment. We will help you
            choose the right learning path based on your current level and goal.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#00C970]"
          >
            Get Free Assessment
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}