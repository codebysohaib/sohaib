import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientRevealInitializer from '@/components/ClientRevealInitializer';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
  title: 'Blog | CodeBySohaib',
  description: 'Articles, projects, tutorials, and development notes by Muhammad Sohaib Asif.',
  openGraph: {
    title: 'Blog | CodeBySohaib',
    description: 'Articles, projects, tutorials, and development notes by Muhammad Sohaib Asif.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      <ClientRevealInitializer />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '5rem' }}>
        <BlogClientPage />
      </main>
      <Footer />
    </>
  );
}
