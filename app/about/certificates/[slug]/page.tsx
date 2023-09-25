import { PortableText } from '@portabletext/react';
import React from 'react';
import Image from 'next/image';
import { getCertificate, getCertificates } from '@/sanity/sanity-utils';
import { RichTextComponent } from '@/components/RichTextComponent';

//  export const revalidate = 86400; // 24 hours
export const revalidate = 60; // 24 hours
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
      <div className="max-w-screen-lg">
        {certificate?.image && (
          <div className="w-full flex items-center justify-center mb-8">
            <Image
              src={certificate.image}
              alt={certificate.alt}
              width="768"
              height="865"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        )}
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              {certificate?.title}
            </h1>
          </div>
          <div className="text-xl col-span-4 lg:col-span-3 mt-2">
            <PortableText
              value={certificate?.infoText}
              components={RichTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
