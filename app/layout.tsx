import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unmutepro.com"),
  title: {
    default: "Unmute Pro | Spoken English & Confidence Training",
    template: "%s | Unmute Pro",
  },
  description:
    "Build confidence in spoken English, interviews, presentations and workplace communication through practical mentor-led training with Unmute Pro.",
  keywords: [
    "Spoken English classes",
    "English speaking course",
    "Communication skills training",
    "Interview preparation",
    "Corporate communication",
    "Confidence building",
    "Spoken English Hyderabad",
    "Unmute Pro",
  ],
  authors: [{ name: "Unmute Pro" }],
  creator: "Unmute Pro",
  publisher: "Unmute Pro",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Practical spoken English, interview and workplace communication training designed to build real confidence.",
    url: "/",
    siteName: "Unmute Pro",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/unmutepro-share.jpg",
        width: 1200,
        height: 630,
        alt: "Unmute Pro spoken English and confidence training",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Build confidence through practical spoken English, interview and workplace communication training.",
    images: ["/unmutepro-share.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#062B5C",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Unmute Pro",
  url: "https://www.unmutepro.com",
  logo: "https://www.unmutepro.com/images/logo.png",
  image: "https://www.unmutepro.com/unmutepro-share.jpg",
  description:
    "Practical spoken English, interview preparation and workplace communication training focused on confidence.",
  telephone: "+91-93922-09162",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  founder: {
    "@type": "Person",
    name: "Manibabu",
    jobTitle: "Communication Mentor",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-93922-09162",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}