'use client';

import { useRouter } from 'next/navigation';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';

const BackArrow = () => {
  const router = useRouter();
  return (
    <div
      className="rounded-full cursor-pointer h-10 w-10 absolute top-2 left-2 text-[#9ea3ad] bg-transparent hover:bg-[#F09666] hover:text-white"
      onClick={() => router.back()}
    >
      <ArrowSmallLeftIcon />
    </div>
  );
};

export default BackArrow;
