import type { Metadata } from "next";
import { Orbitron, Fira_Code, Righteous } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RootLayoutContent from "@/components/RootLayoutContent";
import NeuralAuroraBackground from "@/components/NeuralAuroraBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "0xJerry's Lab - Cybersecurity Research & HTB Writeups",
    template: "%s | 0xJerry's Lab"
  },
  description: "Expert cybersecurity research, penetration testing tutorials, and detailed Hack The Box writeups. Learn offensive security techniques, exploit development, and ethical hacking with 0xJerry's comprehensive guides.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "ethical hacking",
    "HTB writeups",
    "hack the box",
    "exploit development",
    "OSCP preparation",
    "red team",
    "vulnerability research",
    "infosec",
    "CTF writeups",
    "security research",
    "bug bounty",
    "reverse engineering",
    "malware analysis"
  ],
  authors: [{ name: "0xJerry", url: "https://0xjerry.jerome.co.in" }],
  creator: "0xJerry",
  publisher: "0xJerry's Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://0xjerry.is-a.dev",
    title: "0xJerry's Lab - Cybersecurity Research & HTB Writeups",
    description: "Expert cybersecurity research, penetration testing tutorials, and detailed Hack The Box writeups. Learn offensive security with comprehensive guides.",
    siteName: "0xJerry's Lab",
    images: [
      {
        url: "https://files.jerome.co.in/0xjerry.jpeg",
        width: 1200,
        height: 630,
        alt: "0xJerry's Lab - Cybersecurity Research Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "0xJerry's Lab - Cybersecurity Research & HTB Writeups",
    description: "Expert cybersecurity research, penetration testing tutorials, and detailed Hack The Box writeups.",
    images: ["https://files.jerome.co.in/0xjerry.jpeg"],
    creator: "@0xJerry",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Cybersecurity Education",
  alternates: {
    canonical: "https://0xjerry.is-a.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${orbitron.variable} ${firaCode.variable} ${righteous.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Global theme-aware animated background */}
        <NeuralAuroraBackground density={0.24} speed={0.9} trailAlpha={0.07} />
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5661675622272159"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Umami Analytics */}
<Script
  src="https://cloud.umami.is/script.js"
  data-website-id="f6696075-8457-4c24-b1f4-32665790a4d0"
  data-domains="0xjerry.jerome.co.in"
  strategy="afterInteractive"
/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5661675622272159"
     crossorigin="anonymous"></script>
<!-- Display1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5661675622272159"
     data-ad-slot="2973753515"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        
        {/* Ko-fi Widget */}
        <Script
          id="kofi-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
                script.onload = function() {
                  setTimeout(function() {
                    if (typeof kofiWidgetOverlay !== 'undefined') {
                      kofiWidgetOverlay.draw('andres__', {
                        'type': 'floating-chat',
                        'floating-chat.donateButton.text': 'Support me',
                        'floating-chat.donateButton.background-color': '#ff5f5f',
                        'floating-chat.donateButton.text-color': '#fff'
                      });
                    }
                  }, 1000);
                };
                document.head.appendChild(script);
              })();
            `
          }}
        />
        
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}
