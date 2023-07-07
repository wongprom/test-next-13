import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { alegreya } from './fonts/fonts';

export default function Home() {
  return (
    <section className=" bg-[#1c1d21] p-8 md:px-16 rounded-xl">
      <div>
        <h1
          className={`${alegreya.className} text-2xl font-bold leading-normal text-[#e5e6e9]`}
        >
          Hey, I'm Jimmy - a frontend developer with a passion for backend
          development as well. Living in the beautiful city of Stockholm, I
          thrive on being involved in every aspect of a project, from design to
          deploiment.
        </h1>
        <p className="text-[#babdc5] mt-6">
          Welcome to my personal website, a cozy corner of the internet that
          I've crafted exclusively for sharing my interests and passions with
          fellow enthusiasts. Here, I can freely express myself without the
          constraints of social media algorithms or adhering to any predefined
          rules. Feel free to wander through my digital living room, and I
          sincerely hope that you derive as much joy from exploring it as I did
          from bringing it to life.
        </p>
      </div>
      {/* Latest projekts */}
      <div>
        <div className="text-white flex justify-between border-b border-[#2e3237] mb-12 mt-20 pb-4">
          <p className="font-bold text-md text-[#babdc5]">Latest projects</p>
          <Link
            href={'/projects'}
            className="flex text-sm text-[#828996] items-center cursor-pointer"
          >
            All Projects <ArrowLongRightIcon className="h-4 w-4 ml-1" />
          </Link>
        </div>
        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3">
          <Link
            href={'/'}
            className="bg-[#04013A] relative rounded-xl p-6 transition-all hover:scale-105 hover:rotate-2"
          >
            <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-1 text-sm bg-opacity-10 text-white ">
              2000
            </div>
            <div className="p-12 relative flex justify-center items-center">
              <Image
                src="https://images.unsplash.com/photo-1637363990764-de84fd247b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="netflix"
                width={200}
                height={200}
              />
            </div>
            <div>
              <span className="inline-flex items-center">
                <h2 className="inline font-bold text-white">Project 1</h2>
              </span>
              <p className="text-white opacity-80">Type of project</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
