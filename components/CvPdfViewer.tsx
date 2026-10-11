'use client';

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('./PdfViewer'), {
  ssr: false,
});

const CvPdfViewer = () => {
  return <PdfViewer />;
};

export default CvPdfViewer;
