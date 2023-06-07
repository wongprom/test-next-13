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
        className="text-center text-[#ffffff] bg-[#666666] py-2 px-8 focus:outline-none hover:bg-[#ffffff] hover:hover:text-[#666666] rounded text-lg m-4 whitespace-nowrap"
      >
        {props.text}
      </Link>
    </div>
  );
};

export default LinkButton;
