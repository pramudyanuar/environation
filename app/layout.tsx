// app/layout.tsx

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from 'next/font/local'; // FIXED: Import localFont
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ENVIRONATION 2025 - Kompetisi Nasional Lingkungan",
  description: "Kompetisi Nasional untuk Generasi Muda Peduli Lingkungan. LKTI dan Enviro Business Competition untuk masa depan berkelanjutan.",
  keywords: ["environation", "kompetisi lingkungan", "LKTI", "business competition", "sustainability", "environment"],
};

// Setup for the default sans-serif font
const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

// FIXED: Setup for the local custom font
const whyteInktrap = localFont({
  src: './fonts/WhyteInktrap-Regular.ttf',
  display: 'swap',
  variable: '--font-whyte-inktrap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* FIXED: Added the whyteInktrap variable to the body */}
      <body className={`${geistSans.variable} ${whyteInktrap.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}