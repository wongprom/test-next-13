'use client';

import React from 'react';
import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';

type Props = {
  data: {
    title: string;
    info: string[];
    active?: number;
  };
};

const Accordion = ({ data }: Props) => {
  const defaultValue = data.active === 1 ? 'item-1' : undefined;

  return (
    <AccordionRoot
      type="single"
      collapsible
      defaultValue={defaultValue}
      className="w-full max-w-2xl"
    >
      <AccordionItem
        value="item-1"
        className="border border-white rounded-md bg-[#666666] text-white px-5 data-[state=open]:bg-white data-[state=open]:text-[#666666]"
      >
        <AccordionTrigger className="py-5 text-left hover:no-underline data-[state=open]:font-extrabold data-[state=open]:text-2xl data-[state=open]:underline">
          {data.title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 pt-0 pb-4 text-[#666666] md:text-lg">
          {data.info.map((inf, index) => (
            <p key={index}>{inf}</p>
          ))}
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export default Accordion;
