import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Tools Dashboard - Discover the Best AI Tools',
  description: 'Curated collection of the best AI tools across categories including text, image, video, code, and more. Find the perfect AI tool for your needs.',
  keywords: ['AI tools', 'artificial intelligence', 'ChatGPT', 'Midjourney', 'AI assistants', 'machine learning'],
  authors: [{ name: 'AI Tools Dashboard' }],
  openGraph: {
    title: 'AI Tools Dashboard - Discover the Best AI Tools',
    description: 'Curated collection of the best AI tools across categories',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
