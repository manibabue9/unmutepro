import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";
import Link from "next/link";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
};

type BlogDownload = {
  href: string;
  title: string;
  description: string;
  label: string;
};

type BlogArticleProps = {
  title: string;
  description: string;
  category: string;
  published: string;
  publishedIso?: string;
  readingTime: string;
  sections: BlogSection[];
  takeaway: string;
  download?: BlogDownload;
};

export default function BlogArticle({
  title,
  description,
  category,
  published,
  publishedIso = "2026-08-04",
  readingTime,
  sections,
  takeaway,
  download,
}: BlogArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: { "@type": "Person", name: "Manibabu" },
    publisher: {
      "@type": "Organization",
      name: "Unmute Pro",
      url: "https://www.unmutepro.com",
      logo: { "@type": "ImageObject", url: "https://www.unmutepro.com/images/logo.png" },
    },
  };

  return (
    <main className="min-h-screen bg-[#F8FBFF]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 font-extrabold text-[#062B5C]"><ArrowLeft size={18} /> All blogs</Link>
          <Link href="/assessment" className="rounded-full bg-[#00D97E] px-5 py-2.5 text-sm font-bold text-[#062B5C]">Check my level</Link>
        </div>
      </header>

      <article>
        <section className="bg-[#062B5C] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#00D97E]">{category}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">{description}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold text-blue-100">
              <span>By Manibabu</span><span aria-hidden="true">|</span><span>{published}</span><span aria-hidden="true">|</span><span>{readingTime}</span>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="font-bold text-[#062B5C]">Key takeaway</p>
              <p className="mt-2 leading-7 text-slate-700">{takeaway}</p>
            </div>

            {download && (
              <div className="mt-6 rounded-2xl bg-[#062B5C] p-6 text-white sm:flex sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#00D97E] text-[#062B5C]"><Download size={23} /></span>
                  <div><p className="font-extrabold">{download.title}</p><p className="mt-1 text-sm leading-6 text-blue-100">{download.description}</p></div>
                </div>
                <a href={download.href} download className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#062B5C] sm:ml-5 sm:mt-0">{download.label}<Download size={17} /></a>
              </div>
            )}

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-extrabold text-[#062B5C] sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-8 text-slate-700">{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3 leading-7 text-slate-700"><Check className="mt-1 shrink-0 text-[#00A866]" size={18} />{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.numbered && (
                    <ol className="mt-5 space-y-4">
                      {section.numbered.map((item, index) => (
                        <li key={item} className="flex gap-4 leading-7 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-bold text-[#007F4D]">{index + 1}</span>{item}</li>
                      ))}
                    </ol>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-[#062B5C] p-7 text-center text-white sm:p-9">
              <h2 className="text-2xl font-extrabold">Turn reading into confident practice</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-blue-100">Check your current communication level, receive a practical recommendation and speak with an experienced mentor.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/assessment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-7 py-3.5 font-bold text-[#062B5C]">Take the free level check <ArrowRight size={18} /></Link>
                <Link href="/#contact" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white">Book demo</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

