import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Tooltip } from 'react-tooltip';

type Props = {
  link: string;
  toolTipText: string;
};
const SidebarLogo = ({ link, toolTipText }: Props) => {
  const currentRoute = usePathname();
  const activeLinkStyle = 'text-orange-600';
  return (
    <div className="border-b border-orange-500/10 flex items-center justify-center mt-2">
      <Link
        href={link}
        className={`${currentRoute === link && activeLinkStyle} cursor-pointer`}
      >
        <div data-tooltip-id={toolTipText} data-tooltip-content={toolTipText}>
          <p className="tracking-widest text-orange-600 text-4xl font-thin">
            จิมมี่
          </p>
        </div>
        <Tooltip
          id={toolTipText}
          place="right"
          className="xl:hidden text-sm font-normal rounded-lg tracking-wider"
        />
      </Link>
      <div className="hidden xl:flex flex-col items-baseline text-xs ml-2 whitespace-nowrap">
        <p className="font-bold text-[#e5e6e9]">Jimmy Bäckström</p>
        <p className="text-[#9ea3ad]">Frontend Developer</p>
      </div>
    </div>
  );
};

export default SidebarLogo;
