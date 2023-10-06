import React from 'react';
import { testAboutData } from '@/data/data';
import Image from 'next/image';

const page = () => {
  const testDataJimmy = testAboutData.find((data) => data.title == 'Jimmy');

  return (
    <div className="text-white bg-[#2A2A3B] p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              {testDataJimmy?.title}
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2">
            <p>{testDataJimmy?.text}</p>
          </div>
        </div>
        <section className="">
          <div className="px-6 py-10 mx-auto">
            <div className="lg:-mx-6 lg:flex lg:items-center">
              <Image
                className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
                src="/munk.jpeg"
                alt="munk"
                width={500}
                height={500}
              />

              <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl ">
                  My Journey as a Buddhist Monk in Thailand
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                  I had a unique experience during my time as a monk in
                  Thailand, which left a lasting impact on my life. I found
                  myself at two distinct types of temples, one nestled within
                  the bustling city and the other hidden deep within the
                  tranquil forest. The reason behind this spiritual journey was
                  deeply rooted in Thai culture; it&apos;s a tradition for boys
                  with at least one parent from Thailand to seek ordination as a
                  monk. It&apos;s a way for us to apologize to our parents for
                  any pain we might have caused them throughout the years and to
                  express our heartfelt gratitude for the sacrifices
                  they&apos;ve made on our behalf.
                </p>
              </div>
            </div>
          </div>
          <div className="columns-1 lg:columns-2 xl:columns-3 p-6 [&>img:not(:first-child)]:mt-4">
            <Image
              alt=""
              src={'/fest_flak.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/klipper.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/quote1.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/rakar.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/bilflak.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/svarfar.jpeg'}
              width={500}
              height={500}
              className="w-full"
              objectFit="test"
            />
            <Image
              alt=""
              src={'/quote3.jpeg'}
              width={500}
              height={500}
              className="w-full"
              objectFit="test"
            />
            <Image
              alt=""
              src={'/tempel.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/hus.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/rakning.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/quote2.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/far_mat.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/ata.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
            <Image
              alt=""
              src={'/munk.jpeg'}
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </section>
        <section>
          2. My Path to Graduation in 2019: A Tech Enthusiast with a Purpose In
          2017, I embarked on an educational journey that led me to graduate in
          2019. I chose this path not only because I believe it&apos;s the
          future but also because I yearned to work on applications that could
          truly make a difference for each user. I was motivated by a desire to
          solve real-world problems, whether it was simplifying the process of
          moving from point A to point B or being a part of a solution that
          addresses the environmental challenges we face today. Technology, to
          me, is a tool for creating positive change.
        </section>
        <section>
          3. Balancing Life: From the Outdoors to Family and Friends In my
          private life, I find solace in the great outdoors. There&apos;s
          nothing quite like setting up my 4-season tent in the midst of a
          winter wilderness and simply being one with nature. I also have a
          passion for calisthenics, pushing my physical limits to achieve
          personal growth. Taking cold baths when the opportunity arises is
          another invigorating pursuit. However, my heart belongs to my family,
          which includes my wife and two older children. They are my anchor, and
          I relish every moment spent with them. And when they&apos;ve had their
          fill of my company, I cherish the times I spend with friends, often
          meeting up at a restaurant for a hearty burger and a refreshing beer.
          It&apos;s in these moments that I truly appreciate the balance of my
          life, from introspective solitude to the joy of companionship.
        </section>
      </div>
    </div>
  );
};

export default page;
