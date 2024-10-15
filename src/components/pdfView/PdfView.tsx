'use client';

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

interface PdfViewProps {
  pdfFile: string;
}

export const PdfView = ({ pdfFile }: PdfViewProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const onLoadSuccess = (pdf: { numPages: number }) => {
    setNumPages(pdf.numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prevPage => Math.min(prevPage + 1, numPages!));
  };


  return (
    <>
      {error && <div className="text-red-600 mb-10">{error}</div>}

      <div className='flex flex-col min-h-screen items-center justify-center overflow-hidden py-10'>
        <Document
          file={pdfFile}
          onLoadSuccess={onLoadSuccess}
          onLoadError={error => setError(`Error loading PDF: ${error.message}`)}
        >
          <Page pageNumber={pageNumber} scale={1.1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>

        {
          numPages && (
            <div className="flex gap-2 items-center w-fit pt-6">
              {pageNumber > 1 && <button className='w-24 font-bold px-2 py-1 bg-primary-500 hover:bg-primary-200 text-neutral-800 rounded-sm' onClick={goToPrevPage}>Previous</button>}
              <span className='px-8'>Page {pageNumber} of {numPages}</span>
              {pageNumber !== numPages && <button className='w-24 font-bold px-2 py-1 bg-primary-500 hover:bg-primary-200 text-neutral-800 rounded-sm' onClick={goToNextPage} >Next</button>}
            </div>
          )
        }
      </div >
    </>
  );
};

export default PdfView;
