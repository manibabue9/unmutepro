import Image from "next/image";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartHandshake,
  MessageSquareText,
} from "lucide-react";

const professionalJourney = [
  {
    company: "S&P Global",
    description:
      "Built experience in structured corporate environments, professional communication, collaboration, and delivering quality work.",
  },
  {
    company: "Accenture",
    description:
      "Strengthened communication, teamwork, process knowledge, and the ability to work effectively with diverse professional teams.",
  },
  {
    company: "LTIMindtree",
    description:
      "Expanded experience in corporate operations, stakeholder communication, leadership, and professional development.",
  },
  {
    company: "Current Role",
    description:
      "Currently serving as an Assistant Manager at a leading U.S.-based company, supporting teams and professional operations.",
  },
];

const mentorStrengths = [
  {
    icon: BriefcaseBusiness,
    title: "15 Years of Experience",
    description:
      "Practical knowledge gained through years of working in professional and multinational corporate environments.",
  },
  {
    icon: MessageSquareText,
    title: "Corporate Communication",
    description:
      "Guidance based on real workplace situations, including meetings, interviews, presentations, and team communication.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Mentorship",
    description:
      "A supportive approach that helps learners overcome hesitation and improve through consistent feedback.",
  },
  {
    icon: GraduationCap,
    title: "Practical Learning",
    description:
      "Training focused on using English naturally instead of memorising rules without speaking practice.",
  },
];

export default function MentorJourney() {
  return (
    <section
      id="mentor"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-[#00A866]">
            Meet Your Mentor
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Corporate Experience. Personal Guidance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Unmute Pro brings together professional experience and a genuine
            passion for helping learners speak English with clarity,
            confidence, and purpose.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        {/* Mentor introduction */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-[#00D97E]/20" />

            <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-[#062B5C]/10" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-slate-100 shadow-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/mentor-portrait-2026.png"
                  alt="Manibabu, mentor and communication guide at Unmute Pro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#062B5C]/95 p-5 text-white shadow-xl backdrop-blur">
                <p className="text-2xl font-bold">Manibabu</p>

                <p className="mt-1 font-semibold text-[#00D97E]">
                  Mentor and Communication Guide
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-blue-100">
                  <BadgeCheck
                    size={18}
                    className="text-[#00D97E]"
                    aria-hidden="true"
                  />
                  15 years of corporate experience
                </div>
              </div>
            </div>
          </div>

          {/* Mentor content */}
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#00A866]">
              The Story Behind Unmute Pro
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#062B5C] sm:text-4xl">
              Helping Learners Find Their Voice
            </h3>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                With 15 years of corporate experience, Manibabu has worked in
                professional environments where clear communication,
                confidence, teamwork, and leadership are essential for growth.
              </p>

              <p>
                His experience with organisations including S&amp;P Global,
                Accenture, and LTIMindtree helped him understand the importance
                of effective English communication in interviews, meetings,
                presentations, and career development.
              </p>

              <p>
                Unmute Pro was created with a simple goal: to help students,
                job seekers, and working professionals overcome hesitation and
                communicate confidently through practical, encouraging, and
                personalised training.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-[#00D97E] bg-[#ECFDF5] p-6">
              <p className="text-lg font-bold leading-8 text-[#062B5C]">
                “English should not become a reason to remain silent. With the
                right guidance and regular practice, every learner can speak
                with confidence.”
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#00D97E] px-7 py-4 font-bold text-[#062B5C] shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#00C970] hover:shadow-lg"
            >
              Learn with Your Mentor
            </a>
          </div>
        </div>

        {/* Mentor strengths */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentorStrengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <article
                key={strength.title}
                className="rounded-3xl border border-slate-200 bg-[#F8FBFF] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#00D97E] hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#062B5C] text-[#00D97E]">
                  <Icon size={27} strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#062B5C]">
                  {strength.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {strength.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Professional journey */}
        <div className="mt-20 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FBFF]">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="bg-[#062B5C] p-8 text-white sm:p-12">
              <Building2
                size={42}
                className="text-[#00D97E]"
                aria-hidden="true"
              />

              <p className="mt-8 font-bold uppercase tracking-[0.2em] text-[#00D97E]">
                Professional Journey
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Experience That Shapes Practical Training
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Every professional experience contributes to the way Unmute Pro
                teaches communication, confidence, workplace readiness, and
                personal growth.
              </p>
            </div>

            <div className="p-8 sm:p-12">
              <div className="relative">
                <div className="absolute bottom-3 left-[23px] top-3 hidden w-px bg-slate-300 sm:block" />

                <div className="space-y-8">
                  {professionalJourney.map((item, index) => (
                    <article
                      key={item.company}
                      className="relative flex gap-5"
                    >
                      <div className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00D97E] font-bold text-[#062B5C] shadow-md sm:flex">
                        {index + 1}
                      </div>

                      <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#00D97E]/60 hover:shadow-lg">
                        <h4 className="text-xl font-bold text-[#062B5C]">
                          {item.company}
                        </h4>

                        <p className="mt-3 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#ECFDF5] to-[#EFF6FF] p-8 text-center sm:p-12">
          <p className="font-bold text-[#00A866]">
            Guidance Built on Real Experience
          </p>

          <h3 className="mt-3 text-3xl font-bold text-[#062B5C] sm:text-4xl">
            Take the First Step Toward Confident Communication
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Book a free demo session and receive guidance based on your current
            level, professional goals, and communication challenges.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-[#062B5C] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0A3B78]"
          >
            Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}
