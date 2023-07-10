import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

type Props = {
  url: string;
  linkText: string;
  headingText: string;
};

const SectionHeading = ({ url, linkText, headingText }: Props) => {
  return (
    <div className="text-white flex justify-between border-b border-[#2e3237] mb-12 mt-20 pb-4">
      <p className="font-bold text-md text-[#babdc5]">{headingText}</p>
      <Link
        href={url}
        className="flex text-sm text-[#828996] items-center cursor-pointer"
      >
        {linkText}
        <ArrowLongRightIcon className="h-4 w-4 ml-1" />
      </Link>
    </div>
  );
};

export default SectionHeading;
