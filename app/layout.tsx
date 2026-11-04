import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/hooks/AuthProvider';
import { Navbar } from '@/components/layout/Navbar';
import { PageTracker } from '@/components/analytics/PageTracker';

export const metadata: Metadata = {
  title: { default: 'Ganitopia · Class 9 Math & Science', template: '%s | Ganitopia' },
  description:
    'Interactive Class 9 Mathematics and Science learning platform. 14 Math chapters, 13 Science chapters, 500+ questions with animated concept labs.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://ganitopia.pages.dev'
  ),
  openGraph: {
    title: 'Ganitopia · Class 9 Math & Science',
    description:
      'Interactive learning platform for Class 9 students. Har concept, ek prayog.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&family=STIX+Two+Text:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <PageTracker />
        </AuthProvider>
      </body>
    </html>
  );
}
