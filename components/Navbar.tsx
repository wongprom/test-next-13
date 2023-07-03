import Link from 'next/link';
// import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { mulish } from '../app/fonts/fonts';
const Navbar = () => {
  return (
    <header className="shrink-0 bg-[#222222] body-font text-[#ffffff]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <UserCircleIcon className="h-6 w-6" />
          <div className="pl-3 text-xs flex flex-col justify-center">
            <p className="font-bold">Jimmy Bäckström</p>
            <p>Front/full Stack</p>
          </div>
        </div>
        <div>
          <Bars3Icon className="h-12 w-12" />
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
          <Link href={'/'} className="mr-5 hover:text-[#eeeeee] cursor-pointer">
            Home
          </Link>
          <Link
            href={'/about'}
            className="mr-5 hover:text-[#eeeeee] cursor-pointer"
          >
            About
          </Link>
          <a className="mr-5 hover:text-[#eeeeee] cursor-pointer">Third Link</a>
          <a className="mr-5 hover:text-[#eeeeee] cursor-pointer">
            Fourth Link
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
