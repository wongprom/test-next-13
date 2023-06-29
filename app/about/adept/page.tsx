'use client';
import { characterTestADEPT15 } from '@/data/data';
import React, { useState } from 'react';
import Accordion from '../components/Accordion';

/**
 * ! create <Accordion /> that contains <AccordionItems />
 *
 */

type ListType = {
  title: string;
  info: string[];
};

const Page = () => {
  const [list, setList] = useState<ListType[]>(characterTestADEPT15);
  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center p-5 ">
      <div className="flex flex-col gap-5 list max-h-screen overflow-y-auto no-scrollbar scroll-smooth">
        <p className="text-center">
          The text describes the results of a test that measures various
          personality traits. The test provides insight into different aspects
          of my personality and reveals my behavioral patterns and work style.
        </p>
        <p className="text-center">
          By understanding and reflecting on these results, I can become aware
          of my strengths and weaknesses and utilize them to improve my
          performance and adapt effectively to the work environment.
        </p>
        <div className="flex flex-col gap-4 items-center">
          {list.map((item, index) => (
            <Accordion key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
