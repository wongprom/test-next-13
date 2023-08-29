'use client';
import React from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PrinterIcon } from '@heroicons/react/24/outline';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const handlerPrint = async () => {
    // printJS('cv.pdf');
    const printJS = (await import('print-js')).default;
    printJS('cv.pdf');
  };

  return (
    <Document
      file="cv.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      className="flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <button
          className="flex justify-center items-center p-4 text-[#23252a] cursor-pointer rounded-lg bg-[#e5e6e9] hover:text-[#e5e6e9] hover:bg-[#121316]"
          type="button"
          onClick={() => handlerPrint()}
        >
          <PrinterIcon className="mr-2 h-5 w-5" />
          Print CV
        </button>
      </div>
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
