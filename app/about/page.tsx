import AboutCard from '@/components/AboutCard';
import React from 'react';

const data = [
  {
    title: 'Jimmy',
    text: "This narrative recounts a diverse and meaningful life journey. It begins with a transformative experience as a Buddhist monk in Thailand, reflecting on the cultural tradition of seeking ordination to apologize to parents and express gratitude. The narrative then shifts to the author's educational journey, where they graduated in 2019, driven by a desire to create tech applications that solve real-world problems and contribute positively. Lastly, the author highlights their love for the outdoors, dedication to physical fitness through calisthenics, and the importance of family and friends in maintaining a balanced life.",
  },
  {
    title: 'Adept',
    text: 'The text describes the results of a test that measures various personality traits. The test provides insight into different aspects of my personality and reveals my behavioral patterns and work style. By understanding and reflecting on these results, I can become aware of my strengths and weaknesses and utilize them to improve my performance and adapt effectively to the work environment',
  },
  {
    title: 'Testimonials',
    text: "Discover a collection of inspiring testimonials I've received from my former colleagues and bosses.",
  },
  {
    title: 'Certificates',
    text: "Visit my certificate collection, where new qualifications magically appear like rabbits from a magician's hat – you never know what impressive trick I'll pull off next! Keep checking in, it's like unwrapping surprise gifts of expertise.",
  },
];

const about = () => {
  return (
    <div className="text-white bg-[#2A2A3B] p-0 sm:p-8">
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
        {/**  Section _____---------------------------------*/}

        <section className="w-full">
          <div className="px-5 py-24 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {data.map((item) => (
                <AboutCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        {/* <div className=" flex flex-col gap-7 bg-[#2A2A3B] max-w-screen-lg py-5 mt-5">
          Some other content gose here
        </div> */}
      </div>
    </div>
  );
};

export default about;
