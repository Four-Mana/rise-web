'use client';

import { FC } from 'react';

type PdfProps = {
  pdfPath: string;
}

export const PdfViewer: FC<PdfProps> = ({ pdfPath }) => { 
  return (
    <div className="flex flex-col h-full w-full ml-0">
      <iframe
        src={pdfPath} 

      />
    </div>
  );
};

