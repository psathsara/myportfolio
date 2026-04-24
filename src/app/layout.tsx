import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import TrackingScript from "@/components/tracking-script";
import FontLoader from "@/components/font-loader";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/magicui/spotlight";
import ScrollProgress from "@/components/magicui/scroll-progress";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Software Engineer | Startup Founder | AI/ML & Automation Specialist`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.name} is a Software Engineer and Startup Founder at Pazzy, specializing in AI/ML integration, workflow automation with n8n/Make.com, and full-stack development.`,
  keywords: [
    DATA.name,
    "Software Engineer",
    "Startup Founder",
    "Full-Stack Developer",
    "AI/ML Integration",
    "Automation Specialist",
    "Next.js Developer",
    "n8n",
    "Make.com",
    "Pazzy"
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    title: `${DATA.name} - Software Engineer | Startup Founder | AI/ML & Automation Specialist`,
    description: `Portfolio of ${DATA.name}, Software Engineer and Startup Founder specializing in AI/ML and Automation.`,
    url: DATA.url,
    siteName: `${DATA.name} - Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 1200,
        height: 630,
        alt: `${DATA.name} Portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - Software Engineer | Startup Founder`,
    description: `Portfolio of ${DATA.name}, Software Engineer and Startup Founder specialization in AI/ML and Automation.`,
    images: [DATA.avatarUrl],
    creator: "@psathsara",
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
  category: "technology",
  classification: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto px-6",
          fontSans.variable
        )}
      >
        {/* Font loader */}
        <FontLoader />

        {/* AgentKong pixel tracking script */}
        <TrackingScript />

        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>

        <Spotlight />
        <ScrollProgress />
      </body>
    </html>
  );
}
