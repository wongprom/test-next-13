import Image from 'next/image';
import React from 'react';
import { TestimonialType } from '../page';

type Props = {
  testimonial: TestimonialType;
};

const TestimonialCard = ({
  testimonial: { name, position, text, image },
}: Props) => {
  return (
    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div className="absolute w-full bg-[#222222] -z-10 md:h-96 rounded-2xl"></div>

      <div className="w-full p-6 bg-[#222222] md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 md:justify-evenly">
        <Image
          width={500}
          height={500}
          className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[28rem] md:w-52 xl:h-[36rem] xl:w-[26rem] md:rounded-2xl"
          src={image}
          alt="client photo"
        />

        <div className="mt-2 md:mx-6">
          <div>
            <p className="text-xl font-medium tracking-tight text-[#dddddd]">
              {name}
            </p>
            <p className="text-[#aaaaaa] ">{position}</p>
          </div>

          <p className="mt-4 text-lg italic leading-relaxed text-[#dddddd] xl:text-xl">
            &quot; {text} &quot;
          </p>
        </div>
      </div>
    </main>
  );
};

export default TestimonialCard;
