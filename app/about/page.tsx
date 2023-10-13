import AboutCard from '@/components/AboutCard';
import { testAboutData } from '@/data/data';
import React from 'react';

const about = () => {
  return (
    <div className="text-white p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              About
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2">
            <p>
              The Inside Scoop on the Developer and Friend Welcome to the
              subdomains that reveal the multifaceted me – both as a developer
              and a friend. Here, I aim to offer you a sneak peek into the
              essence of who I am, whether as a trusted colleague or a buddy for
              life. This page isn&apos;t just about me; it&apos;s about
              cultivating a mutual understanding. Why? Because I truly believe
              in the magic of teamwork, where each member contributes their
              unique positive energy. It&apos;s about thriving together, both in
              the vibrant exchanges of ideas and in the warm camaraderie that
              makes work and life so fulfilling. So, let&apos;s dive in and
              uncover the intricacies of this dynamic persona!
            </p>
          </div>
        </div>
        <section className="w-full">
          <div className=" py-24 mx-auto">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {testAboutData.map((item) => (
                <AboutCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default about;
