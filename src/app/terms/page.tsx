// page.tsx
'use client';

import dynamic from 'next/dynamic';

const PdfView = dynamic(() => import('@/components/pdfView/PdfView').then(mod => mod.default), { ssr: false });

export default function Home() {
  return (
    <main className="mt-10">
      
        <PdfView pdfFile="/assets/terms&conditions.pdf" /> 

    </main>
  );
}
