import LinkButton from '../../components/LinkButton';
import React from 'react';

const about = () => {
  return (
    
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white">About Page</h1>
        <LinkButton url="/" text="Go to Home Page" />
        <LinkButton url="/contact"  text="Go to Contact Page" />
      </div>
   
  );
};

export default about;
