'use client';

import dynamic from 'next/dynamic';

const PdfView = dynamic(() => import('@/components/pdfView/PdfView')
  .then(mod => mod.default), {
  ssr: false,
  loading: () => <div className='w-full max-w-screen-sm mx-auto h-[800px] bg-gray-400 animate-pulse my-10' />
});

export default function Home() {
  return (
    <main className="mt-5">
      <h1 className='text-center text-3xl font-bold tracking-tighter pt-16 pb-8'>Cookies</h1>
      <PdfView pdfFile="/assets/cookies.pdf" />

    </main>
  );
}