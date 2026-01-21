import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jerald | Full-Stack Developer",
    template: "%s | Jerald",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building beautiful, performant web applications.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Jerald" }],
  creator: "Jerald",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jerald | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
    siteName: "Jerald's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerald | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
