import {
  BriefcaseBusiness,
  HeartHandshake,
  MessageCircle,
  Mic2,
  Target,
  UserRoundCheck,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Confidence Before Grammar",
    description:
      "We help you overcome hesitation and begin speaking confidently. Grammar is introduced naturally through practical conversations.",
  },
  {
    icon: MessageCircle,
    title: "Real-Life Communication",
    description:
      "Practise English for interviews, meetings, presentations, travel, workplace discussions, and everyday conversations.",
  },
  {
    icon: UserRoundCheck,
    title: "Personal Mentorship",
    description:
      "Receive individual feedback, speaking corrections, and guidance designed around your current level and learning goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Experience",
    description:
      "Learn communication techniques shaped by 15 years of experience working in professional and multinational environments.",
  },
  {
    icon: Mic2,
    title: "Practical Activities",
    description:
      "Participate in role plays, mock interviews, presentations, discussions, and regular speaking exercises.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Environment",
    description:
      "Make mistakes without fear, ask questions freely, and improve in a friendly and encouraging learning environment.",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your current English level, challenges, and communication goals.",
  },
  {
    number: "02",
    title: "Practise",
    description:
      "You participate in practical conversations and structured speaking activities.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "You receive clear feedback on fluency, vocabulary, pronunciation, and confidence.",
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "You apply your learning in interviews, meetings, presentations, and daily life.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="scroll-mt-24 bg-[#F8FBFF] px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-[#00A866]">
            Why Choose Unmute Pro
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Learn English with Confidence, Not Fear
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            English is not only a subject to study. It is a practical skill
            that grows through regular speaking, personal guidance, and
            real-life communication.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#00D97E]/60 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#00A866] transition duration-300 group-hover:bg-[#00D97E] group-hover:text-[#062B5C]">
                  <Icon size={30} strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#062B5C]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Methodology */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#062B5C] shadow-2xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-8 text-white sm:p-12">
              <p className="font-bold uppercase tracking-[0.2em] text-[#00D97E]">
                Our Method
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                A Simple Path from Hesitation to Confident Communication
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Our training approach is designed to help you practise more,
                overcome fear, and use English naturally in real situations.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] transition duration-300 hover:-translate-y-1 hover:bg-[#00C970]"
              >
                Book Your Free Demo
              </a>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {learningSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-[#08366E] p-8 text-white transition hover:bg-[#0A3F7E] sm:p-10"
                >
                  <p className="text-4xl font-extrabold text-[#00D97E]">
                    {step.number}
                  </p>

                  <h4 className="mt-5 text-2xl font-bold">{step.title}</h4>

                  <p className="mt-3 leading-7 text-blue-100">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}