'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const PdfView = dynamic(() => import('@/components/pdfView/PdfView')
  .then(mod => mod.default), {
  ssr: false,
  loading: () => <div className='w-full max-w-screen-sm mx-auto h-[800px] bg-gray-400 animate-pulse my-10' />
});

export type PdfPageProps = {
  title: ReactNode;
  file: string;
}

export function PdfPage({ title, file }: PdfPageProps) {
  return (
    <main className="mt-5">
      <h1 className='text-center text-3xl font-bold tracking-tighter pt-16 pb-8'>{title}</h1>
      <PdfView pdfFile={file} />
    </main>
  );
}
