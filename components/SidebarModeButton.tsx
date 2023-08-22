import { MoonIcon } from '@heroicons/react/24/outline';
import React from 'react';

const SidebarModeButton = () => {
  return (
    <button className="p-4 bg-[#23252a] cursor-pointer rounded-lg text-[#e5e6e9]">
      {' '}
      <MoonIcon className="h-4 w-4" />
    </button>
  );
};

export default SidebarModeButton;
