'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  XMarkIcon,
  UserCircleIcon,
  Bars3Icon,
  MoonIcon,
} from '@heroicons/react/24/solid';
import {
  BookOpenIcon,
  CameraIcon,
  DocumentIcon,
  FolderIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import { mulish } from '../app/fonts/fonts';

/**
 * todo map links
 * todo Change href to real
 * todo use/create Navlinks to style active mod
 *
 *
 */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handlerClick = () => {
    setOpen(false);
  };

  return (
    <header className="relative">
      <div
        className={`${
          open && 'hidden '
        } shrink-0 bg-[#222222] body-font text-[#ffffff]`}
      >
        <div className="flex justify-between">
          <div className="flex items-center pt-4">
            <UserCircleIcon className="h-6 w-6" />
            <div className="pl-3 text-xs flex flex-col justify-center">
              <p className="font-bold">Jimmy Bäckström</p>
              <p>Front/full Stack</p>
            </div>
          </div>
          <div>
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="md:hidden h-12 w-12"
            />
          </div>
        </div>
        <div className="mx-auto hidden sm:flex flex-wrap p-5 flex-col xl:flex-row items-center">
          <Link
            href={'/'}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-[#aaaaaa]">Tailblocks</span>
          </Link>
          <nav
            className={`${mulish.className} md:ml-auto flex flex-wrap items-center text-base justify-center text-white`}
          >
            <Link
              href={'/'}
              className="
               hover:text-[#eeeeee] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={'/about'}
              className=" hover:text-[#eeeeee] cursor-pointer"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
      <nav
        className={`${
          !open && 'hidden '
        } fixed h-full w-full bg-[#121316]/50  text-[#696F7D] z-20`}
      >
        <div className="w-screen">
          <XMarkIcon
            onClick={() => setOpen(false)}
            className="h-12 w-12 absolute top-2 right-2 cursor-pointer  text-[#E5E6E9]"
          />

          <div className="flex h-screen md:w-1/2 flex-col gap-14 py-11 px-8 bg-[#121316]">
            <ul>
              <p className="">WHAT I CREATE</p>
              <li className="flex items-center pt-4">
                <FolderIcon className="h-5 w-5" />
                <Link
                  href={'/about'}
                  className=" hover:text-[#eeeeee] cursor-pointer pl-2 text-[#E5E6E9]"
                  onClick={handlerClick}
                >
                  Projects
                </Link>
              </li>
              <li className="flex items-center pt-4">
                <CameraIcon className="h-5 w-5" />
                <Link
                  href={'/about'}
                  className=" hover:text-[#eeeeee] cursor-pointer pl-2 text-[#E5E6E9]"
                  onClick={handlerClick}
                >
                  Photography
                </Link>
              </li>
            </ul>
            <ul className="">
              <p className="text-[#696F7D]">WHAT I CONSUME</p>
              <li className="flex items-center pt-4 ">
                <BookOpenIcon className="h-5 w-5" />
                <Link
                  href={'/about'}
                  className=" hover:text-[#eeeeee] cursor-pointer pl-2 text-[#E5E6E9]"
                  onClick={handlerClick}
                >
                  Books
                </Link>
              </li>
              <li className="flex items-center pt-4">
                <MusicalNoteIcon className="h-5 w-5" />
                <Link
                  href={'/about'}
                  className=" hover:text-[#eeeeee] cursor-pointer pl-2 text-[#E5E6E9]"
                  onClick={handlerClick}
                >
                  Music
                </Link>
              </li>
            </ul>
            <ul>
              <p className="text-[#696F7D]">WHERE TO FIND ME</p>
              <li className="flex items-center pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#E5E6E9"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <Link
                  href={'/about'}
                  className=" hover:text-[#eeeeee] cursor-pointer pl-2 text-[#E5E6E9]"
                  onClick={handlerClick}
                >
                  Github
                </Link>
              </li>
              <li className="flex items-center pt-4">
                <DocumentIcon className="h-5 w-5" />

                <Link
                  href={'/about'}
                  className=" hover:text-[#eeeeee] cursor-pointer pl-2 text-[#E5E6E9]"
                  onClick={handlerClick}
                >
                  ReadCV
                </Link>
              </li>
            </ul>
            <div className="mt-auto flex justify-center">
              <button className="flex justify-center p-4 w-full rounded-lg cursor-pointer text-[#e5e6e9]  bg-[#23252a]">
                <MoonIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
