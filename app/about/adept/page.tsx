'use client';
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
  const [list, setList] = useState<ListType[]>([
    {
      title: 'Målmedvetenhet',
      info: [
        'Fokuserad på att slutföra arbetet och att de strävar efter att lyckas - så länge målen är tydligt identifierade och inom räckhåll',
        'Villiga att acceptera och leverera bra, men inte perfekta, resultat för att få saker slutförda',
        'I allmänhet villiga att prioritera om vid motgångar i arbetet',
        'Att de oftast slutför arbetet i tid',
      ],
    },
    {
      title: 'Struktur',
      info: [
        'Att de vanligtvis kan fokusera både på detaljer och helhet',
        'Att de kan att ta sig an uppgifter på ett metodiskt och planerat sätt när det behövs',
        'Att de föredrar att vara organiserade, men brukar vara mindre organiserade under stressiga perioder',
        'Att de kan ta fram strukturerade planer när det finns behov för det',
      ],
    },
  ]);
  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center p-5 ">
      <div className="flex flex-col gap-5 list">
        {list.map((item, index) => (
          <Accordion key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
