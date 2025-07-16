import type { Metadata } from "next";
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
    images: [
      {
        url: "/ogImage.png", // Path to your Open Graph image in the public directory
        width: 1200,
        height: 630,
        alt: "Aura Icons Preview Image",
      },
    ],
    siteName: "Aura Icons",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Icons : Beautiful, Open Source Icons",
    description:
      "Beautiful, modern, and open-source icons — perfectly crafted for React and Next.js.",
    images: ["/ogImage.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
