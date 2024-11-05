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
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://risemetalband.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rise Official Website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://risemetalband.com" />
        <meta property="twitter:url" content="https://risemetalband.com" />
        <meta name="twitter:title" content="Rise band - official website" />
        <meta name="twitter:description" content="Web oficial de la banda Rise. Obtén información sobre nuestros próximos álbumes y eventos o cómprate algo de la banda." />
        <meta name="twitter:image" content="/og-image.png" />

      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
