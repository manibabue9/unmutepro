const outcomes = [
  {
    title: "Speak Without Fear",
    description:
      "Reduce hesitation and express your ideas more comfortably in English.",
    icon: "💬",
  },
  {
    title: "Handle Interviews",
    description:
      "Introduce yourself confidently and respond clearly to interview questions.",
    icon: "🎯",
  },
  {
    title: "Participate in Meetings",
    description:
      "Share updates, ask questions and contribute professionally at work.",
    icon: "💼",
  },
  {
    title: "Present with Clarity",
    description:
      "Organise your thoughts and communicate them clearly before an audience.",
    icon: "🎤",
  },
];

export default function LearnerOutcomes() {
  return (
    <section className="bg-[#062B5C] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex rounded-full border border-[#00D97E]/30 bg-white/10 px-4 py-2 text-sm font-bold text-[#00D97E]">
              What You Can Achieve
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Communication skills that
              <span className="mt-2 block text-[#00D97E]">
                support your future.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Unmute Pro focuses on practical improvements that learners can
              apply in education, employment and everyday communication.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] transition duration-300 hover:-translate-y-1 hover:bg-[#00C970]"
            >
              Book Free Demo
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl">
                  {outcome.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {outcome.title}
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}