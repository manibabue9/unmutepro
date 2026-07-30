import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unmutepro.com"),

  title: {
    default: "Unmute Pro | Spoken English and Communication Training",
    template: "%s | Unmute Pro",
  },

  description:
    "Unmute Pro provides practical spoken English, interview preparation, corporate communication, and personality development training for students, job seekers, and professionals.",

  keywords: [
    "spoken English classes",
    "spoken English course",
    "English speaking course",
    "online spoken English classes",
    "interview preparation",
    "corporate communication training",
    "personality development",
    "communication skills",
    "English communication skills",
    "Unmute Pro",
  ],

  authors: [
    {
      name: "Unmute Pro",
    },
  ],

  creator: "Unmute Pro",
  publisher: "Unmute Pro",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Build confidence in spoken English, interviews, workplace communication, presentations, and professional situations.",
    url: "https://www.unmutepro.com",
    siteName: "Unmute Pro",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Practical spoken English and career communication training for students, job seekers, and professionals.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Unmute Pro",
  url: "https://www.unmutepro.com",
  slogan: "Your Silence Ends Here",
  telephone: "+91-9392209162",
  description:
    "Practical spoken English, interview preparation, corporate communication, and personality development training.",
  founder: {
    "@type": "Person",
    name: "Manibabu",
    jobTitle: "Mentor and Communication Guide",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9392209162",
    contactType: "customer support",
    availableLanguage: ["English", "Telugu"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {children}

        <Analytics />
      </body>
    </html>
  );
}