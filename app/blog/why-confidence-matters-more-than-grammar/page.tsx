import type { Metadata } from "next";
import Link from "next/link";

const pageUrl =
  "https://www.unmutepro.com/blog/why-confidence-matters-more-than-grammar";

export const metadata: Metadata = {
  title: "Why Confidence Matters More Than Grammar in Spoken English",
  description:
    "Discover why confidence is the foundation of spoken English fluency and learn practical habits to overcome fear and communicate clearly.",
  keywords: [
    "confidence in spoken English",
    "spoken English tips",
    "English speaking confidence",
    "how to speak English without fear",
    "interview communication skills",
  ],
  alternates: { canonical: "/blog/why-confidence-matters-more-than-grammar" },
  openGraph: {
    title: "Why Confidence Matters More Than Grammar in Spoken English",
    description:
      "Practical guidance to overcome hesitation and build real English-speaking confidence.",
    url: pageUrl,
    type: "article",
    publishedTime: "2026-08-01T00:00:00+05:30",
    authors: ["Manibabu"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why Confidence Matters More Than Grammar in Spoken English",
  description:
    "Discover why confidence is the foundation of spoken English fluency and learn practical habits to overcome fear and communicate clearly.",
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  mainEntityOfPage: pageUrl,
  author: {
    "@type": "Person",
    name: "Manibabu",
    jobTitle: "Communication Mentor",
  },
  publisher: {
    "@type": "EducationalOrganization",
    name: "Unmute Pro",
    url: "https://www.unmutepro.com",
  },
};

const habits = [
  "Speak in English for 10 minutes every day.",
  "Read one short English article aloud.",
  "Learn five useful words and use them in your own sentences.",
  "Record yourself speaking and notice one improvement at a time.",
  "Practise your self-introduction until it feels natural.",
];

export default function BlogPostPage() {
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(
    `Why Confidence Matters More Than Grammar in Spoken English — ${pageUrl}`
  )}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    pageUrl
  )}`;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/blog" className="font-extrabold text-[#062B5C]">
            ← Back to Blog
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-[#00D97E] px-5 py-2.5 text-sm font-bold text-[#062B5C]"
          >
            Reserve Demo · ₹99
          </Link>
        </div>
      </header>

      <article>
        <section className="bg-gradient-to-br from-[#062B5C] to-[#0A4B8C] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-[#00D97E] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#062B5C]">
              Confidence & Spoken English
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Why Confidence Matters More Than Grammar in Spoken English
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              You do not need perfect English to start speaking. You need the
              confidence to begin, practise and improve.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold text-blue-100">
              <span>By Manibabu</span>
              <span>•</span>
              <time dateTime="2026-08-01">August 1, 2026</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-12">
          <div className="prose prose-lg max-w-none prose-headings:text-[#062B5C] prose-p:leading-8 prose-p:text-slate-700 prose-li:text-slate-700">
            <p className="text-xl leading-9 text-slate-700">
              Many learners believe they must master every grammar rule before
              they can speak English confidently. That belief often creates
              more fear than progress.
            </p>

            <p>
              At Unmute Pro, we believe confidence comes first. Grammar is
              important, but confidence is what helps you begin a conversation,
              answer an interview question, participate in a meeting and express
              an idea without freezing.
            </p>

            <h2>Why do people hesitate to speak English?</h2>
            <p>
              Most learners do not struggle only because of limited knowledge.
              They also worry about making mistakes, being judged, forgetting
              vocabulary or pronouncing a word incorrectly. These fears can stop
              someone from speaking even when they understand English well.
            </p>

            <div className="my-9 rounded-3xl border border-[#00D97E]/30 bg-[#ECFDF5] p-7">
              <p className="m-0 text-xl font-extrabold text-[#062B5C]">
                Confidence is not speaking without mistakes. Confidence is
                continuing even when a mistake happens.
              </p>
            </div>

            <h2>Confidence builds fluency</h2>
            <p>
              Children do not learn their first language by waiting for perfect
              grammar. They listen, speak, make mistakes, receive feedback and
              improve. Spoken English develops in a similar way.
            </p>
            <p>
              Regular speaking helps vocabulary become easier to recall,
              pronunciation become more natural and sentence formation become
              faster. Practice turns passive knowledge into active communication.
            </p>

            <h2>Does grammar still matter?</h2>
            <p>
              Yes. Confidence is not a replacement for grammar. It is the
              foundation that allows you to use grammar in real situations.
              Learners need a balanced approach that combines practical grammar,
              listening, speaking and supportive feedback.
            </p>

            <h2>Five daily habits to build speaking confidence</h2>
            <ol>
              {habits.map((habit) => (
                <li key={habit}>{habit}</li>
              ))}
            </ol>

            <h2>How Unmute Pro supports learners</h2>
            <p>
              Unmute Pro focuses on guided conversations, confidence-building
              activities, interview preparation, personal mentoring and regular
              feedback. The aim is not to make learners memorise complicated
              rules. The aim is to help them use English confidently in daily
              and professional life.
            </p>

            <h2>Final thoughts</h2>
            <p>
              Confidence is the bridge between knowledge and communication. Do
              not wait until your English feels perfect. Start with one sentence,
              one conversation and one small improvement every day.
            </p>
            <p className="font-bold text-[#062B5C]">
              Confidence creates communication, and communication creates
              opportunity.
            </p>

            <div className="mt-10 rounded-3xl bg-[#062B5C] p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00D97E]">
                Ready to start?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                Reserve your ₹99 demo session
              </h2>
              <p className="mt-4 leading-8 text-blue-100">
                Experience practical, confidence-focused learning and receive a
                program recommendation based on your goals.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded-xl bg-[#00D97E] px-7 py-4 font-extrabold text-[#062B5C] no-underline"
              >
                Reserve My Demo · ₹99
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-[#F8FBFF] p-6">
              <p className="font-bold text-[#062B5C]">Share this article</p>
              <div className="mt-4 grid gap-3">
                <a
                  href={whatsappShare}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#25D366] px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Share on WhatsApp
                </a>
                <a
                  href={facebookShare}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-[#1877F2] px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Share on Facebook
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 p-6">
              <p className="font-bold text-[#062B5C]">About the author</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Manibabu is a communication mentor with 15+ years of corporate
                experience and the founder of Unmute Pro.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
