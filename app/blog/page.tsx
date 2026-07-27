import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientRevealInitializer from '@/components/ClientRevealInitializer';
import BlogClientPage from './BlogClientPage';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codebysohaib.dev';

export const metadata: Metadata = {
  title: 'Blog & Articles',
  description: 'Technical articles, developer utilities, native Android tutorials, and web development insights by Muhammad Sohaib Asif.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'Blog & Articles | CodeBySohaib',
    description: 'Technical articles, developer utilities, native Android tutorials, and web development insights by Muhammad Sohaib Asif.',
    url: `${siteUrl}/blog`,
    type: 'website',
    siteName: 'CodeBySohaib',
    images: [
      {
        url: `${siteUrl}/profile.jpeg`,
        width: 1200,
        height: 630,
        alt: 'CodeBySohaib Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Articles | CodeBySohaib',
    description: 'Technical articles, developer utilities, native Android tutorials, and web development insights by Muhammad Sohaib Asif.',
    creator: '@codebysohaib',
    images: [`${siteUrl}/profile.jpeg`],
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'CodeBySohaib Blog',
    description: 'Technical articles, developer utilities, native Android tutorials, and web development insights by Muhammad Sohaib Asif.',
    url: `${siteUrl}/blog`,
    publisher: {
      '@type': 'Person',
      name: 'Muhammad Sohaib Asif',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <ClientRevealInitializer />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '5rem' }}>
        <BlogClientPage />
      </main>
      <Footer />
    </>
  );
}
