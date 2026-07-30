import Image from "next/image";

const experienceCards = [
  {
    title: "15+",
    description: "Years of Corporate Experience",
    style: "border-blue-200 bg-blue-50 text-blue-800",
  },
  {
    title: "S&P Global",
    description: "Corporate Experience",
    style: "border-green-200 bg-green-50 text-green-800",
  },
  {
    title: "Accenture",
    description: "Technology & Consulting",
    style: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    title: "LTIMindtree",
    description: "IT & Digital Solutions",
    style: "border-purple-200 bg-purple-50 text-purple-800",
  },
];

const journeyItems = [
  {
    company: "S&P Global",
    role: "Corporate Professional",
    description: "Built a strong foundation in global corporate operations.",
  },
  {
    company: "Accenture",
    role: "Technology & Consulting",
    description: "Gained valuable consulting and industry experience.",
  },
  {
    company: "LTIMindtree",
    role: "Senior Professional",
    description: "Worked in diverse teams on global business assignments.",
  },
  {
    company: "Leading U.S.-based Company",
    role: "Assistant Manager",
    description: "Currently supporting teams through communication and leadership.",
  },
];

const learningBenefits = [
  {
    icon: "💼",
    title: "Corporate Experience",
    description:
      "Learn from more than 15 years of practical corporate experience.",
  },
  {
    icon: "🗣️",
    title: "Spoken English",
    description:
      "Improve fluency through practical conversations and speaking activities.",
  },
  {
    icon: "🎯",
    title: "Interview Preparation",
    description:
      "Prepare confidently through mock interviews and professional guidance.",
  },
  {
    icon: "⭐",
    title: "Personality Development",
    description:
      "Develop confidence, body language, presentation, and communication skills.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    description:
      "Receive individual guidance, encouragement, and constructive feedback.",
  },
  {
    icon: "🕒",
    title: "Flexible Learning",
    description:
      "Learn through flexible sessions designed for students and professionals.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-green-600">
            About Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
            About Unmute Pro
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Empowering confidence through practical English communication,
            interview preparation, and personality development.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-green-500" />
        </div>

        {/* Mentor section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mentor image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-3xl bg-green-100" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-3xl bg-blue-100" />

            <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
              <Image
                src="/images/mentor.jpg"
                alt="Manibabu, Founder and Mentor of Unmute Pro"
                width={700}
                height={850}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="relative mx-auto -mt-10 w-[85%] rounded-2xl bg-blue-950 px-6 py-5 text-center text-white shadow-xl">
              <h3 className="text-2xl font-bold">Manibabu</h3>
              <p className="mt-1 font-medium text-green-300">
                Founder & Mentor, Unmute Pro
              </p>
            </div>
          </div>

          {/* Mentor information */}
          <div>
            <p className="font-bold uppercase tracking-wider text-green-600">
              Meet Your Mentor
            </p>

            <h3 className="mt-2 text-4xl font-bold text-blue-950">
              Manibabu
            </h3>

            <div className="mt-4 h-1 w-16 rounded-full bg-green-500" />

            <p className="mt-7 leading-8 text-gray-700">
              With over{" "}
              <strong className="text-blue-950">
                15 years of corporate experience
              </strong>
              , I have worked with globally recognized organizations including{" "}
              <strong className="text-blue-950">S&amp;P Global</strong>,{" "}
              <strong className="text-blue-950">Accenture</strong>, and{" "}
              <strong className="text-blue-950">LTIMindtree</strong>.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              Currently serving as an{" "}
              <strong className="text-blue-950">
                Assistant Manager at a leading U.S.-based company
              </strong>
              , I have seen how effective communication can transform careers,
              strengthen confidence, and create new opportunities.
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              Through Unmute Pro, my mission is to help students, job seekers,
              and working professionals speak English confidently, perform
              better in interviews, and achieve their personal and professional
              goals.
            </p>

            {/* Experience cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {experienceCards.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${item.style}`}
                >
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentor message */}
        <div className="mt-20 rounded-3xl bg-blue-950 px-7 py-10 text-white shadow-xl sm:px-12">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <div className="text-6xl text-green-300">“</div>

            <div>
              <p className="text-lg leading-8 text-blue-50 sm:text-xl">
                I have seen how effective communication can transform careers
                and open new opportunities. Through Unmute Pro, my mission is
                to help every learner speak English confidently, communicate
                without fear, and achieve success.
              </p>

              <p className="mt-5 font-bold text-green-300">
                — Manibabu, Founder & Mentor
              </p>
            </div>
          </div>
        </div>

        {/* Mission and vision */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-green-200 bg-green-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-3xl text-white shadow-lg">
              🎯
            </div>

            <h3 className="mt-6 text-3xl font-bold text-green-800">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              To empower students, job seekers, and professionals with practical
              English communication skills that build confidence, unlock career
              opportunities, and support lifelong personal growth.
            </p>
          </article>

          <article className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-3xl text-white shadow-lg">
              👁️
            </div>

            <h3 className="mt-6 text-3xl font-bold text-blue-900">
              Our Vision
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              To become one of India&apos;s most trusted spoken English training
              institutes by transforming lives through practical learning,
              quality mentorship, and meaningful communication.
            </p>
          </article>
        </div>

        {/* Professional journey */}
        <div className="mt-24">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-green-600">
              Career Experience
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-950 sm:text-4xl">
              My Professional Journey
            </h3>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-500" />
          </div>

          <div className="relative mt-12 grid gap-6 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-blue-100 lg:block" />

            {journeyItems.map((item, index) => (
              <article
                key={item.company}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-white ring-8 ring-white">
                  {index + 1}
                </div>

                <h4 className="mt-6 text-xl font-bold text-blue-950">
                  {item.company}
                </h4>

                <p className="mt-2 font-semibold text-green-600">
                  {item.role}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Why learn with us */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-green-600">
              The Unmute Pro Advantage
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-950 sm:text-4xl">
              Why Learn with Unmute Pro?
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Training designed to help you communicate confidently in
              real-life, academic, interview, and workplace situations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {benefit.icon}
                </div>

                <h4 className="mt-5 text-xl font-bold text-blue-950">
                  {benefit.title}
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-800 px-7 py-10 text-white shadow-2xl sm:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-wider text-green-300">
                Start Your Journey
              </p>

              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                Ready to Speak English with Confidence?
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                Book a free demo session and take your first step toward
                confident communication and better career opportunities.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-yellow-400 px-7 py-4 text-center font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                Book Free Demo
              </a>

              <a
                href="tel:+919392209162"
                className="rounded-xl border border-white px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-blue-950"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}