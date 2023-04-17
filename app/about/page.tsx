import LinkButton from '../../components/LinkButton';
import React from 'react';

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <LinkButton url="/" color="green" text="Go to Home Page" />
      <LinkButton url="/contact" color="pink" text="Go to Contact Page" />
    </div>
  );
};

export default about;
