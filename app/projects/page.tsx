import AboutCard from '@/components/AboutCard';
import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="text-white">
      <p>ProjectsPage</p>
      <div>
        <p>Display projects</p>
        <div className="max-w-md">
          <AboutCard
            title={'EPIGRAM'}
            text={
              "Here, you'll discover handpicked quotes and some life lessons that I believe can add a touch of positivity to your day. "
            }
            href={'/projects/epigram'}
          />
          <AboutCard
            title={'Death Note'}
            text={
              "The 'Death Note' itself, a black notebook with instructions (known as 'Rules of the Death Note') written on the inside. When used correctly, it allows anyone to commit a murder, knowing only the victim's name and face"
            }
            href={'/projects/death-note'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
