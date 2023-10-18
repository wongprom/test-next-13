import React from 'react';
import { UserButton, currentUser } from '@clerk/nextjs';

const AddPage = async () => {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  return (
    <div className="text-white">
      <div className="text-4xl">
        <p>Add Page</p>
      </div>
      <div className="flex">
        <UserButton afterSignOutUrl="/projects/epigram" />{' '}
        <p>Hello user: {user.username || user.firstName || user.lastName}</p>
      </div>
    </div>
  );
};

export default AddPage;
