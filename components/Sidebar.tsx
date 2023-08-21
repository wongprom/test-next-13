'use client';
import {
  BookOpenIcon,
  CameraIcon,
  DocumentIcon,
  FaceSmileIcon,
  FolderIcon,
  MoonIcon,
  MusicalNoteIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { Tooltip } from 'react-tooltip';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import LinkSidebar from './LinkSidebar';
import LinksSidebarWrapper from './LinksSidebarWrapper';
import LinksSidebarTitle from './LinksSidebarTitle';

const Sidebar = () => {
  const currentRoute = usePathname();
  const activeLinkStyle = 'text-orange-600';

  return (
    <aside className="h-auto static p-4 bg-[#121316] text-[#9ea3ad] hidden md:flex md:flex-col xl:w-[240px]">
      <nav className="flex h-auto mb-2 flex-col space-y-20 xl:p-0">
        <div className="border-b border-orange-500/10 flex items-center justify-center mt-2">
          <Link
            href={'/'}
            className={`${
              currentRoute === '/' && activeLinkStyle
            } cursor-pointer`}
          >
            <div
              className=""
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Home"
            >
              <p className="tracking-widest text-orange-600 text-4xl font-thin">
                จิมมี่
              </p>
            </div>
            <Tooltip
              id="home-tooltip"
              place="right"
              className="xl:hidden text-sm font-normal rounded-lg tracking-wider"
            />
          </Link>
          <div className="hidden xl:flex flex-col items-baseline text-xs ml-2 whitespace-nowrap">
            <p className="font-bold text-[#e5e6e9]">Jimmy Bäckström</p>
            <p className="text-[#9ea3ad]">Frontend Developer</p>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start space-y-2">
          <p className={`hidden xl:block capitalize`}>about</p>
          <LinkSidebar linkText="Me" url="/about" Icon={FaceSmileIcon} />
        </div>

        <LinksSidebarWrapper>
          <LinksSidebarTitle title="what i create" />
          <LinkSidebar
            linkText="Projects"
            url="/projects"
            Icon={FolderIcon}
            numOfProjects="2"
          />

          <LinkSidebar
            linkText="Photography"
            url="/photography"
            Icon={CameraIcon}
            numOfProjects="8"
          />
        </LinksSidebarWrapper>
        <LinksSidebarWrapper>
          <LinksSidebarTitle title="what i consume" />
          <LinkSidebar
            linkText="Books"
            url="/books"
            Icon={BookOpenIcon}
            numOfProjects="2"
          />
          <LinkSidebar
            linkText="Music"
            url="/music"
            Icon={MusicalNoteIcon}
            numOfProjects="5"
          />
        </LinksSidebarWrapper>
        <LinksSidebarWrapper>
          <LinksSidebarTitle title="where to find me" />
          <div className="flex w-full items-center justify-center rounded-xl px-3 py-2 xl:hover:bg-[#1c1d21]">
            <Link
              href={'https://github.com/wongprom'}
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="#9ea3ad"
                data-tooltip-id="github-icon-tooltip"
                data-tooltip-content="Github"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <Tooltip
                id="github-icon-tooltip"
                place="right"
                className="xl:hidden text-sm font-normal rounded-lg tracking-wider"
              />
            </Link>
            <p className="hidden xl:block ml-2">Github</p>
            <div className="hidden p-1 xl:flex items-center justify-center ml-auto text-[#828996] bg-[#121316] text-[10px] h-5 w-5 rounded">
              <ArrowUpRightIcon strokeWidth="2" />
            </div>
          </div>
        </LinksSidebarWrapper>
      </nav>
      <div className="mt-auto">
        <button className="p-4 bg-[#23252a] cursor-pointer rounded-lg text-[#e5e6e9]">
          {' '}
          <MoonIcon className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
