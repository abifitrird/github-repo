import React from 'react';

const Empty = () => {
  return (
    <div className='w-full p-4 grid justify-items-center'>
      <img src='./empty.webp' alt='empty-file' width='100' height='100' />
      <h3>No repository found</h3>
    </div>
  );
};

export default Empty;
