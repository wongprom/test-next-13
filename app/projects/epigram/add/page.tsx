'use client';
import React from 'react';
import { UserButton, currentUser, useUser } from '@clerk/nextjs';
import { Button } from '@/components/shadcn/ui/button';

const AddPage = () => {
  // const user = await currentUser();
  const { isSignedIn, user, isLoaded } = useUser();
  console.log('🚀 ~ file: page.tsx:8 ~ AddPage ~ user:', user);

  if (!isLoaded) {
    return <p>CLERK IS LOADING......</p>;
  }
  if (isSignedIn) {
    return (
      <div className="text-white">
        <div className="text-4xl">
          <p>Add Page</p>
        </div>
        <Button variant="destructive">test</Button>
        <div className="flex">
          <UserButton afterSignOutUrl="/projects/epigram" />{' '}
          <p>
            Hello User:{' '}
            {user.firstName || user.username || user.fullName || user.lastName}
          </p>
        </div>
      </div>
    );
  }
  return <div>Not signed in</div>;
};

export default AddPage;
