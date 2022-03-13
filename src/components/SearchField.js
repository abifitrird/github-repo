import React, { useEffect, useState } from 'react';

const SearchField = ({ getData }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const input = document.getElementById('username');

    input.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('submit').click();
      }
    });
  }, []);

  return (
    <div className='w-full px-3 font-semibold flex flex-row items-center text-green-900'>
      <label className='w-48' htmlFor='username'>
        Github username
      </label>
      <input
        id='username'
        type='text'
        placeholder='Username'
        className='w-full p-3 mr-3 border border-green-300 rounded-md shadow-md focus:outline-none'
        onChange={(element) => setUsername(element.target.value)}
      />
      <button
        id='submit'
        className='w-48 p-3 bg-green-300 rounded-md shadow-md font-semibold hover:text-white hover:bg-green-600 focus:outline-none'
        type='type'
        onClick={() => getData(username)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
