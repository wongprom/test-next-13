import CertificateCard from '@/components/CertificateCard';
import { testCertificates } from '@/data/data';

const CertificatesPage = () => {
  return (
    <div className="text-white bg-[#2A2A3B] p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              Certificates
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2">
            <p>
              Visit my certificate collection, where new qualifications
              magically appear like rabbits from a magician&apos;s hat – you
              never know what impressive trick I&apos;ll pull off next! Keep
              checking in, it&apos;s like unwrapping surprise gifts of
              expertise.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-7 bg-[#2A2A3B] max-w-screen-lg py-5 mt-5">
          {testCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.slug}
              slug={certificate.slug}
              subTitle={certificate.subTitle}
              infoText={certificate.infoText}
              title={certificate.title}
            />
          ))}
          <div className="border-8 border-[#F09666] absolute top-0 right-36 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
