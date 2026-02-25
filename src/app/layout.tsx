import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Imran | Portfolio",
  description: "Full-stack developer portfolio showcasing projects, skills, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900`}
      >
        <PageTransition />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
