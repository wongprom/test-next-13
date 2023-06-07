import Link from 'next/link';
import React from 'react';
import { mulish } from '../app/fonts/fonts';
const Navbar = () => {
  return (
    <header className="shrink-0 bg-[#222222] body-font text-color-[#ffffff]">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
          <Link
            href={'/'}
            className="cursor-pointer ml-3 text-xl text-[#aaaaaa]"
          >
            Tailblocks
          </Link>
          {/* <span className="ml-3 text-xl text-[#aaaaaa]">Tailblocks</span> */}
        </a>
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
