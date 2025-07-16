import { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // adjust as needed
});

const geistMono = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // adjust as needed
});

export const metadata: Metadata = {
  title: "Aura Icons : Beautiful, Open Source Icons",
  description:
    "Beautiful, modern, and open-source icons — perfectly crafted for React and Next.js.",
  openGraph: {
    title: "Aura Icons : Beautiful, Open Source Icons",
    description:
      "Beautiful, modern, and open-source icons — perfectly crafted for React and Next.js.",
    url: "https://yourdomain.com", // replace with your domain
    images: [
      {
        url: "/og-image.png", // Path to the OG image in the public folder
        width: 1200,
        height: 630,
        alt: "Aura Icons Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // add your twitter handle here if available
    title: "Aura Icons : Beautiful, Open Source Icons",
    description:
      "Beautiful, modern, and open-source icons — perfectly crafted for React and Next.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/og-image.png" />
        <meta property="twitter:image" content="/og-image.png" />
        {/* Add other meta tags like title, description, etc. */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
