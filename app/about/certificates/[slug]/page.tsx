// import { testCertificates } from '../../../../data/data';
import React from 'react';
import Image from 'next/image';
import { getCertificate, getCertificates } from '@/sanity/sanity-utils';

// export const dynamicParams = false;
export async function generateStaticParams() {
  const certificates = await getCertificates();

  return certificates.map((certificate) => {
    return {
      slug: certificate.slug,
    };
  });
}

export type Certificate = {
  slug: string;
};

const CertificatePage = async ({ params }: { params: Certificate }) => {
  const { slug } = params;
  const certificate = await getCertificate(slug);

  return (
    <div className="flex flex-col items-center justify-center text-white bg-[#2A2A3B] p-0 sm:p-8 ">
      <p>id: {certificate._id}</p>
      <p>title: {certificate.title}</p>
      {/* <div className=" max-w-screen-lg">
        <div className="w-full flex items-center justify-center mb-8">
          <Image
            src={'/hlr.png'}
            alt="certificate"
            width="768"
            height="865"
            // priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              Certificates
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2">
            <p className="text-xl">
              Visit my certificate collection, where new qualifications
              magically appear like rabbits from a magician&apos;s hat – you
              never know what impressive trick I&apos;ll pull off next! Keep
              checking in, it&apos;s like unwrapping surprise gifts of
              expertise.
            </p>
          </div>
        </div>

        <p>some thing</p>
      </div> */}
    </div>
  );
};

export default CertificatePage;
