const testimonials = [
  {
    name: "Student Learner",
    role: "Spoken English Program",
    initials: "SL",
    review:
      "The sessions helped me speak without fear. The practical activities and regular feedback improved my confidence and fluency.",
  },
  {
    name: "Job Seeker",
    role: "Interview Preparation",
    initials: "JS",
    review:
      "The mock interviews and structured guidance helped me answer questions clearly. I now feel more confident during interviews.",
  },
  {
    name: "Working Professional",
    role: "Corporate Communication",
    initials: "WP",
    review:
      "I improved my professional communication, meeting participation, and email writing. The training was practical and easy to follow.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00A866]">
            Learner Experiences
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            What Our Learners Say
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Real progress begins when learners overcome fear, practise
            consistently, and receive the right guidance.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.role}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#00D97E] hover:shadow-xl"
            >
              <div className="absolute right-7 top-5 text-6xl font-bold text-[#00D97E]/20">
                “
              </div>

              <div className="flex gap-1 text-xl text-[#F5B700]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="mt-6 leading-8 text-slate-700">
                “{testimonial.review}”
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#062B5C] font-bold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold text-[#062B5C]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#00A866]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-16 grid gap-6 rounded-3xl bg-[#EFF6FF] p-8 sm:grid-cols-3 sm:p-10">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#062B5C]">Practical</p>
            <p className="mt-2 text-slate-600">Real-life speaking activities</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-[#062B5C]">Personal</p>
            <p className="mt-2 text-slate-600">Individual guidance and feedback</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-[#062B5C]">Confident</p>
            <p className="mt-2 text-slate-600">Communication without fear</p>
          </div>
        </div>
      </div>
    </section>
  );
}
