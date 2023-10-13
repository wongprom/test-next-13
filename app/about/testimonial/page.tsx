import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import { testimonials } from '../../../data/data';

export type TestimonialType = {
  name: string;
  image: string;
  position: string;
  text: string;
};

const page = () => {
  return (
    <section className="h-screen">
      <div className="max-w-6xl px-6 py-10 max-h-screen overflow-y-auto no-scrollbar scroll-smooth">
        <h1 className="text-2xl font-semibold text-[#dddddd] capitalize lg:text-3xl">
          What colleagues saying
        </h1>
        {testimonials.map((testimonial: TestimonialType) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default page;
