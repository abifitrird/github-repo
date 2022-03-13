import React from 'react';

const Owner = ({ avatarUrl, htmlUrl, username, total }) => {
  return (
    <div className='profile min-h-screen bg-green-300 text-lg text-green-900 font-semibold'>
      <div className='grid justify-items-center p-4 gap-3'>
        <h1>Github User</h1>
        <img
          src={avatarUrl}
          alt={username}
          width='200'
          height='200'
          className='rounded-full justify-self-center shadow-md'
        />
        <p>
          Username:{' '}
          <a href={htmlUrl} target='_blank' rel='noopener noreferrer'>
            {username}
          </a>
        </p>
        <p>
          Total repositories: <u>{total}</u>
        </p>
      </div>
    </div>
  );
};

export default Owner;
