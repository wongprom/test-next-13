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
  CardTitle,
} from './shadcn/ui/card';
import { QuoteIcon } from 'lucide-react';

type Quote = {};

const Quotes = () => {
  const { data } = useQuery(GET_QUOTES);
  if (!data) return <p>return SKELETON...</p>;

  return (
    <div className="columns-1 lg:columns-2 xl:columns-3 ">
      {data.quotes.map((quote: any) => (
        <Card
          key={quote.id}
          className="my-4 first:my-0 break-inside-avoid-column"
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
                : quote.author.map((writer: any, index: any) => (
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
