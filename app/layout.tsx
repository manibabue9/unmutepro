import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Unmute Pro | Your Silence Ends Here",
    template: "%s | Unmute Pro",
  },

  description:
    "Build confidence in spoken English, interview skills and workplace communication through practical learning with Unmute Pro.",

  keywords: [
    "Spoken English",
    "English Speaking Course",
    "Communication Skills",
    "Interview Preparation",
    "Corporate Communication",
    "Confidence Building",
    "Online Spoken English",
    "Unmute Pro",
  ],

  authors: [
    {
      name: "Unmute Pro",
    },
  ],

  creator: "Unmute Pro",

  publisher: "Unmute Pro",

  metadataBase: new URL("https://www.unmutepro.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Unmute Pro | Your Silence Ends Here",

    description:
      "Build confidence in spoken English, interview skills and workplace communication.",

    url: "https://www.unmutepro.com",

    siteName: "Unmute Pro",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unmute Pro",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Unmute Pro | Your Silence Ends Here",

    description:
      "Build confidence in spoken English, interview skills and workplace communication.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}