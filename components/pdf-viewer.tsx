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
    <Document
      file="cv.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      className="flex justify-center"
    >
      <div>
        <Page
          className="hidden sm:flex"
          renderTextLayer={false}
          renderAnnotationLayer={false}
          pageNumber={pageNumber}
          width={500}
          height={400}
        />
      </div>
    </Document>
  );
};

export default PdfViewer;
