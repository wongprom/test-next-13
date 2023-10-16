import AboutCard from '@/components/AboutCard';
import { testEpigramData } from '@/data/data';
import React from 'react';

const EpiGramPage = () => {
  return (
    <div className="text-white p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              EpiGram
            </h1>
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
        <section className="w-full">
          <div className=" py-24 mx-auto">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {testEpigramData.map((item) => (
                <AboutCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  href={'#'}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    // <div className="text-white text-4xl grid gap-10">
    //   <div>
    //     Some hello text like, This route get information from Supabase DB with
    //     help of GraphQL
    //   </div>
    //   <div>
    //     <h1>Display all epigrams</h1>
    //   </div>
    //   <button>
    //     button to access Modal add new quote, Before Modal popups, Clerk auth
    //     will do a check, OK ? Modal form popups : denied
    //   </button>
    // </div>
  );
};

export default EpiGramPage;
