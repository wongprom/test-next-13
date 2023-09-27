import { PortableTextBlock } from 'sanity';

export type Certificate = {
  _id: string;
  _createdAt: Date;
  title: string;
  subTitle: string;
  url: string;
  image: string;
  slug: string;
  infoText: PortableTextBlock[];
  alt: string;
};
