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
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const currentRoute = usePathname();
  const activeLinkStyle = ' text-black bg-amber-300';

  return (
    <aside className="h-screen overflow-auto overflow-x-hidden p-4 bg-[#121316] text-[#9ea3ad] hidden md:flex md:flex-col xl:w-[240px]">
      <nav className="flex  flex-col space-y-20 xl:p-5">
        <Link
          href={'/'}
          className={`${
            currentRoute === '/' && activeLinkStyle
          } cursor-pointer`}
        >
          <div className="text-center">loggo</div>
        </Link>

        <div className="flex flex-col items-center  space-y-2">
          <Link
            href={'/about'}
            className={`${
              currentRoute === '/about' && activeLinkStyle
            } cursor-pointer`}
          >
            <FaceSmileIcon className="h-6 w-6" />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center xl:items-start space-y-2">
          <p className="hidden xl:block capitalize">what i create</p>

          <div className="flex w-full items-center justify-center">
            <Link
              href={'/projects'}
              className={`${
                currentRoute === '/projects' && activeLinkStyle
              } cursor-pointer`}
            >
              <FolderIcon className="h-6 w-6" />
            </Link>
            <p className="hidden xl:block ml-2">Project</p>
            <div className="hidden p-1 xl:flex items-center justify-center ml-auto text-[#828996] bg-[#23252a] text-[10px] h-4 w-4 rounded">
              <span>3</span>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <Link href={'/'} className="cursor-pointer">
              <CameraIcon className="h-6 w-6" />
            </Link>
            <p className="hidden xl:block ml-2">Photography</p>
            <div className="hidden p-1 xl:flex items-center justify-center ml-auto text-[#828996] bg-[#23252a] text-[10px] h-4 w-4 rounded">
              <span>4</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start space-y-2">
          <p className="hidden xl:block capitalize">what i consume</p>
          <div className="flex w-full items-center justify-center">
            <Link href={'/'} className="cursor-pointer">
              <BookOpenIcon className="h-6 w-6" />
            </Link>
            <p className="hidden xl:block ml-2">Books</p>
            <div className="hidden p-1 xl:flex items-center justify-center ml-auto text-[#828996] bg-[#23252a] text-[10px] h-4 w-4 rounded">
              <span>5</span>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <Link href={'/'} className="cursor-pointer">
              <MusicalNoteIcon className="h-6 w-6" />
            </Link>
            <p className="hidden xl:block ml-2">Music</p>
            <div className="hidden p-1 xl:flex items-center justify-center ml-auto text-[#828996] bg-[#23252a] text-[10px] h-4 w-4 rounded">
              <span>5</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start space-y-2">
          <p className="hidden xl:block capitalize">where to find me</p>
          <div className="flex w-full items-center justify-center">
            <Link href={'/'} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="#9ea3ad"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <p className="hidden xl:block ml-2">Github</p>
            <div className="hidden p-1 xl:flex items-center justify-center ml-auto text-[#828996] bg-[#121316] text-[10px] h-5 w-5 rounded">
              <ArrowUpRightIcon strokeWidth="2" />
            </div>
          </div>
          {/* <Link href={'/'} className="cursor-pointer">
            <DocumentIcon className="h-4 w-4" />
          </Link> */}
        </div>
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
