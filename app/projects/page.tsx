import AboutCard from "@/components/AboutCard";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="text-white p-0 sm:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
              My Projects
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-2">
            <p>
              Welcome to my projects page. Here you can explore some of the work
              I have done, including the various techniques and technologies
              that I've utilized. These projects showcase my skills and passion
              for development.
            </p>
            <p className="mt-4">
              Feel free to browse through the cards below to learn more about
              each project, and how I approached different challenges in their
              implementation.
            </p>
          </div>
        </div>
        <section className="w-full">
          <div className="py-12 mx-auto">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <AboutCard
                title={"EPIGRAM"}
                text={
                  "Here, you'll discover handpicked quotes and some life lessons that I believe can add a touch of positivity to your day. "
                }
                href={"/projects/epigram"}
              />
              <AboutCard
                title={"Death Note"}
                text={
                  "The 'Death Note' itself, a black notebook with instructions (known as 'Rules of the Death Note') written on the inside. When used correctly, it allows anyone to commit a murder, knowing only the victim's name and face."
                }
                href={"/projects/death-note"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
