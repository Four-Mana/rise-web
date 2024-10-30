import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rise metal',
  description: 'Web oficial de la banda Rise. Obtén información sobre nuestros próximos álbumes y eventos o cómprate algo de la banda.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
