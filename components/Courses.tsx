const courses = [
  {
    title: "Confidence English Program",
    level: "Most Popular",
    icon: "⭐",
    description: "Overcome hesitation and speak English confidently in everyday and professional situations.",
    features: ["Confidence building", "Fluency improvement", "Real-life speaking practice"],
    featured: true,
  },
  {
    title: "Interview Mastery",
    level: "Job Seekers",
    icon: "🎯",
    description: "Prepare for interviews through guided practice, mock sessions and personal feedback.",
    features: ["Self-introduction practice", "Common interview questions", "Body language and confidence"],
    featured: false,
  },
  {
    title: "Personal Mentoring",
    level: "One-to-One",
    icon: "🤝",
    description: "Get individual guidance based on your current level and communication goals.",
    features: ["Personal learning plan", "Flexible speaking practice", "Individual feedback"],
    featured: false,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-32 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">Our Programs</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            Choose the support you need to
            <span className="mt-2 block text-[#00A866]">speak with confidence.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">Simple, practical programs focused on confidence, interviews and personal guidance.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className={`relative overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${course.featured ? "border-[#00D97E] bg-[#062B5C] text-white shadow-xl" : "border-slate-200 bg-white shadow-sm"}`}>
              {course.featured && <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#00D97E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#062B5C]">Most Popular</div>}
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-3xl">{course.icon}</div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${course.featured ? "bg-white/10 text-[#00D97E]" : "bg-[#ECFDF5] text-[#007F4D]"}`}>{course.level}</span>
              </div>
              <h3 className={`mt-6 text-2xl font-bold ${course.featured ? "text-white" : "text-[#062B5C]"}`}>{course.title}</h3>
              <p className={`mt-4 leading-7 ${course.featured ? "text-blue-100" : "text-slate-600"}`}>{course.description}</p>
              <div className={`my-6 h-px ${course.featured ? "bg-white/15" : "bg-slate-200"}`} />
              <ul className="space-y-3">
                {course.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 ${course.featured ? "text-blue-100" : "text-slate-700"}`}>
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00D97E] text-xs font-bold text-[#062B5C]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 font-bold transition duration-300 hover:-translate-y-1 ${course.featured ? "bg-[#00D97E] text-[#062B5C] hover:bg-[#00C970]" : "bg-[#062B5C] text-white hover:bg-[#0A4B8C]"}`}>
                Book Demo <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-[#F8FBFF] px-7 py-8 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-[#062B5C]">Not sure which program suits you?</h3>
          <p className="mt-3 leading-7 text-slate-600">Speak with our mentor and get a simple recommendation based on your goals and current confidence level.</p>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-7 py-3.5 font-bold text-[#062B5C] shadow-md transition hover:-translate-y-1 hover:bg-[#00C970]">Talk to Our Mentor <span className="ml-2" aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

