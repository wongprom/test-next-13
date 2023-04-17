import Link from 'next/link';
import React from 'react';

type Props = {
  url: string;
  color: string;
  text: string;
};

const LinkButton = (props: Props) => {
  return (
    <Link
      href={props.url}
      className={`text-center text-white bg-${props.color}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.color}-600 rounded text-lg m-4`}
    >
      {props.text}
    </Link>
  );
};

export default LinkButton;
