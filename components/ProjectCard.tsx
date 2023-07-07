import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  imageURL: string;
  projectName: string;
  projectShortInfo: string;
  projectURL: string;
  bgHexColor?: string | undefined;
};

const ProjectCard = ({
  imageURL,
  projectName,
  projectShortInfo,
  projectURL,
  bgHexColor = '#04013A',
}: Props) => {
  return (
    <Link
      href={projectURL}
      style={{ backgroundColor: bgHexColor }}
      className={`
       relative rounded-xl p-6 transition-all hover:scale-105 hover:rotate-2`}
    >
      <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-1 text-sm bg-opacity-10 text-white ">
        2000
      </div>
      <div className="p-12 relative flex justify-center items-center">
        <Image src={imageURL} alt="netflix" width={200} height={200} />
      </div>
      <div>
        <span className="inline-flex items-center">
          <h2 className="inline font-bold text-white">{projectName}</h2>
        </span>
        <p className="text-white opacity-80">{projectShortInfo}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
