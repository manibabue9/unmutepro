import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#courses" },
  { name: "Google Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  "7-Week Individual Programme",
  "15-Day Campus Bootcamp",
  "Interview & Placement Focus",
];

const whatsappMessage = encodeURIComponent(
  "Hello Unmute Pro, I would like to book a demo and know the available timings."
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#031A38] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex rounded-xl bg-white p-3" aria-label="Unmute Pro home">
              <Image src="/images/logo.png" alt="Unmute Pro" width={150} height={55} className="h-auto w-[130px]" />
            </a>
            <h2 className="mt-6 text-2xl font-bold">Your Silence Ends Here.</h2>
            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Confidence-focused English communication and interview guidance for students, job seekers and working professionals.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/919392209162?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#00D97E] px-5 py-3 text-sm font-bold text-[#062B5C] transition hover:-translate-y-1 hover:bg-[#00C970]"
              >
                Chat on WhatsApp
              </a>
              <a href="tel:+919392209162" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-bold transition hover:bg-white/10">
                +91 93922 09162
              </a>
            </div>

            <p className="mt-7 text-sm font-semibold text-blue-100">For learner guidance and institutional presentations, contact us directly by WhatsApp or phone.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="text-blue-100 transition hover:text-[#00D97E]">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="mt-5 space-y-3">
              {programs.map((program) => <li key={program} className="text-blue-100">{program}</li>)}
            </ul>
            <div className="mt-7 rounded-2xl border border-[#00D97E]/30 bg-[#00D97E]/10 p-4">
              <p className="font-bold text-[#00D97E]">Book a Demo</p>
              <p className="mt-2 text-sm leading-6 text-blue-100">Adjusted against the course fee when you enrol.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-center text-sm text-blue-200 sm:flex-row sm:text-left">
          <p>© {currentYear} Unmute Pro. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4"><a href="/privacy" className="hover:text-[#00D97E]">Privacy Policy</a><a href="/account-deletion" className="hover:text-[#00D97E]">Delete Account</a></div>
          <p>Confidence first. English follows naturally.</p>
        </div>
      </div>
    </footer>
  );
}
