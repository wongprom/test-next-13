import PdfViewer from '@/components/pdf-viewer';

const CvPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 p-8">
      <div className="flex flex-col sm:flex-row">
        <h1 className="w-full text-4xl font-bold  pr-8 lg:w-1/3 text-[#e5e6e9]">
          Resume
        </h1>
        <p className="mt-2 lg:w-2/3 tracking-wide leading-8 text-[#babdc5]">
          Embark on a journey through my CV, a tapestry woven with diverse
          experiences and fueled by passion. For an optimal experience, ensure
          you&apos;re viewing it on a larger screen, where my story unfolds
          pixel by pixel. Join me in celebrating the art of storytelling, where
          every detail shines on the grand canvas of possibility.
        </p>
      </div>
      <div className="mt-16">
        <PdfViewer />
      </div>
    </div>
  );
};

export default CvPage;
