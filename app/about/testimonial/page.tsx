import React from 'react';
import TestimonialCard from './components/TestimonialCard';

const page = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="max-w-6xl px-6 py-10 max-h-screen overflow-y-auto no-scrollbar scroll-smooth">
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          What collegies saying
        </h1>
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default page;
