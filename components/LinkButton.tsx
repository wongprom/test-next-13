import Link from 'next/link';
import React from 'react';

type Props = {
  url: string;
  text: string;
};

const LinkButton = (props: Props) => {
  return (
    <div className="m-5">
      <Link
        href={props.url}
        className="border text-center text-white bg-gray-700 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg m-4"
      >
        {props.text}
      </Link>
    </div>
  );
};

export default LinkButton;
