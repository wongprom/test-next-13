import { testCertificates } from '../../../../data/data';
import React from 'react';

export const dynamicParams = false;

export type Certificate = {
  slug: string;
  title: string;
  subTitle: string;
  infoText: string;
};

export async function generateStaticParams() {
  const allCert = testCertificates;

  return allCert.map((cert) => ({
    slug: cert.slug,
  }));
}
const CertificatePage = ({ params }: { params: Certificate }) => {
  const { slug } = params;
  return (
    <div className="text-white">
      <p className="text-4xl ">CertificatePage</p>
      <p>Param slug: {slug}</p>
    </div>
  );
};

export default CertificatePage;
