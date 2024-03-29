import { SignInButton, UserButton, auth } from '@clerk/nextjs';
import React from 'react';
import Quotes from '@/components/Quotes';
import SectionHeading from '@/components/SectionHeading';
import LifeLessons from '@/components/LifeLessons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import ClientSideLink from '@/components/ClientSideLink';

const EpiGramPage = () => {
  const { userId }: { userId: string | null } = auth();
  return (
    <div className="text-white p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              EpiGram
            </h1>
            <div className="h-full mt-4 flex flex-col items-center sm:flex-row sm:items-start lg:items-end">
              {/* <SignInButton mode="modal" redirectUrl="/projects/epigram/add">
                <button className="p-4 max-w-xs bg-[#23252a] cursor-pointer rounded-lg text-[#e5e6e9]">
                  Add epigram
                </button>
              </SignInButton> */}
              {userId === null ? (
                <SignInButton mode="modal" redirectUrl="/projects/epigram/add">
                  <button className="p-4 max-w-xs bg-[#23252a] cursor-pointer rounded-lg text-[#e5e6e9]">
                    Add epigram
                  </button>
                </SignInButton>
              ) : (
                <ClientSideLink route="/projects/epigram/add">
                  {' '}
                  <button className="p-4 max-w-xs bg-[#23252a] cursor-pointer rounded-lg text-[#e5e6e9]">
                    Add epigram
                  </button>
                </ClientSideLink>
              )}
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2 flex gap-4 flex-col">
            <p>
              Welcome to this cozy hub of wisdom and inspiration! Here,
              you&apos;ll discover handpicked quotes and some life lessons that
              I believe can add a touch of positivity to your day. All these
              quotes are stored in the Supabase database, and I&apos;m using
              GraphQL to retrieve this treasure trove of wisdom.
            </p>{' '}
            <p>
              {' '}
              <span className="font-extrabold text-[#bbbbbb]">
                Quotes Galore:{' '}
              </span>
              I&apos;ve gathered some amazing quotes: ; that have struck a chord
              with me. They span various life aspects, personal growth, and
              feel-good vibes.{' '}
              <span className="font-extrabold text-[#bbbbbb]">
                Life Nuggets:{' '}
              </span>
              These are little nuggets of wisdom that I&apos;ve come across on
              my journey. They&apos;re like handy life hacks to help you
              navigate life&apos;s twists and turns.{' '}
              <span className="font-extrabold text-[#bbbbbb]">
                Reflect & Connect:{' '}
              </span>{' '}
              I encourage you to take a moment each day to think about these
              quotes and life nuggets. Consider how they fit into your life and
              how they can make it even better.{' '}
              <span className="font-extrabold text-[#bbbbbb]">
                Give It a Shot:{' '}
              </span>
              Personal growth isn&apos;t about huge leaps; it&apos;s about
              small, consistent steps. So, why not select three of these lessons
              and try incorporating them into your daily routine? You might be
              pleasantly surprised!
            </p>{' '}
            <p className="italic">
              Life is a journey, and I&apos;m here to sprinkle a bit of extra
              joy into it. So, take it easy, go at your own pace, and savor
              every moment. I hope you find something special here to brighten
              your day and enhance your life. Enjoy the ride!
            </p>
          </div>
        </div>
        <section className="relative">
          <SectionHeading headingText={'Quotes'} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-blue-300 absolute top-12 right-0 ">
                <InfoIcon size={18} />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Quotes are retrieved from Supabase using apollo-client
                  useQuery hook and displayed with Shadcn component library.{' '}
                </p>
                <ClientSideLink
                  styles={'text-xs text-blue-500'}
                  route="/projects"
                >
                  More info...
                </ClientSideLink>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Quotes />
        </section>
        <section className="relative">
          <SectionHeading headingText={'Life Lessons'} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-blue-300 absolute top-12 right-0 ">
                <InfoIcon size={18} />
              </TooltipTrigger>
              <TooltipContent sideOffset={9}>
                <p className="max-w-xs">
                  Life Lessons are retrieved from Supabase using apollo-client
                  useQuery hook and displayed with Shadcn component library.{' '}
                </p>
                <ClientSideLink
                  styles={'text-xs text-blue-500'}
                  route="/projects"
                >
                  More info...
                </ClientSideLink>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <LifeLessons />
        </section>
      </div>
    </div>
  );
};

export default EpiGramPage;
