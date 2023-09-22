import urlFor from '@/sanity/urlFor';
import Image from 'next/image';

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className=" object-contain"
            src={urlFor(value).url()}
            alt=""
            fill
          />
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }: any) => (
      <span className="text-xl font-bold">{children}</span>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
  },
  block: {
    normal: ({ children }: any) => <p className="text-xl">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-orange-600 border-l-2 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
};
