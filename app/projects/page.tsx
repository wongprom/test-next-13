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
            text={'SOME TEXT ABOUT EPIGRAM...'}
            href={'/projects/epigram'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
