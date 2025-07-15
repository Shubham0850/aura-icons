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
