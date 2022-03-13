import React from 'react';

const NotFound = () => {
  return (
    <div className='w-full p-4 grid justify-items-center'>
      <img
        src='./github-logo.webp'
        alt='github-logo'
        width='100'
        height='100'
      />
      <h3>Error 404</h3>
      <p>User not found</p>
    </div>
  );
};

export default NotFound;
