'use client';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/shadcn/ui/button';

const AddPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <p>CLERK IS LOADING......</p>;
  }
  if (isSignedIn) {
    return (
      <div className="text-white p-0 sm:p-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4 lg:col-span-1">
              <h1 className="text-3xl text-center sm:text-left lg:text-2xl">
                Add Quote
              </h1>
            </div>
            <div className="col-span-4 lg:col-span-3 mt-2">
              <p>
                Enim id molestie viverra potenti accumsan netus aliquet.
                Faucibus at cras senectus donec justo pellentesque quisque.Enim
                id molestie viverra potenti accumsan netus aliquet. Faucibus at
                cras senectus donec justo pellentesque quisque.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-4 lg:col-start-2 col-end-4 ">
              <section className="w-full">form here</section>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Not signed in</div>;
};

export default AddPage;
