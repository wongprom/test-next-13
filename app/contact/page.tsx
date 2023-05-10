import LinkButton from '../../components/LinkButton';
import React from 'react';

const contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl text-white">Contact Page</h1>
      <LinkButton url="/" text="Go to Home Page" />
      <LinkButton url="/about"  text="Go to About Page" />
    </div>
  );
};

export default contact;
