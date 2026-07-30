const courses = [
  {
    title: "Spoken English Foundations",
    level: "Beginner",
    icon: "🗣️",
    description:
      "Build a strong foundation in spoken English through practical conversations and daily speaking practice.",
    features: [
      "Basic sentence formation",
      "Daily conversation practice",
      "Vocabulary improvement",
      "Pronunciation guidance",
    ],
    featured: false,
  },
  {
    title: "Confidence English Program",
    level: "Most Popular",
    icon: "⭐",
    description:
      "Designed to help you overcome fear, hesitation and communicate confidently in every situation.",
    features: [
      "Confidence building",
      "Fluency improvement",
      "Group discussions",
      "Real-life speaking activities",
    ],
    featured: true,
  },
  {
    title: "Corporate Communication",
    level: "Professionals",
    icon: "💼",
    description:
      "Improve workplace communication for meetings, presentations, emails and professional conversations.",
    features: [
      "Meeting communication",
      "Presentation skills",
      "Business English",
      "Professional confidence",
    ],
    featured: false,
  },
  {
    title: "Interview Mastery",
    level: "Job Seekers",
    icon: "🎯",
    description:
      "Prepare confidently for HR and technical interviews through mock interviews and personal feedback.",
    features: [
      "Tell me about yourself",
      "Interview questions",
      "Body language",
      "Confidence coaching",
    ],
    featured: false,
  },
  {
    title: "Public Speaking",
    level: "All Levels",
    icon: "🎤",
    description:
      "Develop stage confidence and learn how to speak clearly before an audience.",
    features: [
      "Speech preparation",
      "Voice modulation",
      "Audience engagement",
      "Stage confidence",
    ],
    featured: false,
  },
  {
    title: "Personal Mentoring",
    level: "One-to-One",
    icon: "🤝",
    description:
      "Personalized mentoring sessions based on your communication goals and current English level.",
    features: [
      "Individual guidance",
      "Flexible learning",
      "Custom speaking plan",
      "Personal feedback",
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
            Our Courses
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            Learn English with
            <span className="mt-2 block text-[#00A866]">
              Confidence.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Every course at Unmute Pro is designed to improve your confidence,
            communication skills and practical English through interactive
            speaking activities.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course) => (

            <article
              key={course.title}
              className={`relative overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                course.featured
                  ? "border-[#00D97E] bg-[#062B5C] text-white shadow-xl"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >

              {course.featured && (

                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#00D97E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#062B5C]">
                  Most Popular
                </div>

              )}

              <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-3xl">
                  {course.icon}
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    course.featured
                      ? "bg-white/10 text-[#00D97E]"
                      : "bg-[#ECFDF5] text-[#007F4D]"
                  }`}
                >
                  {course.level}
                </span>

              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  course.featured
                    ? "text-white"
                    : "text-[#062B5C]"
                }`}
              >
                {course.title}
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  course.featured
                    ? "text-blue-100"
                    : "text-slate-600"
                }`}
              >
                {course.description}
              </p>

              <div
                className={`my-6 h-px ${
                  course.featured
                    ? "bg-white/15"
                    : "bg-slate-200"
                }`}
              />

              <ul className="space-y-3">

                {course.features.map((feature) => (

                  <li
                    key={feature}
                    className={`flex items-start gap-3 ${
                      course.featured
                        ? "text-blue-100"
                        : "text-slate-700"
                    }`}
                  >

                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00D97E] text-xs font-bold text-[#062B5C]">
                      ✓
                    </span>

                    {feature}

                  </li>

                ))}

              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 font-bold transition duration-300 hover:-translate-y-1 ${
                  course.featured
                    ? "bg-[#00D97E] text-[#062B5C] hover:bg-[#00C970]"
                    : "bg-[#062B5C] text-white hover:bg-[#0A4B8C]"
                }`}
              >
                Get Course Details
                <span className="ml-2">→</span>
              </a>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-14 rounded-3xl bg-[#F8FBFF] px-8 py-10 text-center">

          <h3 className="text-3xl font-bold text-[#062B5C]">
            Not sure which course is right for you?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            Talk directly with our mentor to understand which course best suits
            your current English level, career goals and communication needs.
            We will guide you personally before you enroll.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-8 py-4 font-bold text-[#062B5C] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#00C970]"
          >
            Talk to Our Mentor
            <span className="ml-2">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}