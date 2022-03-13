import React from 'react';

const Owner = () => {
  return (
    <div className='profile min-h-screen bg-green-300 text-lg font-semibold'>
      <div className='grid justify-items-center p-4 gap-3'>
        <h1>Owner</h1>
        <img
          src='https://avatars.githubusercontent.com/u/28497629?v=4'
          alt=''
          width='200'
          height='200'
          className='rounded-full justify-self-center shadow-md'
        />
        <a
          href='https://github.com/abifitrird'
          target='_blank'
          rel='noopener noreferrer'
        >
          abifitrird
        </a>
      </div>
    </div>
  );
};

export default Owner;
