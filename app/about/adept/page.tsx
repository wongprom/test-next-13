'use client';
import React, { useState } from 'react';
import Accordion from '../components/Accordion';
/**
 * ! create <Accordion /> that contains <AccordionItems />
 *
 */

type ListType = {
  question: string;
  answer: string;
};

const Page = () => {
  const [list, setList] = useState<ListType[]>([
    {
      question: 'Whats your name?',
      answer: 'My name is Jimmy',
    },
    {
      question: 'Whats your age?',
      answer: 'I am 41',
    },
  ]);
  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 list">
        {list.map((item, index) => (
          <Accordion key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
