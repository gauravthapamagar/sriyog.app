import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ClientFooter from "@/components/ClientFooter";
import '@fortawesome/fontawesome-free/css/all.min.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Download SRIYOG App",
  description: "Nepal's Largest Professional Network",
  icons:"/images/apple-icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.ico/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.ico/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.ico/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico/favicon-16x16.png" />
      </head>
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
>
  <div className="flex-grow flex flex-col">
    <Header />

    {/* Main content with consistent horizontal padding */}
    {/* <main className="flex-grow min-h-0 overflow-auto px-6 md:px-12"> */}
    <main className="flex-1">
      {children}
    </main>
    {/* </main> */}

    {/* For footer and footer bottom, also apply horizontal padding to content only */}
      <ClientFooter/>
  </div>
</body>
    </html>
  );
}
