import React from 'react';

type Props = {
  title: string;
};

const LinksSidebarTitle = ({ title }: Props) => {
  return <p className="hidden xl:block capitalize">{title}</p>;
};

export default LinksSidebarTitle;
