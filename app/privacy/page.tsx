import Link from "next/link";

export const metadata = { title: "Privacy Policy", description: "How Unmute Pro collects, uses and protects learner information." };

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" updated="3 August 2026">
    <p>Unmute Pro provides confidence-focused English communication, interview preparation and mentor-guided learning. This policy explains how we handle information submitted through our website and learner app.</p>
    <h2>Information we collect</h2><p>Depending on the feature you use, we may collect your name, email address, mobile number, learning goal, profile information, lesson progress, assessment answers and result, demo preferences, chat enquiries, and institutional enquiry details. We also receive limited technical and usage information needed to operate, secure and improve the service.</p>
    <h2>How we use information</h2><p>We use this information to provide sign-in and learner progress, deliver assessment results, recommend programmes, respond to enquiries, arrange demos or presentations, provide mentor support, prevent misuse and improve Unmute Pro.</p>
    <h2>Service providers</h2><p>We use trusted providers to operate the service, including Supabase for authentication and data storage, Vercel for hosting and analytics, Twilio for WhatsApp notifications, Resend for transactional email, and Google Maps Platform to display public business rating and review information. These providers process information only to deliver their services to us and are subject to their own privacy and security terms.</p>
    <h2>Sharing and selling</h2><p>We do not sell learner personal information. We may share information with service providers described above, authorised Unmute Pro mentors or staff, or when required by law and necessary to protect the service and its users.</p>
    <h2>Data retention and security</h2><p>We keep information only for as long as needed to provide the service, follow up on an enquiry, meet legal requirements or resolve disputes. We use reasonable organisational and technical safeguards, but no internet service can guarantee absolute security.</p>
    <h2>Your choices</h2><p>You may request access, correction or deletion of your personal information. You can also stop receiving optional follow-up communications by telling us by email or WhatsApp.</p>
    <h2>Children</h2><p>Unmute Pro is not designed to collect personal information from children without appropriate parent, guardian or institution involvement. If you believe a child submitted information without appropriate consent, contact us so we can review and remove it.</p>
    <h2>Contact us</h2><p>Email <a href="mailto:unmuteproofficial@gmail.com">unmuteproofficial@gmail.com</a> or call/WhatsApp <a href="tel:+919392209162">+91 93922 09162</a> for privacy questions.</p>
  </PolicyPage>;
}

function PolicyPage({title,updated,children}:{title:string;updated:string;children:React.ReactNode}) { return <main className="min-h-screen bg-[#F4F8FC] px-5 py-10 text-[#062B5C]"><article className="mx-auto max-w-3xl rounded-3xl bg-white p-7 shadow-sm sm:p-12"><Link href="/" className="font-bold text-[#008A55]">â† Back to Unmute Pro</Link><h1 className="mt-7 text-4xl font-extrabold sm:text-5xl">{title}</h1><p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p><div className="prose-policy mt-8 space-y-4 leading-7 text-slate-700">{children}</div></article></main>; }
