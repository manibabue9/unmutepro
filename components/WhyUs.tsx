const features = [
  {
    number: "01",
    title: "Confidence Building",
    description:
      "Overcome hesitation, fear and self-doubt through guided speaking activities and regular practice.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Practical Spoken English",
    description:
      "Learn English through real conversations instead of only memorising grammar rules.",
    icon: "🗣️",
  },
  {
    number: "03",
    title: "Interview Preparation",
    description:
      "Practise introductions, common interview questions, mock interviews and confident answers.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Corporate Communication",
    description:
      "Communicate clearly in meetings, emails, presentations and everyday workplace situations.",
    icon: "💼",
  },
  {
    number: "05",
    title: "Personal Guidance",
    description:
      "Receive supportive feedback and practical guidance based on your current communication level.",
    icon: "🤝",
  },
  {
    number: "06",
    title: "Daily Speaking Practice",
    description:
      "Build consistency through structured speaking exercises, role plays and group discussions.",
    icon: "📅",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-32 bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            Why Choose Unmute Pro?
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            We do not just teach English.
            <span className="mt-2 block text-[#00A866]">
              We help you find your voice.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Our training focuses on confidence, communication and practical
            speaking skills that you can use in real-life situations.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#00D97E]/50 hover:shadow-xl"
            >
              <div className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition group-hover:text-[#ECFDF5]">
                {feature.number}
              </div>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl shadow-sm transition duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#062B5C]">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#00D97E] transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom call-to-action */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-[#062B5C] px-6 py-9 shadow-xl sm:px-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00D97E]">
                Your first step starts here
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Start speaking with confidence.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                Join a free demo session and experience the Unmute Pro learning
                approach before choosing your course.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#00C970]"
            >
              Book Free Demo
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
