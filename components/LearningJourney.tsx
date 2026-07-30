const journeySteps = [
  {
    number: "01",
    title: "Book a Free Demo",
    description:
      "Connect with us and experience our practical, confidence-focused learning approach.",
    icon: "📅",
  },
  {
    number: "02",
    title: "Communication Assessment",
    description:
      "We understand your current English level, challenges and communication goals.",
    icon: "📝",
  },
  {
    number: "03",
    title: "Personal Learning Path",
    description:
      "Receive guidance on the right program based on your confidence and career needs.",
    icon: "🧭",
  },
  {
    number: "04",
    title: "Practical Speaking",
    description:
      "Participate in conversations, role plays, discussions and confidence-building activities.",
    icon: "🗣️",
  },
  {
    number: "05",
    title: "Feedback and Improvement",
    description:
      "Receive supportive feedback to improve fluency, clarity, vocabulary and presentation.",
    icon: "📈",
  },
  {
    number: "06",
    title: "Speak with Confidence",
    description:
      "Apply your communication skills confidently in interviews, meetings and everyday life.",
    icon: "🏆",
  },
];

export default function LearningJourney() {
  return (
    <section className="bg-[#F8FBFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#007F4D]">
            Your Learning Journey
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
            From hesitation to
            <span className="mt-2 block text-[#00A866]">
              confident communication.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            A clear step-by-step journey designed to help you overcome fear,
            practise regularly and communicate with confidence.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-12 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-slate-200 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#00D97E]/50 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5] text-2xl transition duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  <span className="text-4xl font-black text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#062B5C]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#00D97E] transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-8 py-4 font-bold text-[#062B5C] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#00C970]"
          >
            Start My Journey
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}