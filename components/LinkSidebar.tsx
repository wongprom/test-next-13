"use client";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Tooltip } from "react-tooltip";

type Props = {
  linkText: string;
  url: string;
  Icon: React.ElementType;
  numOfProjects?: string;
};

const LinkSidebar = ({ linkText, url, Icon, numOfProjects }: Props) => {
  const currentRoute = usePathname();
  const isCurrentRouteStartsWithURL = currentRoute.startsWith(url);

  const activeLinkStyle = "text-orange-600";
  return (
    <Link href={url} passHref className="w-full flex">
      <div
        className={`flex w-full items-center rounded-xl px-3 py-2 cursor-pointer hover:bg-[#1c1d21] ${
          isCurrentRouteStartsWithURL && "bg-[#1c1d21]"
        }`}
      >
        <div className="flex items-center flex-grow">
          <Icon
            className={`h-6 w-6 focus:outline-none ${
              isCurrentRouteStartsWithURL && activeLinkStyle
            }`}
            aria-hidden="false"
            data-tooltip-id={linkText}
            data-tooltip-content={linkText}
          />
          <Tooltip
            id={linkText}
            place="right"
            className="xl:hidden text-sm font-normal rounded-lg tracking-wider"
          />
          <p className={`hidden xl:block ml-2`}>{linkText}</p>
        </div>
        {numOfProjects && (
          <div className="hidden xl:flex items-center justify-center ml-auto text-[#828996] bg-[#23252a] text-[10px] h-4 w-4 rounded">
            <span>{numOfProjects}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default LinkSidebar;
