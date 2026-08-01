import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import LeadChatbot from "@/components/LeadChatbot";
import "./globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unmutepro.com"),
  manifest: "/manifest.webmanifest",
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
    "Confidence building",
    "Unmute Pro",
  ],
  authors: [{ name: "Unmute Pro" }],
  creator: "Unmute Pro",
  publisher: "Unmute Pro",
  alternates: { canonical: "/" },
  verification: googleVerification ? { google: googleVerification } : undefined,
  openGraph: {
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Practical spoken English, interview and workplace communication training designed to build real confidence.",
    url: "/",
    siteName: "Unmute Pro",
    type: "website",
    locale: "en_IN",
    images: [{
      url: "/unmutepro-share.jpg",
      width: 1200,
      height: 630,
      alt: "Unmute Pro spoken English and confidence training",
      type: "image/jpeg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Build confidence through practical spoken English, interview and workplace communication training.",
    images: ["/unmutepro-share.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/images/logo.png",
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
  email: "unmuteproofficial@gmail.com",
  telephone: "+91-93922-09162",
  description:
    "Practical spoken English, interview preparation and communication training focused on confidence.",
  areaServed: { "@type": "Country", name: "India" },
  founder: { "@type": "Person", name: "Manibabu", jobTitle: "Communication Mentor" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-93922-09162",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        {/* Public website lead assistant */}
        <LeadChatbot />
        <Analytics />
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

