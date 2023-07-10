import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { alegreya } from './fonts/fonts';

export default function Home() {
  const n = 3;
  return (
    <main className=" bg-[#1c1d21] p-8 md:px-16 rounded-xl">
      <div>
        <h1
          className={`${alegreya.className} text-2xl font-bold leading-normal text-[#e5e6e9]`}
        >
          Hey, I am Jimmy - a frontend developer with a passion for backend
          development as well. Living in the beautiful city of Stockholm, I
          thrive on being involved in every aspect of a project, from design to
          deployment.
        </h1>
        <p className="text-[#babdc5] mt-6">
          Welcome to my personal website, a cozy corner of the internet that I
          have crafted exclusively for sharing my interests and passions with
          fellow enthusiasts. Here, I can freely express myself without the
          constraints of social media algorithms or adhering to any predefined
          rules. Feel free to wander through my digital living room, and I
          sincerely hope that you derive as much joy from exploring it as I did
          from bringing it to life.
        </p>
      </div>
      <section>
        <SectionHeading
          url={'/about'}
          linkText={'Full journey'}
          headingText={'Pieces from journey'}
        />
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3">
          {/* Journey Card goes here  */}
        </div>
      </section>
      <section>
        <SectionHeading
          url={'/projects'}
          linkText={'All Projects'}
          headingText={'Latest projects'}
        />
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3">
          {[...Array(n)].map((e, i) => (
            <ProjectCard
              key={i}
              // bgHexColor={'#cd14b4'}
              projectURL="/about"
              projectShortInfo={`Project short info text ${i + 1}`}
              projectName={`Project name ${i + 1}`}
              imageURL="https://images.unsplash.com/photo-1637363990764-de84fd247b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          ))}
        </div>
      </section>
      <section>
        <SectionHeading
          url={'/projects'}
          linkText={'Latest photos taken'}
          headingText={'All photos'}
        />
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-3">
          {/* Photos goes here  */}
        </div>
      </section>
    </main>
  );
}
