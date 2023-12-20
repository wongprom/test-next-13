'use client';
import { GET_QUOTES } from '@/app/api/graphql/queries';
import { useQuery } from '@apollo/client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './shadcn/ui/card';
import { QuoteIcon } from 'lucide-react';
import { Author, Quote } from '@/types/types';

/**
 * info if (!data) return <p>return SKELETON...</p>;
 *
 */

const Quotes = () => {
  const { data } = useQuery(GET_QUOTES);
  if (!data) return <p>return SKELETON...</p>;

  return (
    <div className=" columns-1 lg:columns-2 xl:columns-3 ">
      {data.quotes.map((quote: Quote) => (
        <Card
          key={quote.id}
          className="my-4 first-of-type:my-0 group hover:dark hover:scale-105 break-inside-avoid-column"
        >
          <CardHeader>
            <QuoteIcon />
          </CardHeader>
          <CardContent className="pb-0">
            <em>{quote.quote}</em>
          </CardContent>
          <CardFooter className="justify-end">
            <CardDescription className="">
              {quote.author.length === 0
                ? ''
                : quote.author.map((writer: Author, index: number) => (
                    <em key={index}>- {writer.name}</em>
                  ))}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Quotes;
