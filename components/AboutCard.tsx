import React from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline';

export type Props = {
  title: string;
  text: string;
};
export const AboutCard = ({ title, text }: Props) => {
  return (
    <div className="">
      <div className="group border border-gray-100 p-6 rounded-lg hover:bg-white hover:border-transparent hover:text-[#2A2A3E]">
        <div className="inline-flex items-center justify-center rounded-full mb-4 border-2 p-1 group-hover:border-[#2A2A3E]">
          <PuzzlePieceIcon height={26} width={26} />
        </div>
        <h2 className="text-lg font-medium title-font group-hover:font-semibold mb-2">
          {title}
        </h2>
        <p className="leading-relaxed line-clamp-4 md:line-clamp-2 text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
