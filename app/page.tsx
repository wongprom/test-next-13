import { alegreya } from './fonts/fonts';

export default function Home() {
  return (
    <section className="p-5 h-screen">
      <div className=" bg-[#1c1d21] p-8 md:px-16 rounded-xl">
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
    </section>
  );
}
