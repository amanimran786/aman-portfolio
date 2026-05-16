import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParticleField from "@/components/ParticleField";
import ThemeProvider from "@/components/ThemeProvider";
import { PORTFOLIO_SITE_URL } from "@/lib/links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Aman Imran | AI Safety & Software Portfolio";
const siteDescription =
  "Security, Trust & Safety, and AI-focused professional working across incident response, abuse detection, SQL/Python investigations, and detection systems.";

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_SITE_URL),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Aman Imran" }],
  keywords: [
    "Trust & Safety",
    "AI Safety",
    "Security",
    "Incident Response",
    "Abuse Detection",
    "SQL",
    "Python",
    "Software Engineer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: PORTFOLIO_SITE_URL,
    siteName: "Aman Imran Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        style={{ background: 'var(--background)' }}
      >
        <ThemeProvider>
          <PageTransition />
          <ParticleField />
          <Navigation />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
