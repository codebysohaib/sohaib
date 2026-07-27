import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codebysohaib.dev';

export const viewport: Viewport = {
  themeColor: '#0b0f19',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Sohaib Asif | Web & Native Android Developer",
    template: "%s | CodeBySohaib",
  },
  description:
    "Muhammad Sohaib Asif - Web & Native Android Developer. Building high-performance, accessible web applications and native Android apps with React, Next.js, Kotlin, and Jetpack Compose.",
  keywords: [
    "Muhammad Sohaib Asif",
    "Sohaib",
    "CodeBySohaib",
    "Web Developer",
    "Android Developer",
    "Native Android Developer",
    "Kotlin Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full Stack Developer",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Muhammad Sohaib Asif", url: siteUrl }],
  creator: "Muhammad Sohaib Asif",
  publisher: "CodeBySohaib",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Muhammad Sohaib Asif | Web & Native Android Developer",
    description:
      "Building high-performance, accessible web applications and native Android apps with React, Next.js, Kotlin, and Jetpack Compose.",
    url: siteUrl,
    siteName: "CodeBySohaib",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/profile.jpeg`,
        width: 1200,
        height: 630,
        alt: "Muhammad Sohaib Asif - Web & Android Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sohaib Asif | Web & Native Android Developer",
    description:
      "Building high-performance, accessible web applications and native Android apps with React, Next.js, Kotlin, and Jetpack Compose.",
    creator: "@codebysohaib",
    images: [`${siteUrl}/profile.jpeg`],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Sohaib Asif",
    alternateName: "Sohaib",
    url: siteUrl,
    image: `${siteUrl}/profile.jpeg`,
    jobTitle: "Web & Native Android Developer",
    worksFor: {
      "@type": "Organization",
      name: "CodeBySohaib",
    },
    sameAs: [
      "https://github.com/codebysohaib",
      "https://www.linkedin.com/in/muhammadsohaibasif/",
    ],
    knowsAbout: [
      "Web Development",
      "Android Development",
      "React",
      "Next.js",
      "TypeScript",
      "Kotlin",
      "Jetpack Compose",
      "Node.js",
      "Tailwind CSS",
    ],
    email: "mailto:codebysohaib@gmail.com",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodeBySohaib",
    url: siteUrl,
    publisher: {
      "@type": "Person",
      name: "Muhammad Sohaib Asif",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preconnect"
          href="https://pagead2.googlesyndication.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1808417838685807"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
