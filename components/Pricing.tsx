import { BadgeCheck, Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    subtitle: "For beginners building speaking confidence",
    duration: "8 Weeks",
    price: "Contact for Fee",
    featured: false,
    features: [
      "Spoken English fundamentals",
      "Basic grammar for communication",
      "Daily conversation practice",
      "Vocabulary development",
      "Pronunciation guidance",
      "Regular feedback",
    ],
  },
  {
    name: "Professional",
    subtitle: "For career and workplace communication",
    duration: "10 Weeks",
    price: "Contact for Fee",
    featured: true,
    features: [
      "Everything in Foundation",
      "Interview preparation",
      "Mock interview sessions",
      "Corporate communication",
      "Presentation practice",
      "Personal mentorship",
    ],
  },
  {
    name: "Personal Coaching",
    subtitle: "Focused individual learning and guidance",
    duration: "Flexible",
    price: "Custom Plan",
    featured: false,
    features: [
      "One-to-one sessions",
      "Personal learning plan",
      "Flexible scheduling",
      "Individual speaking corrections",
      "Career-specific communication",
      "Progress reviews",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-[#F8FBFF] px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-[#00A866]">
            Learning Plans
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Choose the Right Learning Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Select a learning plan based on your current level, goals, and
            preferred training style.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.featured
                  ? "border-[#00D97E] ring-2 ring-[#00D97E]/20"
                  : "border-slate-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#00D97E] px-5 py-2 text-sm font-bold text-[#062B5C] shadow-md">
                  <BadgeCheck size={18} aria-hidden="true" />
                  Recommended
                </div>
              )}

              <p className="text-sm font-bold uppercase tracking-wider text-[#00A866]">
                {plan.duration}
              </p>

              <h3 className="mt-4 text-3xl font-bold text-[#062B5C]">
                {plan.name}
              </h3>

              <p className="mt-3 min-h-14 leading-7 text-slate-600">
                {plan.subtitle}
              </p>

              <p className="mt-7 text-2xl font-extrabold text-[#062B5C]">
                {plan.price}
              </p>

              <div className="my-7 h-px bg-slate-200" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#00A866]">
                      <Check size={15} strokeWidth={3} aria-hidden="true" />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 font-bold transition ${
                  plan.featured
                    ? "bg-[#00D97E] text-[#062B5C] hover:bg-[#00C970]"
                    : "bg-[#062B5C] text-white hover:bg-[#0A3B78]"
                }`}
              >
                Enquire Now
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-6 text-slate-500">
          Course fees may vary based on batch type, learning mode, duration,
          and individual training requirements.
        </p>
      </div>
    </section>
  );
}