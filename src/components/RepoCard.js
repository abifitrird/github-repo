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
  const created = new Date(createdAt);
  const updated = new Date(updatedAt);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div className='mx-2 p-4 rounded shadow-md bg-green-50'>
      <h2>
        <a href={htmlUrl} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>
      </h2>
      <hr />
      <p className='description'>{description}</p>
      <div className='grid grid-cols-5 gap-y-1'>
        <p className='col-span-1'>Language</p>
        <p className='col-span-4'>: {language}</p>
        <p className='col-span-1'>Date Created</p>
        <p className='col-span-4'>
          : {created.toLocaleDateString('en-UK', options)}
        </p>
        <p className='col-span-1'>Last Update</p>
        <p className='col-span-4'>
          : {updated.toLocaleDateString('en-UK', options)}
        </p>
        {topics.length > 0 && <p className='col-span-1'>Topics</p>}
        {topics.length > 0 && (
          <p className='col-span-4 flex flex-row flex-wrap space-x-2'>
            :{' '}
            {topics.map((item) => (
              <i>{item}</i>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
