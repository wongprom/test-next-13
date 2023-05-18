import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex-1 grid grid-cols-5  gap-4 ">
      <div className="col-span-5 md:col-span-2 md:rounded-md bg-white p-5">
        <h2 className="text-center underline underline-offset-4 uppercase">
          <Link href={'/about'}>About</Link>
        </h2>
        <ul className="flex  flex-col items-center cursor-pointer hover:text-gray-600">
          <li>
            <Link href={'/about/jimmy'}>Jimmy</Link>
          </li>
          <li>
            <Link href={''} />
          </li>
          <li>
            <Link href={''} />
          </li>
        </ul>
      </div>
      <div className="col-span-5 md:col-span-3 md:rounded-md bg-blue-800">
        This is JImmy bla bla blaaaa Right
      </div>
    </div>
  );
};

export default page;
