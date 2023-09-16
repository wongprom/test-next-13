import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react';
import { PortableTextBlock } from 'sanity';

type Props = {
  slug: string;
  subTitle: string;
  infoText: PortableTextBlock[];
  title: string;
};

const CertificateCard = ({ slug, subTitle, infoText, title }: Props) => {
  return (
    <div className="bg-[#2E2E41] min-w-min text-slate-50 rounded-lg p-6 max-w-sm odd:self-end shadow-xl z-10">
      <div className="sm:flex justify-between items-center">
        <p className="capitalize pb-1">{title}</p>
        <p className=" text-[#CD835F] text-xs">{subTitle}</p>
      </div>
      <div className="line-clamp-2">
        <PortableText value={infoText} />
      </div>
      <Link className="" href={`/about/certificates/${slug}`}>
        <button className="px-6 py-4 bg-[#F09666] text-xs mt-4 text-white rounded-sm hover:text-[#F09666] hover:bg-white">
          View Certificate
        </button>
      </Link>
    </div>
  );
};

export default CertificateCard;
