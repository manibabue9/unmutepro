import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unmutepro.com"),

  title: {
    default: "Unmute Pro | Your Silence Ends Here",
    template: "%s | Unmute Pro",
  },

  description:
    "Build confidence in spoken English, interviews and workplace communication through practical learning with Unmute Pro.",

  keywords: [
    "Spoken English",
    "English Speaking Course",
    "Communication Skills",
    "Interview Preparation",
    "Corporate Communication",
    "Confidence Building",
    "Unmute Pro",
  ],

  alternates: {
    canonical: "https://www.unmutepro.com",
  },

  openGraph: {
    title: "Unmute Pro | Your Silence Ends Here",
    description:
      "Build confidence in spoken English, interviews and workplace communication.",
    url: "https://www.unmutepro.com",
    siteName: "Unmute Pro",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.unmutepro.com/unmutepro-share.jpg",
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
      "Build confidence in spoken English, interviews and workplace communication.",
    images: ["https://www.unmutepro.com/unmutepro-share.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}