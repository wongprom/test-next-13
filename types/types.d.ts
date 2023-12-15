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

export type Quote = {
  id: string;
  author: [];
  quote: string;
  __typename: string;
};

export type Author = {
  __typename: string;
  name: string;
};
