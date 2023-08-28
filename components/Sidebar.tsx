'use client';
import {
  BookOpenIcon,
  CameraIcon,
  DocumentIcon,
  FaceSmileIcon,
  FolderIcon,
  MusicalNoteIcon,
  ArrowUpRightIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';
import { Tooltip } from 'react-tooltip';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import LinkSidebar from './LinkSidebar';
import LinksSidebarWrapper from './LinksSidebarWrapper';
import LinksSidebarTitle from './LinksSidebarTitle';
import SidebarLogo from './SidebarLogo';
import SidebarModeButton from './SidebarModeButton';
import LinkSidebarExternal from './LinkSidebarExternal';

const Sidebar = () => {
  const currentRoute = usePathname();
  const activeLinkStyle = 'text-orange-600';

  return (
    <aside className="h-auto static p-4 bg-[#121316] text-[#9ea3ad] hidden md:flex md:flex-col xl:w-[240px]">
      <nav className="flex h-auto mb-2 flex-col space-y-20 xl:p-0">
        <SidebarLogo link={'/'} toolTipText="home" />

        <LinksSidebarWrapper>
          <LinksSidebarTitle title="about" />
          <LinkSidebar linkText="Me" url="/about" Icon={FaceSmileIcon} />
        </LinksSidebarWrapper>

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
          <LinksSidebarTitle title="Where to find me" />
          <LinkSidebarExternal
            link="https://github.com/wongprom"
            tooltipText="CV"
          />
          <LinkSidebar linkText="Read CV" url="/cv" Icon={NewspaperIcon} />
        </LinksSidebarWrapper>
      </nav>
      <div className="mt-auto">
        <SidebarModeButton />
      </div>
    </aside>
  );
};

export default Sidebar;
