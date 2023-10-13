'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export type Props = {
  route: string;
  linkText: string;
};

const SubLinks = ({ route, linkText }: Props) => {
  const currentRoute = usePathname();
  const activeLinkStyle = 'text-orange-600';
  const currentRouteEndsWith = currentRoute.endsWith(route);
  return (
    <li className="">
      <Link
        href={route}
        className={`cursor-pointer text-[#aaaaaa] ${
          currentRouteEndsWith && activeLinkStyle
        } hover:text-white`}
      >
        {linkText}
      </Link>
    </li>
  );
};

export default SubLinks;
