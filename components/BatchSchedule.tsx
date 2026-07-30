import {
  CalendarDays,
  Clock3,
  Laptop,
  MapPin,
  Users,
} from "lucide-react";

const batches = [
  {
    title: "Morning Batch",
    audience: "Students and Job Seekers",
    timing: "6:30 AM – 7:30 AM",
    days: "Monday to Friday",
    mode: "Online",
    availability: "Admissions Open",
  },
  {
    title: "Evening Batch",
    audience: "Working Professionals",
    timing: "7:30 PM – 8:30 PM",
    days: "Monday to Friday",
    mode: "Online",
    availability: "Admissions Open",
  },
  {
    title: "Weekend Batch",
    audience: "Students and Professionals",
    timing: "Flexible Timing",
    days: "Saturday and Sunday",
    mode: "Online / Offline",
    availability: "Limited Seats",
  },
];

export default function BatchSchedule() {
  return (
    <section
      id="batches"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.22em] text-[#00A866]">
            Upcoming Batches
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#062B5C] sm:text-5xl">
            Choose a Batch That Fits Your Schedule
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Flexible learning options designed for students, job seekers, and
            working professionals.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#00D97E]" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {batches.map((batch) => (
            <article
              key={batch.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#00D97E] hover:shadow-xl"
            >
              <div className="bg-[#062B5C] p-7 text-white">
                <div className="flex items-center justify-between gap-4">
                  <CalendarDays
                    className="text-[#00D97E]"
                    size={34}
                    aria-hidden="true"
                  />

                  <span className="rounded-full bg-[#00D97E] px-3 py-1 text-xs font-bold text-[#062B5C]">
                    {batch.availability}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">{batch.title}</h3>

                <p className="mt-2 text-blue-100">{batch.audience}</p>
              </div>

              <div className="space-y-5 p-7">
                <div className="flex items-start gap-4">
                  <Clock3
                    className="mt-1 shrink-0 text-[#00A866]"
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Timing
                    </p>
                    <p className="mt-1 font-bold text-[#062B5C]">
                      {batch.timing}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users
                    className="mt-1 shrink-0 text-[#00A866]"
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Training Days
                    </p>
                    <p className="mt-1 font-bold text-[#062B5C]">
                      {batch.days}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {batch.mode.includes("Offline") ? (
                    <MapPin
                      className="mt-1 shrink-0 text-[#00A866]"
                      size={22}
                      aria-hidden="true"
                    />
                  ) : (
                    <Laptop
                      className="mt-1 shrink-0 text-[#00A866]"
                      size={22}
                      aria-hidden="true"
                    />
                  )}

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Learning Mode
                    </p>
                    <p className="mt-1 font-bold text-[#062B5C]">
                      {batch.mode}
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#00D97E] px-6 py-4 font-bold text-[#062B5C] transition hover:bg-[#00C970]"
                >
                  Reserve Your Seat
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-6 text-slate-500">
          Batch timings may be adjusted based on learner requirements and
          availability. Contact us to confirm the latest schedule.
        </p>
      </div>
    </section>
  );
}