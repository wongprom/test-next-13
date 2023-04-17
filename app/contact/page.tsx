import LinkButton from '../../components/LinkButton';
import React from 'react';

const contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <LinkButton url="/" color="green" text="Go to Home Page" />
      <LinkButton url="/about" color="pink" text="Go to About Page" />
    </div>
  );
};

export default contact;
