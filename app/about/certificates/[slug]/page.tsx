import { testCertificates } from '../../../../data/data';
import React from 'react';
import Image from 'next/image';

export const dynamicParams = false;
export async function generateStaticParams() {
  const allCert = testCertificates;

  return allCert.map((cert) => ({
    slug: cert.slug,
  }));
}

export type Certificate = {
  slug: string;
};

const CertificatePage = ({ params }: { params: Certificate }) => {
  const { slug } = params;
  console.log('🚀 ~ file: page.tsx:20 ~ CertificatePage ~ slug:', slug);
  return (
    <div className="flex flex-col items-center justify-center text-white bg-[#2A2A3B] p-0 sm:p-8 ">
      <div className=" max-w-screen-lg">
        <div className="w-full flex items-center justify-center mb-8">
          <Image
            src={'/hlr.png'}
            alt="certificate"
            width="768"
            height="865"
            priority={true}
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
      </div>
    </div>
  );
};

export default CertificatePage;
