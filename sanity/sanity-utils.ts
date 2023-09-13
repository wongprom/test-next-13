import { Certificate } from '@/types/types';
import { createClient, groq } from 'next-sanity';

export const getCertificates = (): Promise<Certificate[]> => {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    apiVersion: '2023-09-13',
    // useCdn: false,
  });

  return client.fetch(groq`*[_type == "certificate"]{
    _id,
    _createdAt,
    title,
    subTitle,
    infoText,
    "slug": slug.current,
    "image": image.asset == url,
    url,
  }`);
};
