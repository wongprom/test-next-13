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
import { InfoIcon, QuoteIcon } from 'lucide-react';
import { Author, Quote } from '@/types/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './shadcn/ui/tooltip';
import Link from 'next/link';
import ClientSideLink from './ClientSideLink';

/**
 * info if (!data) return <p>return SKELETON...</p>;
 *
 */

const Quotes = () => {
  const { data } = useQuery(GET_QUOTES);
  if (!data) return <p>return SKELETON...</p>;

  return (
    <div className="relative columns-1 lg:columns-2 xl:columns-3 ">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="text-blue-300 absolute -top-9 right-0 ">
            <InfoIcon size={18} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">
              Quotes are retrieved from Supabase using apollo-client useQuery
              hook and displayed with Shadcn component library.{' '}
            </p>
            <ClientSideLink styles={'text-xs text-blue-500'} route="/projects">
              More info...
            </ClientSideLink>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
