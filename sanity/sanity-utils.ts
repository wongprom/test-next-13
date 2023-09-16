import { Certificate } from '@/types/types';
import { groq } from 'next-sanity';
import { client } from './sanity-client';

export const getCertificates = (): Promise<Certificate[]> => {
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
