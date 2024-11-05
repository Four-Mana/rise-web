import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rise band - official website',
  description: 'Web oficial de la banda Rise. Obtén información sobre nuestros próximos álbumes y eventos o cómprate algo de la banda.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Rise band - official website" />
        <meta property="og:description" content="Web oficial de la banda Rise. Obtén información sobre nuestros próximos álbumes y eventos o cómprate algo de la banda." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/7f78487d-d7fa-42f8-a0ae-be45f40bcd98.png?token=bnS6OGDTlP6g8rZ8YdDdQL_MeFPuAVltpOAOvm97bhU&height=1200&width=1200&expires=33266831321" />
        <meta property="og:url" content="https://risemetalband.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rise Official Website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://risemetalband.com" />
        <meta property="twitter:url" content="https://risemetalband.com" />
        <meta name="twitter:title" content="Rise band - official website" />
        <meta name="twitter:description" content="Web oficial de la banda Rise. Obtén información sobre nuestros próximos álbumes y eventos o cómprate algo de la banda." />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/7f78487d-d7fa-42f8-a0ae-be45f40bcd98.png?token=bnS6OGDTlP6g8rZ8YdDdQL_MeFPuAVltpOAOvm97bhU&height=1200&width=1200&expires=33266831321" />

      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
