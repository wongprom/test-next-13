'use client';
import React from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document file="cv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          pageNumber={pageNumber}
        />
      </Document>
    </div>
  );
};

export default PdfViewer;
