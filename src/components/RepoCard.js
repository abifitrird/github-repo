import React from 'react';

const RepoCard = ({
  name,
  htmlUrl,
  language,
  description,
  createdAt,
  updatedAt,
  topics,
}) => {
  return (
    <div className='mx-2 p-4 rounded shadow-md bg-green-50'>
      <h2>
        <a href={htmlUrl} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </h2>
      <hr />
      <p>{description}</p>
      <div className='grid grid-cols-4'>
        <p className='col-span-1'>Language</p>
        <p className='col-span-3'>{language}</p>
        <p className='col-span-1'>Date Created</p>
        <p className='col-span-3'>{createdAt}</p>
        <p className='col-span-1'>Last Update</p>
        <p className='col-span-3'>{updatedAt}</p>
        <p className='col-span-1'>Topics</p>
        <p className='col-span-3'>{topics}</p>
      </div>
    </div>
  );
};

export default RepoCard;
