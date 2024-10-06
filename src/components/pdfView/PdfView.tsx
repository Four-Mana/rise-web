'use client';

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import '../../app/pdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs';

interface PdfViewProps {
  pdfFile: string;
}

const PdfView: React.FC<PdfViewProps> = ({ pdfFile }) => {
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
    <div className="pdf-view-container">
      {error && <div className="error-message">{error}</div>}
      <Document
        file={pdfFile}
        onLoadSuccess={onLoadSuccess}
        onLoadError={error => setError(`Error loading PDF: ${error.message}`)} 
      >
        <Page pageNumber={pageNumber} scale={1.1} />

      </Document>
      {numPages && (
        <div className="pagination">
          <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Previous</button>
          <span>Page {pageNumber} of {numPages}</span>
          <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
        </div>
      )}
      <div className="download-button">
        <a href={pdfFile} download className="download-link">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default PdfView;
