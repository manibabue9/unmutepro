import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "English Confidence & Career Communication Blog",
  description:
    "Practical articles from Unmute Pro about spoken English confidence, interview preparation and workplace communication.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "Why Confidence Matters More Than Grammar in Spoken English",
    description:
      "Learn why confidence is the foundation of fluent communication and discover five simple habits to start speaking without fear.",
    href: "/blog/why-confidence-matters-more-than-grammar",
    category: "Confidence",
    readingTime: "6 min read",
    published: "August 1, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="font-extrabold text-[#062B5C]">
            ← Unmute Pro
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-[#00D97E] px-5 py-2.5 text-sm font-bold text-[#062B5C]"
          >
            Reserve Demo · ₹99
          </Link>
        </div>
      </header>

      <section className="bg-[#062B5C] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#00D97E]">
            Unmute Pro Learning Blog
          </p>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Confidence, English and career communication
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Practical guidance for students, job seekers and professionals who
            want to communicate clearly and confidently.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-7">
            {posts.map((post) => (
              <article
                key={post.href}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-[0.38fr_0.62fr]">
                  <div className="flex min-h-56 items-center justify-center bg-gradient-to-br from-[#062B5C] to-[#0A4B8C] p-8 text-center text-white">
                    <div>
                      <span className="text-5xl" aria-hidden="true">💬</span>
                      <p className="mt-5 text-sm font-bold uppercase tracking-wider text-[#00D97E]">
                        {post.category}
                      </p>
                    </div>
                  </div>
                  <div className="p-7 sm:p-9">
                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
                      <span>{post.published}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#062B5C] sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-4 leading-8 text-slate-600">
                      {post.description}
                    </p>
                    <Link
                      href={post.href}
                      className="mt-7 inline-flex items-center font-bold text-[#00A866] hover:text-[#007F4D]"
                    >
                      Read article <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
